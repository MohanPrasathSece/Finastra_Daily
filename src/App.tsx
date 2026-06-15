import React, { useState, useContext, createContext, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import heroImg from "@/assets/hero.png";
import { CryptoPortal } from "./components/CryptoPortal";
import "./styles.css";

const NavigationContext = createContext<{ navigateToPortal: () => void }>({
  navigateToPortal: () => {},
});

const A = ({
  children,
  className = "",
  onClick,
  ...rest
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const { navigateToPortal } = useContext(NavigationContext);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onClick) onClick(e);
    navigateToPortal();
  };

  return (
    <a href="?page=portal" className={className} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
};

const utilityLinks = [
  "S'abonner",
  "Se connecter",
  "S'inscrire",
  "Premium",
  "Infolettres",
  "Podcasts",
  "App Mobile",
  "Événements",
  "Carrières",
  "Contact",
];
const nav = [
  "Accueil",
  "Dernières Nouvelles",
  "Politique",
  "Affaires",
  "Économie",
  "Finance",
  "Marchés",
  "Crypto",
  "Blockchain",
  "Technologie",
  "Intelligence Artificielle",
  "Startups",
  "Énergie",
  "Environnement",
  "Sciences",
  "Opinion",
  "Vidéos",
  "Podcasts",
  "Éducation",
  "Style de vie",
  "Voyage",
  "Culture",
  "Sports",
];
const ticker = [
  "La BCE exprime un optimisme prudent sur la phase pilote de l'euro numérique",
  "Le Bitcoin repasse les 58 000 € alors que les ETF européens enregistrent des entrées records",
  "Les fintechs de Francfort lèvent 2,3 milliards d'euros au troisième trimestre",
  "Les desks de trading IA surperforment les fonds gérés par des humains pour le 3e trimestre consécutif",
  "La réglementation MiCA entre dans sa deuxième phase de conformité",
  "Un hedge fund parisien lance une stratégie de crédit on-chain",
  "Les validateurs Ethereum dépassent le cap des 1,1 million",
  "La Banque nationale suisse publie un cadre pour la tokenisation",
  "Les volumes de stablecoins dans l'UE bondissent de 47% sur un an",
  "La bourse de Londres lance un indice crypto géré par l'IA",
  "Banco Santander étend ses services de garde aux particuliers",
  "La Lituanie approuve de nouvelles règles de licence pour les actifs numériques",
  "Des entreprises énergétiques nordiques tokenisent les crédits carbone",
  "Le Parlement européen débat des amendements à l'AI Act pour la finance",
  "Tether déclare 92 milliards d'euros de réserves dans l'UE",
  "Coinbase ouvre un nouveau centre de conformité à Dublin",
  "Le trading algorithmique représente désormais 71% du volume crypto dans l'UE",
  "Le régulateur espagnol inflige une amende de 4,1 M€ à un courtier non agréé",
  "Deutsche Börse ouvre un guichet DeFi réglementé",
  "Les modèles de sentiment IA prévoient un quatrième trimestre plus calme pour les actifs numériques",
];

const sidebarLists: { title: string; items: string[] }[] = [
  {
    title: "Les plus lus",
    items: [
      "Pourquoi les banques européennes achètent discrètement du Bitcoin",
      "L'essor des gestionnaires d'actifs algorithmiques à Zürich",
      "Au cœur du groupe de travail de la BCE sur l'euro numérique",
      "Comment MiFID III pourrait remodeler le trading de détail",
      "Les hedge funds IA et la nouvelle frontière de l'alpha",
    ],
  },
  {
    title: "Tendances",
    items: [
      "Lagarde : « L'innovation ne doit pas primer sur la stabilité »",
      "Le corridor Londres-Francfort pour les obligations tokenisées",
      "Les émetteurs de stablecoins face aux nouvelles règles d'audit de l'UE",
      "Le pari discret de 1,8 milliard d'euros sur les réseaux Layer-2",
      "Pourquoi les fonds de volatilité recrutent des linguistes",
    ],
  },
  {
    title: "Sélection de la rédaction",
    items: [
      "Guide de lecture de la loi sur les marchés de crypto-actifs (MiCA)",
      "Cinq graphiques pour comprendre la nouvelle ère des ETF",
      "Portrait : l'ingénieur derrière le plus grand DEX d'Europe",
      "Ce que la Fed ne comprend pas sur la liquidité européenne",
      "Une discussion honnête sur les risques du trading par IA",
    ],
  },
  {
    title: "Dernières Nouvelles",
    items: [
      "Bruxelles envisage de nouvelles règles de transparence pour les fonds IA",
      "L'Italie lance un banc d'essai souverain de blockchain",
      "ABN AMRO ouvre un desk crypto aux clients professionnels",
      "Une startup grecque lève 40 M€ pour les transferts de fonds on-chain",
      "L'OCDE met à jour ses directives fiscales sur les actifs numériques",
    ],
  },
  {
    title: "Histoires Crypto Populaires",
    items: [
      "Le changement de corrélation discret mais étonnant du Bitcoin",
      "Ce que la panne de Solana nous a réellement appris",
      "La MEV en Europe : la taxe cachée sur les traders",
      "Comment trois femmes ont créé une banque crypto à Berlin",
      "Le plaidoyer pour des blockchains ennuyeuses",
    ],
  },
  {
    title: "Mises à jour du marché",
    items: [
      "Le DAX clôture stable avant la déclaration de la BCE",
      "L'euro se renforce face au dollar",
      "Le pétrole Brent recule face aux perspectives de la demande",
      "L'or stable près de son plus haut sur 12 mois",
      "Les rendements des Bunds reculent légèrement l'après-midi",
    ],
  },
];

const related = [
  {
    cat: "Marchés",
    title: "Francfort ouvre un marché réglementé des obligations tokenisées",
    sum: "La nouvelle plateforme de Deutsche Börse enregistre 4 Mds € de dette pour sa première semaine.",
  },
  {
    cat: "IA",
    title: "La révolution silencieuse du machine learning dans les salles de marché parisiennes",
    sum: "Comment trois sociétés réécrivent les règles du jeu de l'alpha.",
  },
  {
    cat: "Crypto",
    title: "Pourquoi les flux de détail espagnols mènent le cycle européen",
    sum: "Les chiffres de garde de Banco BBVA révèlent un changement structurel.",
  },
  {
    cat: "Politique",
    title: "MiCA après six mois : qu'est-ce qui a réellement changé ?",
    sum: "Un bilan sans fard sur la conformité, les coûts et les résultats pour les clients.",
  },
  {
    cat: "Blockchain",
    title: "L'immobilier tokenisé trouve son public à Lisbonne",
    sum: "Les plateformes portugaises signalent une croissance de 38% d'un trimestre à l'autre.",
  },
  {
    cat: "Économie",
    title: "La surprenante résilience de l'euro à l'ère numérique",
    sum: "Les analystes évaluent l'impact des projets pilotes de MNBC sur les marchés des changes.",
  },
  {
    cat: "Opinion",
    title: "L'innovation exige de la patience, pas de la panique",
    sum: "L'avis d'un banquier de haut niveau sur le prochain cycle réglementaire.",
  },
  {
    cat: "Technologie",
    title: "Au cœur des centres de données qui alimentent le trading IA européen",
    sum: "Contrats d'énergie, guerres de latence et nouvelle géographie de la finance.",
  },
];

const commentNames = [
  "Marc Lefèvre",
  "Anneliese Hoffmann",
  "Giulia Romano",
  "Henrik Sørensen",
  "Pilar Navarro",
  "Tomáš Novák",
  "Élodie Bernard",
  "Lukas Berger",
  "Bianca Costa",
  "Mikael Lindgren",
  "Sofia Andersson",
  "Daan de Vries",
  "Catherine Dubois",
  "Rafael Fernández",
  "Jana Kowalski",
  "Stefan Müller",
  "Margaux Petit",
  "Andrea Ricci",
  "Pieter Janssen",
  "Klara Schmidt",
  "Ines Carvalho",
  "Joost van Dijk",
  "Marta Lopes",
  "Niels Bakker",
  "Alessio Conti",
  "Hanna Eriksson",
  "Olivier Martin",
  "Camille Roux",
  "Lucas Almeida",
  "Aurélien Caron",
  "Beatrice Esposito",
  "Felix Wagner",
  "Mireia Solé",
  "Jonas Kristensen",
  "Inga Pärn",
  "Yannick Leroy",
  "Charlotte Weiss",
  "Diego Moreno",
  "Eva Lindholm",
  "Ravi Verhoeven",
  "Sara Bianchi",
  "Pierre Dumas",
  "Liv Hansen",
  "Matteo Greco",
  "Noor El-Sayed",
  "Mehmet Yıldız",
  "Petra Horáková",
  "Rikard Berg",
  "Léa Fontaine",
  "Albert Vidal",
  "Dorothea Klein",
  "Benoît Marchand",
];

const commentTexts = [
  "Excellent article. Le point sur l'arbitrage de latence sur les plateformes réglementées mérite un suivi.",
  "J'aimerais voir une comparaison avec les marchés asiatiques, en particulier Singapour.",
  "Enfin un point de vue équilibré. La plupart des analyses soit rejettent, soit idolâtrent ces systèmes.",
  "La section MiCA est très juste. Nous constatons déjà que les coûts de conformité pèsent sur les petits courtiers.",
  "Travaillant dans une salle de marché parisienne, cela correspond tout à fait à ce que je vois sur le terrain.",
  "Curieux de connaître l'empreinte énergétique de ces clusters IA. Cela vaudrait un article dédié.",
  "La rédaction pourrait-elle préciser quels dépositaires ont été interrogés pour obtenir les chiffres cités ?",
  "Brillante analyse. Enregistré pour notre note de recherche interne.",
  "La façon de poser le risque est rafraîchissante. Tous les algorithmes ne sont pas des oracles.",
  "J'attends avec impatience le suivi sur les obligations tokenisées.",
];

const footerCols: { title: string; items: string[] }[] = [
  {
    title: "Actualités",
    items: [
      "Nouvelles",
      "Politique",
      "Affaires",
      "Économie",
      "Technologie",
      "Sciences",
      "Culture",
      "Sports",
      "Opinion",
      "Crypto",
    ],
  },
  {
    title: "Finance",
    items: [
      "Marchés",
      "Trading",
      "Investissement",
      "Banque",
      "Matières Premières",
      "Forex",
      "Actions",
      "Fonds",
      "Analyses",
      "Rapports",
    ],
  },
  {
    title: "Société",
    items: [
      "À propos",
      "Carrières",
      "Presse",
      "Contact",
      "Salle de presse",
      "Publicité",
      "Partenariats",
      "Événements",
      "Support",
      "Équipe éditoriale",
    ],
  },
  {
    title: "Juridique",
    items: [
      "Conditions d'utilisation",
      "Confidentialité",
      "Cookies",
      "Accessibilité",
      "Conformité",
      "Charte éditoriale",
      "Accord de l'utilisateur",
      "Divulgations",
      "Sécurité",
      "Mentions légales",
    ],
  },
  {
    title: "Produits",
    items: [
      "Applications",
      "Premium",
      "Infolettre",
      "Podcasts",
      "Vidéo",
      "Archives",
      "Recherche",
      "Éducation",
      "Communauté",
      "Mots croisés",
    ],
  },
];

const socials = [
  "Facebook",
  "Instagram",
  "X / Twitter",
  "LinkedIn",
  "YouTube",
  "Telegram",
  "WhatsApp",
  "Reddit",
  "TikTok",
  "Threads",
];

const partnerSections = [
  {
    title: "Publications partenaires",
    items: [
      "Frankfurter Wirtschaftsbrief",
      "La Tribune Économique",
      "Mediterraneo Finanza",
      "Nordic Capital Review",
      "Iberia Markets Daily",
      "Baltic Business Journal",
      "Adriatic Finance Today",
      "Helvetia Investor",
      "Benelux Economic Times",
      "Eastern Europe Markets",
    ],
  },
  {
    title: "Guides financiers",
    items: [
      "Guide du débutant sur les ETF",
      "Comprendre MiCA",
      "Fiscalité crypto dans l'UE",
      "Lire un bilan comptable",
      "Macroéconomie pour investisseurs",
      "Bases de la planification de retraite",
      "Couverture de change 101",
      "Stratégies de dividendes",
      "Rendements ajustés au risque",
      "Finance comportementale",
    ],
  },
  {
    title: "Ressources d'apprentissage",
    items: [
      "Cours de trading IA",
      "Fondamentaux de la blockchain",
      "Microstructure du marché",
      "Théorie du portefeuille",
      "Explication des dérivés",
      "Investissement ESG",
      "Bootcamp Quant",
      "Mécanique des stablecoins",
      "Introduction à la DeFi",
      "Analyse on-chain",
    ],
  },
  {
    title: "Market Reports",
    items: [
      "Revue trimestrielle de l'UE",
      "Perspectives des actifs numériques",
      "Indice bancaire européen",
      "Synthèse sur les marchés de l'énergie",
      "Récapitulatif des résultats tech",
      "Moniteur des taux fixes",
      "Rapport sur le crédit aux PME",
      "Observatoire de l'immobilier",
      "Instantané des matières premières",
      "Prévisions des devises",
    ],
  },
];

function PromoBlock({
  kicker,
  title,
  cta,
  compact,
}: {
  kicker: string;
  title: string;
  cta: string;
  compact?: boolean;
}) {
  return (
    <A
      className={`not-prose !my-8 block border-y-2 border-accent bg-accent/5 ${compact ? "p-4" : "p-6"}`}
    >
      <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">{kicker}</div>
      <div
        className={`serif mt-2 font-bold leading-snug text-ink ${compact ? "text-lg" : "text-2xl"}`}
      >
        {title}
      </div>
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

function Article() {
  return (
    <div className="bg-background text-ink min-h-screen">
      {/* Utility bar */}
      <div className="border-b border-rule bg-paper text-xs">
        <div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-between gap-y-2 px-4 py-2">
          <div className="hidden text-muted-foreground sm:block">
            Lundi 15 juin 2026 · Francfort · 14°C
          </div>
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-1">
            {utilityLinks.map((l) => (
              <li key={l}>
                <A className="text-ink/80 hover:text-accent">{l}</A>
              </li>
            ))}
            <li>
              <A className="rounded-sm bg-accent px-2 py-1 font-semibold text-accent-foreground">
                S'abonner 1 €/mois
              </A>
            </li>
          </ul>
        </div>
      </div>

      {/* Masthead */}
      <header className="border-b border-rule">
        <div className="mx-auto max-w-[1320px] px-4 py-6">
          <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-4">
            <div className="hidden text-xs uppercase tracking-widest text-muted-foreground md:block">
              Vol. CXIV · N° 24 318
              <br />
              Indépendant depuis 1887
            </div>
            <A className="text-center">
              <div className="serif text-4xl font-black tracking-tight md:text-6xl">
                Finastra Daily
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
                Finance · Politique · Innovation
              </div>
            </A>
            <div className="hidden justify-end gap-3 md:flex">
              <A className="rounded border border-ink/30 px-3 py-1.5 text-xs font-semibold hover:bg-ink hover:text-background">
                Se connecter
              </A>
              <A className="rounded bg-ink px-3 py-1.5 text-xs font-semibold text-background hover:bg-accent">
                Essayer Premium
              </A>
              <A
                aria-label="Search"
                className="grid h-8 w-8 place-items-center rounded border border-ink/30"
              >
                🔍
              </A>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="border-y border-rule bg-ink text-background">
          <div className="mx-auto max-w-[1320px] overflow-x-auto px-4">
            <ul className="flex min-w-max items-center gap-5 py-3 text-[13px] font-medium">
              {nav.map((n) => (
                <li key={n}>
                  <A className="whitespace-nowrap hover:text-accent">{n}</A>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Breaking ticker */}
        <div className="flex items-center gap-3 border-b border-rule bg-accent/5 px-4 py-2 text-sm">
          <A className="shrink-0 rounded-sm bg-accent px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-accent-foreground">
            Urgent
          </A>
          <div className="relative flex-1 overflow-hidden">
            <div className="flex w-max animate-ticker gap-10 whitespace-nowrap">
              {[...ticker, ...ticker].map((t, i) => (
                <A key={i} className="hover:text-accent">
                  • {t}
                </A>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Article + sidebar */}
      <main className="mx-auto max-w-[1320px] px-4 py-10">
        <nav className="mb-4 text-xs text-muted-foreground">
          <A className="hover:text-accent">Accueil</A> /{" "}
          <A className="hover:text-accent">Marchés</A> / <A className="hover:text-accent">Crypto</A>{" "}
          / <span className="text-ink">Trading IA</span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_340px]">
          <article className="min-w-0">
            <div className="mb-3 flex flex-wrap gap-2 text-[11px] font-bold uppercase tracking-wider">
              {["Economy", "Crypto", "Markets", "AI"].map((c) => (
                <A
                  key={c}
                  className="bg-accent/10 px-2 py-1 text-tag hover:bg-accent hover:text-accent-foreground"
                >
                  {c}
                </A>
              ))}
            </div>

            <h1 className="serif text-4xl font-black leading-[1.1] tracking-tight md:text-6xl">
              En direct : L'animatrice Léa Fontaine interroge le meilleur trader IA d'Europe sur
              l'avenir de la crypto
            </h1>
            <p className="mt-5 serif text-xl italic text-muted-foreground md:text-2xl">
              Dans une conversation sans fard en studio, l'animatrice de <em>Capital Signals</em>{" "}
              s'entretient avec un gestionnaire de fonds algorithmique de premier plan pour poser
              les questions que chaque investisseur européen se pose sur le trading de crypto par
              IA.
            </p>

            {/* Meta */}
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-y border-rule py-4 text-sm">
              <A className="flex items-center gap-2">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-muted serif text-sm font-bold">
                  CV
                </span>
                <span>
                  <span className="block font-semibold">Par Claire Vasseur</span>
                  <span className="block text-xs text-muted-foreground">
                    Correspondante Marchés Européens
                  </span>
                </span>
              </A>
              <div className="text-muted-foreground">
                Publié le <time>15 juin 2026, 06:00 CET</time> · Mis à jour à 09:42
              </div>
              <div className="text-muted-foreground">⏱ 6 min de lecture</div>
              <A className="text-muted-foreground hover:text-accent">Édité par Henrik Dahl</A>
              <div className="flex items-center gap-1 text-xs font-semibold text-[oklch(0.5_0.16_150)]">
                ✓ Vérifié
              </div>
              <div className="ml-auto flex gap-2">
                {["Share", "Tweet", "Email", "Save", "Print"].map((s) => (
                  <A
                    key={s}
                    className="rounded border border-rule px-2 py-1 text-xs hover:border-accent hover:text-accent"
                  >
                    {s}
                  </A>
                ))}
              </div>
            </div>

            {/* Hero */}
            <A className="mt-8 block">
              <img
                src={heroImg}
                alt="Un influenceur suisse parlant sur le podcast Capital Signals en Suisse"
                width={1600}
                height={900}
                className="w-full"
              />
              <figcaption className="mt-2 text-xs text-muted-foreground">
                L'influenceur suisse (à gauche) s'entretient avec l'animatrice lors de l'émission{" "}
                <em>Capital Signals</em>, enregistrée en direct à Zürich, en Suisse.{" "}
                <span className="italic">Photographie : Finastra Daily / Studio</span>
              </figcaption>
            </A>

            {/* Body */}
            <div className="prose-article mt-10 max-w-[68ch] space-y-6 text-[17px] leading-[1.75] text-ink/90">
              <p className="drop-cap">
                Lorsque l'animatrice de podcast Léa Fontaine a invité cette semaine l'un des
                gestionnaires de fonds IA les plus secrets d'Europe sur le plateau de{" "}
                <em>Capital Signals</em>, la conversation est rapidement passée des présentations
                polies aux questions que les investisseurs particuliers veulent réellement poser.
                Voici une transcription éditée de leur échange en direct.
              </p>

              <h2 className="serif !text-3xl font-bold !mt-12">
                « Alors — est-ce vraiment l'IA qui gère le trading ? »
              </h2>
              <p>
                <strong>Léa Fontaine :</strong> Commençons par la question que mes auditeurs
                m'envoient par e-mail chaque semaine. Est-ce vraiment l'IA qui effectue les
                transactions, ou les humains tirent-ils toujours les ficelles en coulisses ?
              </p>
              <p>
                <strong>Invité :</strong> Les deux, mais pas de la manière dont les gens
                l'imaginent. Les modèles exécutent des milliers de décisions par seconde — aucun
                humain n'en serait capable. Ce que nous faisons, c'est fixer les limites, approuver
                les nouvelles stratégies et intervenir lorsque quelque chose ne va pas.
                Considérez-le comme un copilote très discipliné.
              </p>

              <PromoBlock
                kicker="Analyse à la une"
                title="Découvrez la plateforme dont parlent les investisseurs européens"
                cta="Explorer la plateforme"
              />

              <h2 className="serif !text-3xl font-bold !mt-12">
                « Pourquoi les investisseurs particuliers affluent-ils soudainement ? »
              </h2>
              <p>
                <strong>Léa :</strong> Les souscriptions des particuliers au deuxième trimestre via
                des enveloppes crypto distribuées par les banques ont atteint 4,1 milliards d'euros.
                Ce n'est plus une niche. Qu'est-ce qui a changé ?
              </p>
              <p>
                <strong>Invité :</strong> Deux choses. La réglementation MiCA a donné aux gens un
                cadre réglementaire de confiance, et les plateformes ont enfin abaissé les minimums.
                Vous n'avez plus besoin d'un million d'euros pour accéder à une stratégie crypto
                gérée par l'IA — quelques centaines d'euros suffisent. Cela a suffi à transformer le
                public du jour au lendemain.
              </p>

              <blockquote className="my-8 border-l-4 border-accent bg-accent/5 px-6 py-5 serif text-2xl italic leading-snug">
                « Le rêve de battre le marché grâce à un humain intelligent est révolu. Ce que nous
                pouvons faire, c'est construire des systèmes qui écoutent un millier de marchés à la
                fois — et n'ont pas de mauvaise matinée. »
                <footer className="mt-3 not-italic text-sm font-semibold text-muted-foreground">
                  — L'invité en direct, <em>Capital Signals</em> Épisode 142
                </footer>
              </blockquote>

              <h2 className="serif !text-3xl font-bold !mt-12">
                « Qu'est-ce qui pourrait encore mal tourner ? »
              </h2>
              <p>
                <strong>Léa :</strong> Je dois vous poser la question. Quel est le scénario qui vous
                empêche de dormir la nuit ?
              </p>
              <p>
                <strong>Invité :</strong> Les systèmes d'IA qui échouent de manière corrélée. Si
                tout le monde fait tourner des modèles similaires entraînés sur des données
                similaires, un changement de régime qu'aucun d'eux n'a vu pourrait les pousser tous
                dans la même direction au même moment. Nous n'avons pas encore vécu de véritable
                crise avec autant d'automatisation. L'humilité doit être de mise.
              </p>

              <PromoBlock
                kicker="Recommandation de la rédaction"
                title="Le portail officiel utilisé par les investisseurs pour accéder aux stratégies gérées par l'IA"
                cta="Visiter le site officiel"
              />

              <h2 className="serif !text-3xl font-bold !mt-12">
                « Que diriez-vous à un auditeur qui découvre le sujet ? »
              </h2>
              <p>
                <strong>Léa :</strong> Dernière question. Quelqu'un entend parler de trading crypto
                par IA pour la première fois dans ce podcast. Que fait-il demain matin ?
              </p>
              <p>
                <strong>Invité :</strong> Commencez petit. Utilisez une plateforme réglementée,
                agréée MiCA. Lisez la divulgation des risques liés aux modèles — lisez-la vraiment.
                Et rappelez-vous que « géré par l'IA » n'est pas un mot magique. C'est un outil. Ce
                sont généralement les investisseurs pragmatiques qui gagnent.
              </p>

              <div className="mt-10 border-t border-rule pt-6 text-sm text-muted-foreground">
                <p>
                  <strong className="text-ink">Claire Vasseur</strong> est correspondante pour les
                  marchés européens de <em>Finastra Daily</em>. L'épisode complet de{" "}
                  <em>Capital Signals</em> est disponible sur toutes les principales plateformes de
                  podcast.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "#Podcast",
                  "#IA",
                  "#Crypto",
                  "#Bitcoin",
                  "#MiCA",
                  "#Europe",
                  "#Trading",
                  "#Interview",
                ].map((t) => (
                  <A
                    key={t}
                    className="rounded-full border border-rule px-3 py-1 text-xs hover:border-accent hover:text-accent"
                  >
                    {t}
                  </A>
                ))}
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-8">
            <PromoBlock
              compact
              kicker="Sponsorisé"
              title="Découvrez la plateforme de trading IA qui transforme les marchés européens"
              cta="Visiter la plateforme"
            />
            {sidebarLists.map((s) => (
              <section key={s.title}>
                <h3 className="mb-3 border-b-2 border-ink pb-2 text-xs font-bold uppercase tracking-widest">
                  {s.title}
                </h3>
                <ol className="space-y-3">
                  {s.items.map((item, i) => (
                    <li key={item} className="flex gap-3">
                      <span className="serif text-2xl font-black text-accent">{i + 1}</span>
                      <A className="serif text-[15px] font-semibold leading-snug hover:text-accent">
                        {item}
                      </A>
                    </li>
                  ))}
                </ol>
              </section>
            ))}
            <PromoBlock
              compact
              kicker="Premium"
              title="Débloquez des analyses illimitées et le briefing quotidien du marché"
              cta="S'abonner"
            />
          </aside>
        </div>

        {/* Related */}
        <section className="mt-20">
          <div className="mb-6 flex items-end justify-between border-b-2 border-ink pb-2">
            <h2 className="serif text-3xl font-bold">Articles associés</h2>
            <A className="text-xs font-semibold uppercase tracking-widest">Tout voir →</A>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {related.map((r, i) => (
              <Card key={i} {...r} />
            ))}
          </div>
        </section>

        {/* Comments */}
        <section className="mt-20">
          <div className="mb-6 flex items-end justify-between border-b-2 border-ink pb-2">
            <h2 className="serif text-3xl font-bold">
              Commentaires des lecteurs <span className="text-muted-foreground">(10)</span>
            </h2>
            <div className="flex gap-2">
              {["Top", "Newest", "Oldest"].map((t) => (
                <A
                  key={t}
                  className="text-xs font-semibold uppercase tracking-widest hover:text-accent"
                >
                  {t === "Top" ? "Pertinent" : t === "Newest" ? "Plus récent" : "Plus ancien"}
                </A>
              ))}
            </div>
          </div>

          <A className="mb-8 block rounded border border-rule bg-paper p-4 text-muted-foreground">
            Connectez-vous pour rejoindre la conversation →
          </A>

          <ul className="space-y-6">
            {commentNames.slice(0, 10).map((name, i) => (
              <li key={name} className="flex gap-4 border-b border-rule pb-6">
                <A className="shrink-0">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-muted serif text-sm font-bold">
                    {name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </A>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2 text-sm">
                    <A className="font-semibold hover:text-accent">{name}</A>
                    {i % 7 === 0 && (
                      <span className="rounded-sm bg-accent/10 px-1.5 py-0.5 text-[10px] font-bold uppercase text-tag">
                        Abonné
                      </span>
                    )}
                    <span className="text-xs text-muted-foreground">· il y a {(i % 24) + 1}h</span>
                  </div>
                  <p className="mt-2 text-[15px] leading-relaxed">
                    {commentTexts[i % commentTexts.length]}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                    <A className="hover:text-accent">▲ Voter pour ({(i * 7) % 213})</A>
                    <A className="hover:text-accent">▼ Voter contre</A>
                    <A className="hover:text-accent">↩ Répondre</A>
                    <A className="hover:text-accent">Partager</A>
                    <A className="hover:text-accent">Signaler</A>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-center">
            <A className="inline-block rounded border border-ink px-6 py-2 text-sm font-semibold hover:bg-ink hover:text-background">
              Charger plus de commentaires
            </A>
          </div>
        </section>

        {/* Newsletter */}
        <section className="mt-20 grid gap-8 border-y-4 border-double border-ink py-12 md:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-accent">
              Le Briefing Quotidien
            </p>
            <h2 className="serif mt-2 text-4xl font-bold">
              L'Europe dans votre boîte mail chaque matin à 7h
            </h2>
            <p className="mt-3 text-muted-foreground">
              Un condensé sélectionné des histoires les plus importantes sur les affaires, les
              marchés et les politiques — rédigé par notre rédaction, lu par 480 000 professionnels.
            </p>
          </div>
          <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              className="border border-ink/30 bg-background px-4 py-3 text-sm outline-none focus:border-accent"
              placeholder="Votre nom"
            />
            <input
              className="border border-ink/30 bg-background px-4 py-3 text-sm outline-none focus:border-accent"
              placeholder="you@example.com"
              type="email"
            />
            <A className="bg-accent px-4 py-3 text-center text-sm font-bold uppercase tracking-widest text-accent-foreground">
              S'abonner — c'est gratuit
            </A>
            <p className="text-xs text-muted-foreground">
              En vous abonnant, vous acceptez nos <A className="underline">Conditions</A>, notre{" "}
              <A className="underline">Politique de confidentialité</A> et notre{" "}
              <A className="underline">Avis sur les cookies</A>.
            </p>
          </form>
        </section>

        {/* Social */}
        <section className="mt-20">
          <h2 className="serif mb-6 border-b-2 border-ink pb-2 text-3xl font-bold">
            Suivre Finastra Daily
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {socials.map((s) => (
              <A
                key={s}
                className="flex items-center justify-between border border-rule bg-paper px-4 py-3 text-sm font-semibold hover:border-accent hover:text-accent"
              >
                <span>{s}</span>
                <span>→</span>
              </A>
            ))}
          </div>
        </section>

        {/* Partner sections */}
        <section className="mt-20">
          <h2 className="serif mb-6 border-b-2 border-ink pb-2 text-3xl font-bold">
            Partenaires & Ressources
          </h2>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {partnerSections.map((p) => (
              <div key={p.title}>
                <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-accent">
                  {p.title}
                </h3>
                <ul className="space-y-2 text-sm">
                  {p.items.map((i) => (
                    <li key={i}>
                      <A className="hover:text-accent">{i}</A>
                    </li>
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
            <A className="serif text-3xl font-black tracking-tight">Finastra Daily</A>
            <div className="flex flex-wrap gap-2">
              {socials.slice(0, 6).map((s) => (
                <A
                  key={s}
                  aria-label={s}
                  className="grid h-9 w-9 place-items-center rounded-full border border-rule text-xs hover:border-accent hover:text-accent"
                >
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
                  {c.items.map((i) => (
                    <li key={i}>
                      <A className="text-ink/80 hover:text-accent">{i}</A>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-col gap-4 border-t border-rule pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
            <div>
              © 1887–2026 Finastra Daily. Tous droits réservés. Enregistré à Francfort, HRB 24318.
            </div>
            <ul className="flex flex-wrap gap-4">
              {[
                "Mentions légales",
                "Confidentialité",
                "Cookies",
                "Conditions",
                "Normes éditoriales",
                "Corrections",
                "Plan du site",
              ].map((l) => (
                <li key={l}>
                  <A className="hover:text-accent">{l}</A>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  const queryClient = new QueryClient();
  const [currentPage, setCurrentPage] = useState<"news" | "portal">(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get("page") === "portal" ? "portal" : "news";
  });

  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      setCurrentPage(params.get("page") === "portal" ? "portal" : "news");
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigateToPortal = () => {
    window.history.pushState({}, "", "?page=portal");
    setCurrentPage("portal");
    window.scrollTo(0, 0);
  };

  const navigateToNews = () => {
    window.history.pushState({}, "", "/");
    setCurrentPage("news");
    window.scrollTo(0, 0);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContext.Provider value={{ navigateToPortal }}>
        {currentPage === "portal" ? <CryptoPortal onBack={navigateToNews} /> : <Article />}
        <Toaster position="top-right" theme="dark" richColors />
      </NavigationContext.Provider>
    </QueryClientProvider>
  );
}
