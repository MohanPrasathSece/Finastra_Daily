export interface LeadSubmissionData {
  fullName: string;
  email: string;
  phone: string;
  message?: string;
  investmentGoal?: string;
}

export interface SubmissionResponse {
  success: boolean;
  message: string;
  error?: unknown;
}

const CRM_HOST = import.meta.env.VITE_CRM_HOST || "https://crm.leadmanagement.api";
const CRM_AUTH_TOKEN = import.meta.env.VITE_CRM_AUTH_TOKEN || "AFF_3_1c3fcc3cac32092698f62abxxxx";

export async function submitLeadToCRM(data: LeadSubmissionData): Promise<SubmissionResponse> {
  // Parse full name into first and last name
  const nameParts = data.fullName.trim().split(/\s+/);
  const first_name = nameParts[0] || "Unknown";
  const last_name = nameParts.slice(1).join(" ") || "Lead";

  // Swiss phone auto-formatter
  let phone = (data.phone || "").replace(/[^0-9+]/g, '');
  if (phone) {
    if (phone.startsWith('+')) {
      phone = '00' + phone.slice(1);
    }
    if (phone.startsWith('41') && phone.length === 11) {
      phone = '00' + phone;
    }
    if (!phone.startsWith('0041')) {
      if (phone.startsWith('0') && !phone.startsWith('00')) {
        phone = '0041' + phone.slice(1);
      } else if (!phone.startsWith('00')) {
        phone = '0041' + phone;
      }
    }
  } else {
    phone = "0000000000";
  }

  // Build the payload per the specified API documentation
  const payload = {
    country_name: "ch",
    description: data.message ? data.message.trim() : "Signup Lead",
    phone: phone,
    email: data.email,
    first_name: first_name,
    last_name: last_name,
    custom_fields: {
      Source_ID: "website",
      How_Much_Invested: data.investmentGoal || "0",
      Outline_Your_Case: data.message || "",
    },
  };

  let endpoint = CRM_HOST.trim().replace(/\/$/, "");
  const apiPath = "/api/lead_management/api/affiliates";
  if (!endpoint.includes(apiPath)) {
    endpoint = `${endpoint}${apiPath}`;
  }

  console.log("Submitting lead to CRM:", {
    endpoint,
    payload,
  });

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: CRM_AUTH_TOKEN,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => "Unknown error");
      throw new Error(`HTTP error ${response.status}: ${errorText}`);
    }

    // Since the document states "This request doesn't return any response body" for Example Response:
    // "Example Response: Body Headers (0) No response body"
    // we will check if there's content, otherwise return success.
    let responseData = null;
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      responseData = await response.json();
    } else {
      await response.text();
    }

    return {
      success: true,
      message: "Lead successfully created in CRM.",
    };
  } catch (error: unknown) {
    console.error("CRM submission error:", error);

    // Check if this looks like a CORS error (network request failed but status code is absent)
    const isCorsOrNetworkError = error instanceof TypeError && error.message === "Failed to fetch";

    const errMessage =
      error instanceof Error
        ? error.message
        : "An unexpected error occurred during lead submission.";

    if (isCorsOrNetworkError) {
      return {
        success: false,
        message:
          "Network request failed. This is likely due to CORS restrictions on the CRM server or an invalid host URL.",
        error,
      };
    }

    return {
      success: false,
      message: errMessage,
      error,
    };
  }
}
