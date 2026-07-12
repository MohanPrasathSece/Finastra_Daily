export interface LeadSubmissionData {
  fullName: string;
  email: string;
  phone: string;
  countryCode?: string;
  message?: string;
  investmentGoal?: string;
  type?: "contact" | "signup";
}

export interface SubmissionResponse {
  success: boolean;
  message: string;
  error?: unknown;
}

const CRM_HOST = import.meta.env.VITE_CRM_HOST || "https://crm.leadmanagement.api";
const CRM_AUTH_TOKEN = import.meta.env.VITE_CRM_AUTH_TOKEN || "AFF_3_1c3fcc3cac32092698f62abxxxx";

const DIAL_CODES: Record<string, string> = {
  CH: "41",
  US: "1",
  GB: "44",
  DE: "49",
  IN: "91",
  FR: "33",
  BE: "32",
  IT: "39",
  ES: "34",
  NL: "31",
  AT: "43",
  SE: "46",
  CA: "1"
};

function formatPhoneForCRM(phoneInput: string, countryCode: string = "FR"): string {
  let phone = (phoneInput || "").replace(/[^\d+]/g, "").trim();
  const upperCountry = (countryCode || "FR").toUpperCase();
  const code = DIAL_CODES[upperCountry] || "33";

  if (phone) {
    if (phone.startsWith("+")) {
      phone = "00" + phone.slice(1);
    }
    if (phone.startsWith(code) && !phone.startsWith("00" + code)) {
      phone = "00" + phone;
    }
    if (phone.startsWith("0") && !phone.startsWith("00")) {
      phone = "00" + code + phone.slice(1);
    }
    if (!phone.startsWith("00")) {
      phone = "00" + code + phone;
    }
  } else {
    phone = "0000000000";
  }
  return phone;
}

export async function submitLeadToCRM(data: LeadSubmissionData): Promise<SubmissionResponse> {
  // Parse full name into first and last name
  const nameParts = data.fullName.trim().split(/\s+/);
  const first_name = nameParts[0] || "Unknown";
  const last_name = nameParts.slice(1).join(" ") || "Lead";

  const countryCode = data.countryCode || "FR";
  const formattedPhone = formatPhoneForCRM(data.phone, countryCode);

  // Build the payload per the specified API documentation
  const payload = {
    country_name: countryCode.toLowerCase(),
    description: "Finastra Daily",
    phone: formattedPhone,
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
    let responseData: any = null;
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      responseData = await response.json();
      
      // Check if CRM explicitly says it's invalid despite 200 OK
      if (responseData && (responseData.error || responseData.success === false || responseData.status === "error" || (typeof responseData.message === "string" && responseData.message.toLowerCase().includes("invalid")))) {
        throw new Error(responseData.message || responseData.error || "Invalid lead reported by CRM");
      }
    } else {
      await response.text();
    }

    try {
      const url = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_DASHBOARD_URL) || "https://lead-dashboard-orcin.vercel.app/api/increment";
      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ website: "Finastra Daily", type: data.type || (data.message ? "contact" : "signup"), name: data.fullName, email: data.email})
      }).catch(() => {});
    } catch(e){}

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
