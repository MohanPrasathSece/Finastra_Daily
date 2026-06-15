import React, { useState, FormEvent } from "react";
import { ArrowRight, CircleCheck, Loader2, ArrowLeft, ShieldCheck, TrendingUp, Cpu, Server } from "lucide-react";
import { Label } from "@/components/ui/label";
import { submitLeadToCRM } from "@/lib/crmService";
import { toast } from "sonner";

interface CryptoPortalProps {
  onBack: () => void;
}

export function CryptoPortal({ onBack }: CryptoPortalProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone) {
      toast.error("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    setIsSubmitting(true);
    toast.loading("Établissement d'une connexion sécurisée...", { id: "crm-submit-portal" });

    const response = await submitLeadToCRM({
      fullName,
      email,
      phone,
      message,
      investmentGoal: "10000",
    });

    if (response.success) {
      toast.success("Connexion sécurisée !", { id: "crm-submit-portal" });
      setIsSubmitted(true);
    } else {
      toast.error(response.message || "Échec de l'envoi du prospect.", { id: "crm-submit-portal" });
    }
    setIsSubmitting(false);
  };

  const resetForm = () => {
    setFullName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-zinc-800 selection:text-white">
      {/* Header */}
      <header className="border-b border-zinc-900 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between px-4 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-zinc-100 transition-colors uppercase tracking-wider cursor-pointer"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Retour à l'accueil
          </button>
          
          <div className="flex items-center gap-2">
            <span className="serif text-xl font-black tracking-tight text-white">Finastra Daily</span>
            <span className="h-4 w-px bg-zinc-800" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-medium hidden sm:inline">Portail Trading</span>
          </div>

          <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded-full">
            <div className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-[9px] font-bold text-white font-mono tracking-widest uppercase">PORT SECURE ACTIF</span>
          </div>
        </div>
      </header>

      {/* Hero / Form Section */}
      <section className="relative overflow-hidden border-b border-zinc-900 py-16 lg:py-24 crypto-grid-bg">
        {/* Decorative background glow (subtle gray) */}
        <div className="absolute top-1/4 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[120px]" />

        <div className="mx-auto max-w-[1320px] px-4">
          <div className="grid gap-12 lg:grid-cols-[1fr_450px] items-center">
            
            {/* Value Proposition */}
            <div className="space-y-8 text-left">
              <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-md">
                <ShieldCheck className="h-4 w-4 text-white" />
                <span className="text-xs font-semibold text-zinc-300 font-mono uppercase tracking-wider">
                  Accès Algorithmique Protégé · Réglementation MiCA
                </span>
              </div>

              <h1 className="serif text-4xl font-black leading-[1.15] text-white md:text-5xl lg:text-6xl">
                Bureau Quantitatif de Trading Crypto & IA.
              </h1>
              
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-2xl font-light">
                Le desk de trading automatique de Finastra Daily combine des modèles de langage avancés (LLM) et des algorithmes d'arbitrage à ultra-basse latence pour identifier les déséquilibres d'orderbook sur 45 plateformes d'échange européennes.
              </p>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="border border-zinc-800 bg-zinc-900/40 p-4 rounded-lg backdrop-blur-sm">
                  <div className="text-zinc-500 text-xs font-semibold uppercase tracking-wider">Perf. Moyenne 24h</div>
                  <div className="text-2xl font-bold text-white mt-1 flex items-center gap-1 font-mono">
                    <TrendingUp className="h-5 w-5 text-white" />
                    +2.84%
                  </div>
                </div>

                <div className="border border-zinc-800 bg-zinc-900/40 p-4 rounded-lg backdrop-blur-sm">
                  <div className="text-zinc-500 text-xs font-semibold uppercase tracking-wider">Volume Géré</div>
                  <div className="text-2xl font-bold text-white mt-1 font-mono">12.4M €</div>
                </div>

                <div className="border border-zinc-800 bg-zinc-900/40 p-4 rounded-lg backdrop-blur-sm">
                  <div className="text-zinc-500 text-xs font-semibold uppercase tracking-wider">Temps de Réponse</div>
                  <div className="text-2xl font-bold text-white mt-1 font-mono">140µs</div>
                </div>
              </div>

              <ul className="space-y-3 text-sm text-zinc-400">
                <li className="flex items-center gap-2">
                  <span className="text-white font-mono">✓</span>
                  Aucune période de blocage — Retraits flexibles sous 24h
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-white font-mono">✓</span>
                  Sécurité de niveau institutionnel avec garde cryptée à froid
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-white font-mono">✓</span>
                  Conformité totale avec les règlements européens sur les marchés d'actifs
                </li>
              </ul>
            </div>

            {/* Premium White Registration Form */}
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-zinc-800/20 blur-xl opacity-60 pointer-events-none" />
              
              <div className="relative border border-zinc-200 bg-white text-zinc-950 rounded-xl p-6 md:p-8 shadow-2xl">
                {!isSubmitted ? (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-black animate-pulse" />
                        <span className="text-xs font-bold text-zinc-500 font-mono tracking-wider">PORTS DE TRADING EN LIGNE</span>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-2xl font-bold tracking-tight text-zinc-950 font-sans text-left">
                        Demander un accès sécurisé
                      </h3>
                      <p className="text-sm text-zinc-500 text-left font-light">
                        Soumettez vos coordonnées pour connecter votre portefeuille à notre bureau algorithmique.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-zinc-500 block text-left">
                          Nom complet
                        </Label>
                        <input
                          id="name"
                          type="text"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          required
                          placeholder="Jean Dupont"
                          className="h-10 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-950 placeholder:text-zinc-400 focus:border-black focus:outline-none focus:ring-1 focus:ring-black block font-medium"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <Label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-zinc-500 block text-left">
                          Adresse e-mail
                        </Label>
                        <input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          placeholder="nom@domaine.com"
                          className="h-10 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-950 placeholder:text-zinc-400 focus:border-black focus:outline-none focus:ring-1 focus:ring-black block font-medium"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <Label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-zinc-500 block text-left">
                          Numéro de téléphone
                        </Label>
                        <input
                          id="phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                          placeholder="+33 6 12 34 56 78"
                          className="h-10 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-950 placeholder:text-zinc-400 focus:border-black focus:outline-none focus:ring-1 focus:ring-black block font-medium"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <Label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-zinc-500 block text-left">
                          Message <span className="text-zinc-400 font-normal lowercase">(facultatif)</span>
                        </Label>
                        <textarea
                          id="message"
                          rows={2}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Objectifs d'investissement, questions..."
                          className="flex w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-950 placeholder:text-zinc-400 focus:border-black focus:outline-none focus:ring-1 focus:ring-black md:text-sm resize-none font-medium"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2 rounded bg-zinc-950 py-3 text-xs font-bold uppercase tracking-widest text-white hover:bg-zinc-800 transition-all disabled:opacity-50 disabled:pointer-events-none cursor-pointer mt-2"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="h-3.5 w-3.5 animate-spin text-white" />
                            Connexion...
                          </>
                        ) : (
                          <>
                            Soumettre
                            <ArrowRight className="h-3.5 w-3.5 text-white" />
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                ) : (
                  <div className="text-center py-8 space-y-4 relative overflow-hidden">
                    {/* Falling particles (grayscale) */}
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute animate-coin-fall text-zinc-400/20 select-none pointer-events-none text-xs font-semibold"
                        style={{
                          left: `${Math.random() * 80 + 10}%`,
                          animationDelay: `${Math.random() * 1.5}s`,
                          animationDuration: `${2.2 + Math.random() * 1.2}s`,
                        }}
                      >
                        ✦
                      </div>
                    ))}

                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-zinc-900 border border-zinc-200">
                      <CircleCheck className="h-6 w-6" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-zinc-950 font-sans">Accès Réservé</h3>
                      <p className="text-sm text-zinc-500 max-w-xs mx-auto font-light leading-relaxed">
                        Votre demande d'allocation a été validée et transmise à notre bureau de trading. Notre équipe vous contactera par e-mail dans les plus brefs délais.
                      </p>
                    </div>

                    <button
                      onClick={resetForm}
                      className="mt-4 px-5 py-2 bg-zinc-50 border border-zinc-200 text-zinc-800 hover:text-zinc-950 rounded text-xs font-bold uppercase tracking-wider hover:bg-zinc-100 hover:border-zinc-300 transition-all cursor-pointer"
                    >
                      Enregistrer un autre compte
                    </button>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Statistical Dashboard / Assets Board */}
      <section className="py-16 bg-zinc-950 border-b border-zinc-900">
        <div className="mx-auto max-w-[1320px] px-4">
          <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest font-mono">Flux en Direct</div>
              <h2 className="serif text-3xl font-bold text-white mt-1">Données Techniques du Pool Algorithmique</h2>
            </div>
            <div className="text-zinc-500 text-xs font-mono">
              Mis à jour : En direct de Francfort · Flux SSL Activé
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="border border-zinc-900 bg-zinc-900/20 p-6 rounded-xl space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-zinc-300">Bitcoin / EUR</span>
                <span className="text-xs font-mono text-zinc-300 bg-zinc-800 border border-zinc-700 px-2 py-0.5 rounded">+4.12%</span>
              </div>
              <div className="text-3xl font-bold font-mono text-white">58,740.00 €</div>
              <div className="text-xs text-zinc-500">Moyenne pondérée du carnet d'ordres globale</div>
            </div>

            <div className="border border-zinc-900 bg-zinc-900/20 p-6 rounded-xl space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-zinc-300">Ethereum / EUR</span>
                <span className="text-xs font-mono text-zinc-300 bg-zinc-800 border border-zinc-700 px-2 py-0.5 rounded">+3.28%</span>
              </div>
              <div className="text-3xl font-bold font-mono text-white">3,145.50 €</div>
              <div className="text-xs text-zinc-500">Flux d'exécution de gaz intelligent optimisé</div>
            </div>

            <div className="border border-zinc-900 bg-zinc-900/20 p-6 rounded-xl space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-zinc-300">Solana / EUR</span>
                <span className="text-xs font-mono text-zinc-300 bg-zinc-800 border border-zinc-700 px-2 py-0.5 rounded">+8.65%</span>
              </div>
              <div className="text-3xl font-bold font-mono text-white">142.10 €</div>
              <div className="text-xs text-zinc-500">Fréquence de routage ultra-rapide active</div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Articles Section */}
      <section className="py-20 bg-zinc-900/30 border-b border-zinc-900">
        <div className="mx-auto max-w-[1320px] px-4">
          <div className="mb-12 text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest font-mono">Recherche et Analyses</span>
            <h2 className="serif text-3xl font-black text-white md:text-4xl">Notes du Bureau Quantitatif</h2>
            <p className="text-zinc-500 text-sm font-light">
              Des rapports approfondis rédigés par nos analystes financiers et nos ingénieurs système sur l'avenir de l'automatisation.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            
            {/* Article 1 */}
            <article className="group space-y-4">
              <div className="aspect-[16/9] w-full overflow-hidden bg-zinc-800 rounded-lg relative border border-zinc-800">
                <div 
                  className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: "linear-gradient(135deg, oklch(0.25 0.08 240) 0%, oklch(0.15 0.05 280) 100%)"
                  }}
                />
                <div className="absolute top-3 left-3 bg-zinc-950/80 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-bold text-white uppercase tracking-wider border border-zinc-800">
                  Technique
                </div>
              </div>
              <div className="text-zinc-500 text-xs font-mono">15 juin 2026 · 8 min de lecture</div>
              <h3 className="serif text-xl font-bold text-white group-hover:text-zinc-400 transition-colors leading-snug">
                L'Arbitrage Algorithmique : Comment l'IA redéfinit la gestion des risques crypto en 2026.
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed font-light">
                Les desks de trading quantitatif parisiens et francfortois utilisent désormais des réseaux de neurones profonds pour identifier les micro-écarts de prix en temps réel sur 45 plateformes d'échange.
              </p>
            </article>

            {/* Article 2 */}
            <article className="group space-y-4">
              <div className="aspect-[16/9] w-full overflow-hidden bg-zinc-800 rounded-lg relative border border-zinc-800">
                <div 
                  className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: "linear-gradient(135deg, oklch(0.25 0.05 150) 0%, oklch(0.15 0.03 180) 100%)"
                  }}
                />
                <div className="absolute top-3 left-3 bg-zinc-950/80 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-bold text-white uppercase tracking-wider border border-zinc-800">
                  Réglementation
                </div>
              </div>
              <div className="text-zinc-500 text-xs font-mono">12 juin 2026 · 6 min de lecture</div>
              <h3 className="serif text-xl font-bold text-white group-hover:text-zinc-400 transition-colors leading-snug">
                Comprendre la conformité MiCA et la protection des investisseurs en Europe.
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed font-light">
                La nouvelle réglementation européenne harmonise le marché des crypto-actifs. Analyse des garanties offertes aux investisseurs qualifiés et particuliers sous le nouveau régime.
              </p>
            </article>

            {/* Article 3 */}
            <article className="group space-y-4">
              <div className="aspect-[16/9] w-full overflow-hidden bg-zinc-800 rounded-lg relative border border-zinc-800">
                <div 
                  className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: "linear-gradient(135deg, oklch(0.25 0.08 30) 0%, oklch(0.15 0.04 60) 100%)"
                  }}
                />
                <div className="absolute top-3 left-3 bg-zinc-950/80 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-bold text-white uppercase tracking-wider border border-zinc-800">
                  Macroéconomie
                </div>
              </div>
              <div className="text-zinc-500 text-xs font-mono">10 juin 2026 · 10 min de lecture</div>
              <h3 className="serif text-xl font-bold text-white group-hover:text-zinc-400 transition-colors leading-snug">
                La transition du Bitcoin vers un actif de réserve macroéconomique stable.
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed font-light">
                Alors que les banques nationales européennes intègrent discrètement le Bitcoin dans leurs réserves stratégiques, la volatilité historique laisse place à une liquidité mature.
              </p>
            </article>

          </div>
        </div>
      </section>

      {/* Technical FAQ / Platform Info */}
      <section className="py-20 bg-zinc-950 border-b border-zinc-900">
        <div className="mx-auto max-w-[900px] px-4 space-y-12 text-left">
          <h2 className="serif text-3xl font-bold text-white text-center">Spécifications du Système</h2>
          
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white">
                <Cpu className="h-4 w-4" />
                <h4 className="font-semibold text-white">Analyse des flux LLM</h4>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed font-light">
                Nos modèles traitent plus de 10 000 articles de presse, tweets financiers et communiqués de banques centrales par minute pour prédire les mouvements de marché de court terme.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white">
                <Server className="h-4 w-4" />
                <h4 className="font-semibold text-white">Frais de Performance transparents</h4>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed font-light">
                Nous prélevons une commission de 15% uniquement sur les gains générés. Si les algorithmes ne génèrent pas de profit, aucun frais n'est appliqué.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-900 text-zinc-500 text-xs py-12">
        <div className="mx-auto max-w-[1320px] px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div>© 1887–2026 Finastra Daily. Bureau Quantitaire Crypto-Actifs.</div>
            <div className="mt-1 text-zinc-600">Les investissements dans les actifs numériques comportent des risques importants de perte en capital.</div>
          </div>
          <button
            onClick={onBack}
            className="text-zinc-400 hover:text-zinc-100 transition-colors uppercase tracking-wider font-semibold flex items-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Retour à l'Actualité
          </button>
        </div>
      </footer>
    </div>
  );
}
