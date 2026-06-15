import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";

const URL = "https://www.egitel.com/5itg7bhhf71/tradegpt/?lang=fr&aff_id=3408";

const A = ({ children, className = "", ...rest }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a href={URL} target="_blank" rel="noopener noreferrer" className={className} {...rest}>
    {children}
  </a>
);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "European Investors Shift Toward AI-Powered Crypto Trading Platforms Amid Market Volatility — The European Ledger" },
      { name: "description", content: "An in-depth report on how European retail and institutional investors are adopting AI-driven trading systems for digital assets." },
      { property: "og:title", content: "European Investors Shift Toward AI-Powered Crypto Trading Platforms" },
      { property: "og:description", content: "Editorial analysis of the European crypto, blockchain and AI trading landscape." },
    ],
  }),
  component: Article,
});

const utilityLinks = ["Subscribe", "Login", "Register", "Premium", "Newsletters", "Podcasts", "Mobile App", "Events", "Careers", "Contact"];
const nav = ["Home","Latest News","Politics","Business","Economy","Finance","Markets","Crypto","Blockchain","Technology","Artificial Intelligence","Startups","Energy","Environment","Science","Opinion","Videos","Podcasts","Education","Lifestyle","Travel","Culture","Sports"];
const ticker = [
  "ECB signals cautious optimism on digital euro pilot phase",
  "Bitcoin reclaims €58,000 as European ETFs see record inflows",
  "Frankfurt fintechs raise €2.3bn in Q3 funding round",
  "AI trading desks outperform human-led funds for third consecutive quarter",
  "MiCA regulation enters second compliance window",
  "Paris-based hedge fund launches on-chain credit strategy",
  "Ethereum validators surpass 1.1 million milestone",
  "Swiss National Bank publishes tokenisation framework",
  "Stablecoin volumes in EU jump 47% year-on-year",
  "London exchange debuts AI-managed crypto index",
  "Banco Santander expands custody services to retail",
  "Lithuania approves new digital asset licensing rules",
  "Nordic energy firms tokenise carbon credits",
  "EU Parliament debates AI Act amendments for finance",
  "Tether reports €92bn in EU reserves",
  "Coinbase opens new compliance hub in Dublin",
  "Algorithmic trading now accounts for 71% of EU crypto volume",
  "Spanish regulator fines unlicensed broker €4.1m",
  "Deutsche Börse opens regulated DeFi window",
  "AI sentiment models forecast a calmer Q4 for digital assets",
];

const sidebarLists: { title: string; items: string[] }[] = [
  { title: "Most Read", items: [
    "Why European banks are quietly buying Bitcoin",
    "The rise of algorithmic asset managers in Zürich",
    "Inside the ECB's digital euro working group",
    "How MiFID III could reshape retail trading",
    "AI hedge funds and the new alpha frontier",
  ]},
  { title: "Trending", items: [
    "Lagarde: 'Innovation must not outpace stability'",
    "London-Frankfurt corridor for tokenised bonds",
    "Stablecoin issuers face new EU audit rules",
    "The €1.8bn quiet bet on Layer-2 networks",
    "Why volatility funds are hiring linguists",
  ]},
  { title: "Editor's Picks", items: [
    "A reader's guide to the Markets in Crypto-Assets Act",
    "Five charts that explain the new ETF era",
    "Profile: the engineer behind Europe's largest DEX",
    "What the Fed misses about European liquidity",
    "An honest conversation about AI trading risk",
  ]},
  { title: "Latest News", items: [
    "Brussels weighs new disclosure rules for AI funds",
    "Italy launches sovereign blockchain testbed",
    "ABN AMRO opens crypto desk to professional clients",
    "Greek startup raises €40m for on-chain remittance",
    "OECD updates digital asset tax guidance",
  ]},
  { title: "Popular Crypto Stories", items: [
    "Bitcoin's quietly stunning correlation shift",
    "What Solana's outage really told us",
    "MEV in Europe: the hidden tax on traders",
    "How three women built a Berlin crypto bank",
    "The case for boring blockchains",
  ]},
  { title: "Market Updates", items: [
    "DAX closes flat ahead of ECB statement",
    "Euro strengthens against the dollar",
    "Brent crude slips on demand outlook",
    "Gold steady near 12-month high",
    "Bund yields edge lower in afternoon trade",
  ]},
];

const related = [
  { cat: "Markets", title: "Frankfurt opens regulated tokenised bond market", sum: "Deutsche Börse's new venue lists €4bn of debt in its first week." },
  { cat: "AI", title: "The quiet machine learning revolution inside Paris trading desks", sum: "How three boutique firms are rewriting the alpha playbook." },
  { cat: "Crypto", title: "Why Spanish retail flows are leading the European cycle", sum: "Banco BBVA's custody numbers reveal a structural shift." },
  { cat: "Policy", title: "MiCA at six months: what has actually changed", sum: "A clear-eyed accounting of compliance, costs and customer outcomes." },
  { cat: "Blockchain", title: "Tokenised real estate finds an audience in Lisbon", sum: "Portuguese platforms report 38% quarter-on-quarter growth." },
  { cat: "Economy", title: "The euro's surprising resilience in a digital age", sum: "Analysts weigh the impact of CBDC pilots on FX markets." },
  { cat: "Opinion", title: "Innovation needs patience, not panic", sum: "A senior banker's view on the next regulatory cycle." },
  { cat: "Technology", title: "Inside the data centres powering EU AI trading", sum: "Energy contracts, latency wars and a new geography of finance." },
];


const commentNames = [
  "Marc Lefèvre","Anneliese Hoffmann","Giulia Romano","Henrik Sørensen","Pilar Navarro","Tomáš Novák","Élodie Bernard","Lukas Berger",
  "Bianca Costa","Mikael Lindgren","Sofia Andersson","Daan de Vries","Catherine Dubois","Rafael Fernández","Jana Kowalski","Stefan Müller",
  "Margaux Petit","Andrea Ricci","Pieter Janssen","Klara Schmidt","Ines Carvalho","Joost van Dijk","Marta Lopes","Niels Bakker",
  "Alessio Conti","Hanna Eriksson","Olivier Martin","Camille Roux","Lucas Almeida","Aurélien Caron","Beatrice Esposito","Felix Wagner",
  "Mireia Solé","Jonas Kristensen","Inga Pärn","Yannick Leroy","Charlotte Weiss","Diego Moreno","Eva Lindholm","Ravi Verhoeven",
  "Sara Bianchi","Pierre Dumas","Liv Hansen","Matteo Greco","Noor El-Sayed","Mehmet Yıldız","Petra Horáková","Rikard Berg",
  "Léa Fontaine","Albert Vidal","Dorothea Klein","Benoît Marchand"
];

const commentTexts = [
  "Excellent piece. The point about latency arbitrage in regulated venues deserves a follow-up.",
  "I'd love to see a comparison with the Asian markets, particularly Singapore.",
  "Finally a balanced view. Most coverage either dismisses or worships these systems.",
  "The MiCA section is spot on. We're already seeing compliance costs squeeze smaller brokers.",
  "As someone working at a Paris desk, this matches what I'm seeing on the ground.",
  "Curious about the energy footprint of these AI clusters. Worth a dedicated article.",
  "Could the editor clarify which custodians were surveyed for the figures cited?",
  "Brilliant analysis. Bookmarked for our internal research note.",
  "The risk framing is refreshing. Not every algorithm is an oracle.",
  "Looking forward to the follow-up on tokenised bonds.",
];

const footerCols: { title: string; items: string[] }[] = [
  { title: "News", items: ["News","Politics","Business","Economy","Technology","Science","Culture","Sports","Opinion","Crypto"] },
  { title: "Finance", items: ["Markets","Trading","Investing","Banking","Commodities","Forex","Stocks","Funds","Analysis","Reports"] },
  { title: "Company", items: ["About","Careers","Press","Contact","Newsroom","Advertise","Partnerships","Events","Support","Masthead"] },
  { title: "Legal", items: ["Terms","Privacy","Cookies","Accessibility","Compliance","Editorial Policy","User Agreement","Disclosures","Security","Imprint"] },
  { title: "Products", items: ["Apps","Premium","Newsletter","Podcasts","Video","Archive","Research","Education","Community","Crosswords"] },
];

const socials = ["Facebook","Instagram","X / Twitter","LinkedIn","YouTube","Telegram","WhatsApp","Reddit","TikTok","Threads"];

const partnerSections = [
  { title: "Partner Publications", items: ["Frankfurter Wirtschaftsbrief","La Tribune Économique","Mediterraneo Finanza","Nordic Capital Review","Iberia Markets Daily","Baltic Business Journal","Adriatic Finance Today","Helvetia Investor","Benelux Economic Times","Eastern Europe Markets"] },
  { title: "Financial Guides", items: ["Beginner's Guide to ETFs","Understanding MiCA","Crypto Tax in the EU","Reading a Balance Sheet","Macro for Investors","Pension Planning Basics","Currency Hedging 101","Dividend Strategies","Risk-Adjusted Returns","Behavioural Finance"] },
  { title: "Learning Resources", items: ["AI Trading Course","Blockchain Fundamentals","Market Microstructure","Portfolio Theory","Derivatives Explained","ESG Investing","Quant Bootcamp","Stablecoin Mechanics","DeFi Primer","On-Chain Analysis"] },
  { title: "Market Reports", items: ["EU Quarterly Review","Digital Asset Outlook","European Bank Index","Energy Markets Brief","Tech Earnings Recap","Fixed Income Monitor","SME Lending Report","Real Estate Watch","Commodities Snapshot","Currency Forecast"] },
];

function Article() {
  return (
    <div className="bg-background text-ink min-h-screen">
      {/* Utility bar */}
      <div className="border-b border-rule bg-paper text-xs">
        <div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-between gap-y-2 px-4 py-2">
          <div className="hidden text-muted-foreground sm:block">Monday, 15 June 2026 · Frankfurt · 14°C</div>
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-1">
            {utilityLinks.map((l) => (
              <li key={l}><A className="text-ink/80 hover:text-accent">{l}</A></li>
            ))}
            <li><A className="rounded-sm bg-accent px-2 py-1 font-semibold text-accent-foreground">Subscribe €1/month</A></li>
          </ul>
        </div>
      </div>

      {/* Masthead */}
      <header className="border-b border-rule">
        <div className="mx-auto max-w-[1320px] px-4 py-6">
          <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-4">
            <div className="hidden text-xs uppercase tracking-widest text-muted-foreground md:block">
              Vol. CXIV · No. 24,318<br/>Independent since 1887
            </div>
            <A className="text-center">
              <div className="serif text-4xl font-black tracking-tight md:text-6xl">The European Ledger</div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.35em] text-muted-foreground">Finance · Policy · Innovation</div>
            </A>
            <div className="hidden justify-end gap-3 md:flex">
              <A className="rounded border border-ink/30 px-3 py-1.5 text-xs font-semibold hover:bg-ink hover:text-background">Sign in</A>
              <A className="rounded bg-ink px-3 py-1.5 text-xs font-semibold text-background hover:bg-accent">Try Premium</A>
              <A aria-label="Search" className="grid h-8 w-8 place-items-center rounded border border-ink/30">🔍</A>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="border-y border-rule bg-ink text-background">
          <div className="mx-auto max-w-[1320px] overflow-x-auto px-4">
            <ul className="flex min-w-max items-center gap-5 py-3 text-[13px] font-medium">
              {nav.map((n) => (
                <li key={n}><A className="whitespace-nowrap hover:text-accent">{n}</A></li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Breaking ticker */}
        <div className="flex items-center gap-3 border-b border-rule bg-accent/5 px-4 py-2 text-sm">
          <A className="shrink-0 rounded-sm bg-accent px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-accent-foreground">Breaking</A>
          <div className="relative flex-1 overflow-hidden">
            <div className="flex w-max animate-ticker gap-10 whitespace-nowrap">
              {[...ticker, ...ticker].map((t, i) => (
                <A key={i} className="hover:text-accent">• {t}</A>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Article + sidebar */}
      <main className="mx-auto max-w-[1320px] px-4 py-10">
        <nav className="mb-4 text-xs text-muted-foreground">
          <A className="hover:text-accent">Home</A> / <A className="hover:text-accent">Markets</A> / <A className="hover:text-accent">Crypto</A> / <span className="text-ink">AI Trading</span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_340px]">
          <article className="min-w-0">
            <div className="mb-3 flex flex-wrap gap-2 text-[11px] font-bold uppercase tracking-wider">
              {["Economy","Crypto","Markets","AI"].map((c) => (
                <A key={c} className="bg-accent/10 px-2 py-1 text-tag hover:bg-accent hover:text-accent-foreground">{c}</A>
              ))}
            </div>

            <h1 className="serif text-4xl font-black leading-[1.1] tracking-tight md:text-6xl">
              On Air: Podcast Host Léa Fontaine Grills Europe's Top AI Trader on the Future of Crypto
            </h1>
            <p className="mt-5 serif text-xl italic text-muted-foreground md:text-2xl">
              In a candid studio conversation, the host of <em>Capital Signals</em> sits down with a leading
              algorithmic fund manager to ask the questions every European investor is whispering about AI-powered crypto trading.
            </p>

            {/* Meta */}
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-y border-rule py-4 text-sm">
              <A className="flex items-center gap-2">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-muted serif text-sm font-bold">CV</span>
                <span>
                  <span className="block font-semibold">By Claire Vasseur</span>
                  <span className="block text-xs text-muted-foreground">European Markets Correspondent</span>
                </span>
              </A>
              <div className="text-muted-foreground">Published <time>15 June 2026, 06:00 CET</time> · Updated 09:42</div>
              <div className="text-muted-foreground">⏱ 6 min read</div>
              <A className="text-muted-foreground hover:text-accent">Edited by Henrik Dahl</A>
              <A className="flex items-center gap-1 text-xs font-semibold text-[oklch(0.5_0.16_150)]">✓ Fact-checked</A>
              <div className="ml-auto flex gap-2">
                {["Share","Tweet","Email","Save","Print"].map((s) => (
                  <A key={s} className="rounded border border-rule px-2 py-1 text-xs hover:border-accent hover:text-accent">{s}</A>
                ))}
              </div>
            </div>

            {/* Hero */}
            <A className="mt-8 block">
              <img src={heroImg} alt="Podcast host Léa Fontaine interviewing a guest in the Capital Signals studio" width={1600} height={900} className="w-full" />
              <figcaption className="mt-2 text-xs text-muted-foreground">
                Podcast host Léa Fontaine (right) interviewing her guest on the <em>Capital Signals</em> show, recorded live in Frankfurt. <span className="italic">Photograph: The European Ledger / Studio</span>
              </figcaption>
            </A>


            {/* Body */}
            <div className="prose-article mt-10 max-w-[68ch] space-y-6 text-[17px] leading-[1.75] text-ink/90">
              <p className="drop-cap">
                When podcast host Léa Fontaine invited one of Europe's most secretive AI fund managers onto <em>Capital Signals</em> this week, the conversation moved quickly from polite introductions to the questions retail investors actually want answered. What follows is an edited transcript of their on-air exchange.
              </p>

              <h2 className="serif !text-3xl font-bold !mt-12">"So — is the AI really doing the trading?"</h2>
              <p>
                <strong>Léa Fontaine:</strong> Let's start with the question my listeners email me every single week. Is the AI really making the trades, or are humans still pulling the levers behind the scenes?
              </p>
              <p>
                <strong>Guest:</strong> Both, but not in the way people imagine. The models execute thousands of decisions a second — no human could. What we do is set the boundaries, approve new strategies, and step in when something looks wrong. Think of it as a very disciplined co-pilot.
              </p>

              <PromoBlock kicker="Featured analysis" title="See the platform European investors are talking about" cta="Explore Platform" />

              <h2 className="serif !text-3xl font-bold !mt-12">"Why are retail investors suddenly flooding in?"</h2>
              <p>
                <strong>Léa:</strong> Q2 retail subscriptions through bank-distributed crypto wrappers hit €4.1 billion. That's not a niche anymore. What changed?
              </p>
              <p>
                <strong>Guest:</strong> Two things. MiCA gave people a regulatory floor they trust, and platforms finally lowered the minimums. You no longer need a million euros to access an AI-managed crypto strategy — a few hundred is enough. That alone reshaped the audience overnight.
              </p>

              <blockquote className="my-8 border-l-4 border-accent bg-accent/5 px-6 py-5 serif text-2xl italic leading-snug">
                "The dream of beating the market with a clever human is finished. What we can do is build systems that listen to a thousand markets at once — and don't have a bad morning."
                <footer className="mt-3 not-italic text-sm font-semibold text-muted-foreground">— On-air guest, <em>Capital Signals</em> Episode 142</footer>
              </blockquote>

              <h2 className="serif !text-3xl font-bold !mt-12">"What could still blow up?"</h2>
              <p>
                <strong>Léa:</strong> I have to ask. What's the scenario that keeps you awake at night?
              </p>
              <p>
                <strong>Guest:</strong> AI systems failing in correlated ways. If everyone runs similar models trained on similar data, a regime change none of them have seen could push them all the same direction at the same moment. We haven't lived through a real crisis with this much automation yet. The humility should be considerable.
              </p>

              <PromoBlock kicker="Editor's recommendation" title="The official portal investors are using to access AI-managed strategies" cta="Visit Official Website" />

              <h2 className="serif !text-3xl font-bold !mt-12">"What would you tell a first-time listener?"</h2>
              <p>
                <strong>Léa:</strong> Last question. Someone is hearing about AI crypto trading for the first time on this podcast. What do they do tomorrow morning?
              </p>
              <p>
                <strong>Guest:</strong> Start small. Use a regulated, MiCA-licensed platform. Read the model-risk disclosure — actually read it. And remember that "AI-managed" is not a magic word. It's a tool. The boring investors usually win.
              </p>

              <div className="mt-10 border-t border-rule pt-6 text-sm text-muted-foreground">
                <p><strong className="text-ink">Claire Vasseur</strong> is European Markets Correspondent for <em>The European Ledger</em>. The full <em>Capital Signals</em> episode is available on all major podcast platforms.</p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {["#Podcast","#AI","#Crypto","#Bitcoin","#MiCA","#Europe","#Trading","#Interview"].map((t) => (
                  <A key={t} className="rounded-full border border-rule px-3 py-1 text-xs hover:border-accent hover:text-accent">{t}</A>
                ))}
              </div>
            </div>

          </article>

          {/* Sidebar */}
          <aside className="space-y-8">
            <PromoBlock compact kicker="Sponsored" title="Discover the AI trading platform changing European markets" cta="Visit Platform" />
            {sidebarLists.map((s) => (
              <section key={s.title}>
                <h3 className="mb-3 border-b-2 border-ink pb-2 text-xs font-bold uppercase tracking-widest">{s.title}</h3>
                <ol className="space-y-3">
                  {s.items.map((item, i) => (
                    <li key={item} className="flex gap-3">
                      <span className="serif text-2xl font-black text-accent">{i + 1}</span>
                      <A className="serif text-[15px] font-semibold leading-snug hover:text-accent">{item}</A>
                    </li>
                  ))}
                </ol>
              </section>
            ))}
            <PromoBlock compact kicker="Premium" title="Unlock unlimited analysis and the daily market briefing" cta="Subscribe" />
          </aside>
        </div>

        {/* Related */}
        <section className="mt-20">
          <div className="mb-6 flex items-end justify-between border-b-2 border-ink pb-2">
            <h2 className="serif text-3xl font-bold">Related Articles</h2>
            <A className="text-xs font-semibold uppercase tracking-widest hover:text-accent">View all →</A>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {related.map((r, i) => <Card key={i} {...r} />)}
          </div>
        </section>

        {/* Comments */}
        <section className="mt-20">
          <div className="mb-6 flex items-end justify-between border-b-2 border-ink pb-2">
            <h2 className="serif text-3xl font-bold">Reader Comments <span className="text-muted-foreground">({commentNames.length})</span></h2>
            <div className="flex gap-2">
              {["Top","Newest","Oldest"].map((t) => <A key={t} className="text-xs font-semibold uppercase tracking-widest hover:text-accent">{t}</A>)}
            </div>
          </div>

          <A className="mb-8 block rounded border border-rule bg-paper p-4 text-muted-foreground">
            Sign in to join the conversation →
          </A>

          <ul className="space-y-6">
            {commentNames.slice(0, 10).map((name, i) => (
              <li key={name} className="flex gap-4 border-b border-rule pb-6">
                <A className="shrink-0">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-muted serif text-sm font-bold">
                    {name.split(" ").map(n => n[0]).join("")}
                  </span>
                </A>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2 text-sm">
                    <A className="font-semibold hover:text-accent">{name}</A>
                    {i % 7 === 0 && <span className="rounded-sm bg-accent/10 px-1.5 py-0.5 text-[10px] font-bold uppercase text-tag">Subscriber</span>}
                    <span className="text-xs text-muted-foreground">· {(i % 24) + 1}h ago</span>
                  </div>
                  <p className="mt-2 text-[15px] leading-relaxed">{commentTexts[i % commentTexts.length]}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                    <A className="hover:text-accent">▲ Upvote ({(i * 7) % 213})</A>
                    <A className="hover:text-accent">▼ Downvote</A>
                    <A className="hover:text-accent">↩ Reply</A>
                    <A className="hover:text-accent">Share</A>
                    <A className="hover:text-accent">Report</A>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-center">
            <A className="inline-block rounded border border-ink px-6 py-2 text-sm font-semibold hover:bg-ink hover:text-background">Load more comments</A>
          </div>
        </section>

        {/* Recommended Reading */}
        <section className="mt-20">
          <div className="mb-6 border-b-2 border-ink pb-2">
            <h2 className="serif text-3xl font-bold">Recommended Reading</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {related.map((r, i) => <Card key={"rec" + i} {...r} />)}
          </div>
        </section>

        {/* Newsletter */}
        <section className="mt-20 grid gap-8 border-y-4 border-double border-ink py-12 md:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-accent">The Daily Briefing</p>
            <h2 className="serif mt-2 text-4xl font-bold">Europe, in your inbox every morning at 7</h2>
            <p className="mt-3 text-muted-foreground">A curated digest of the day's most important business, markets and policy stories — written by our newsroom, read by 480,000 professionals.</p>
          </div>
          <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
            <input className="border border-ink/30 bg-background px-4 py-3 text-sm outline-none focus:border-accent" placeholder="Your name" />
            <input className="border border-ink/30 bg-background px-4 py-3 text-sm outline-none focus:border-accent" placeholder="you@example.com" type="email" />
            <A className="bg-accent px-4 py-3 text-center text-sm font-bold uppercase tracking-widest text-accent-foreground">Subscribe — it's free</A>
            <p className="text-xs text-muted-foreground">By subscribing you agree to our <A className="underline">Terms</A>, <A className="underline">Privacy Policy</A> and <A className="underline">Cookie Notice</A>.</p>
          </form>
        </section>

        {/* Social */}
        <section className="mt-20">
          <h2 className="serif mb-6 border-b-2 border-ink pb-2 text-3xl font-bold">Follow The European Ledger</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {socials.map((s) => (
              <A key={s} className="flex items-center justify-between border border-rule bg-paper px-4 py-3 text-sm font-semibold hover:border-accent hover:text-accent">
                <span>{s}</span><span>→</span>
              </A>
            ))}
          </div>
        </section>

        {/* Partner sections */}
        <section className="mt-20">
          <h2 className="serif mb-6 border-b-2 border-ink pb-2 text-3xl font-bold">Partners & Resources</h2>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {partnerSections.map((p) => (
              <div key={p.title}>
                <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-accent">{p.title}</h3>
                <ul className="space-y-2 text-sm">
                  {p.items.map((i) => (
                    <li key={i}><A className="hover:text-accent">{i}</A></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t-4 border-double border-ink bg-paper">
        <div className="mx-auto max-w-[1320px] px-4 py-12">
          <div className="mb-10 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
            <A className="serif text-3xl font-black tracking-tight">The European Ledger</A>
            <div className="flex flex-wrap gap-2">
              {socials.slice(0, 6).map((s) => (
                <A key={s} aria-label={s} className="grid h-9 w-9 place-items-center rounded-full border border-rule text-xs hover:border-accent hover:text-accent">
                  {s[0]}
                </A>
              ))}
            </div>
          </div>
          <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-5">
            {footerCols.map((c) => (
              <div key={c.title}>
                <h4 className="mb-3 text-xs font-bold uppercase tracking-widest">{c.title}</h4>
                <ul className="space-y-2 text-sm">
                  {c.items.map((i) => <li key={i}><A className="text-ink/80 hover:text-accent">{i}</A></li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-col gap-4 border-t border-rule pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
            <div>© 1887–2026 The European Ledger. All rights reserved. Registered in Frankfurt, HRB 24318.</div>
            <ul className="flex flex-wrap gap-4">
              {["Imprint","Privacy","Cookies","Terms","Editorial Standards","Corrections","Sitemap"].map((l) => (
                <li key={l}><A className="hover:text-accent">{l}</A></li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

function PromoBlock({ kicker, title, cta, compact }: { kicker: string; title: string; cta: string; compact?: boolean }) {
  return (
    <A className={`not-prose !my-8 block border-y-2 border-accent bg-accent/5 ${compact ? "p-4" : "p-6"}`}>
      <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">{kicker}</div>
      <div className={`serif mt-2 font-bold leading-snug text-ink ${compact ? "text-lg" : "text-2xl"}`}>{title}</div>
      <div className="mt-3 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-accent">
        {cta} <span>→</span>
      </div>
    </A>
  );
}

function Card({ cat, title, sum }: { cat: string; title: string; sum: string }) {
  return (
    <A className="group block">
      <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
        <div
          className="h-full w-full transition-transform group-hover:scale-105"
          style={{
            backgroundImage:
              "linear-gradient(135deg, oklch(0.85 0.04 70) 0%, oklch(0.55 0.08 40) 100%)",
          }}
        />
      </div>
      <div className="mt-3 text-[11px] font-bold uppercase tracking-widest text-tag">{cat}</div>
      <h3 className="serif mt-1 text-lg font-bold leading-snug group-hover:text-accent">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{sum}</p>
    </A>
  );
}
