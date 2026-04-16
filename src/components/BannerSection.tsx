import { ArrowRight } from 'lucide-react';

export default function BannerSection() {
  return (
    <section aria-label="Bannière visuelle" className="relative h-80 md:h-96 overflow-hidden">
      <img src="/banniere.jpg" alt="Vue de Genève - Nicolas Arnaud, conseiller financier indépendant"
        className="w-full h-full object-cover" loading="lazy" width={1920} height={768} />
      <div className="absolute inset-0 bg-navy/60 flex flex-col items-center justify-center text-center px-6">
        <p className="text-cream/70 text-xs font-bold uppercase tracking-[0.3em] mb-4">Genève, Suisse</p>
        <h2 className="text-3xl md:text-5xl font-extrabold text-cream mb-8 max-w-2xl leading-tight">
          Prenez une longueur d'avance sur votre retraite.
        </h2>
        <a href="#contact-form" className="bg-gold hover:bg-gold/90 text-navy px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2">
          Commencer maintenant <ArrowRight className="w-5 h-5" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
