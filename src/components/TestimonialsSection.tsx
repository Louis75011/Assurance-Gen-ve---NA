import { CheckCircle2 } from 'lucide-react';

const TESTIMONIALS = [
  { quote: 'L’accompagnement de Nicolas a été déterminant pour la structuration de mon 3ème pilier. Une approche claire, sans jargon, et très efficace fiscalement.', role: 'Cadre Supérieur', sector: 'Secteur Bancaire, Genève' },
  { quote: 'Grâce à Nicolas, j’ai pu optimiser ma prévoyance en tant que frontalier. Il connaî̂t parfaitement les spécificités franco-suisses.', role: 'Ingénieur', sector: 'Industrie, Région de Genève' },
  { quote: 'Une vision globale, des conseils personnalisés et une vraie transparence sur les frais. Je recommande vivement.', role: 'Entrepreneur', sector: 'PME, Suisse Romande' },
] as const;

export default function TestimonialsSection() {
  return (
    <section className="py-32 bg-cream/50" aria-labelledby="testimonials-title">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold mb-6">Références</p>
          <h2 id="testimonials-title" className="text-4xl font-bold text-navy">Ils font confiance à mon expertise indépendante</h2>
        </header>
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <article key={i} className="bg-white p-10 rounded-[2rem] shadow-sm border border-navy/5">
              <div className="flex gap-1 mb-6" aria-label="5 étoiles">
                {[...Array(5)].map((_,s) => <CheckCircle2 key={s} className="w-4 h-4 text-gold fill-gold" aria-hidden="true" />)}
              </div>
              <blockquote className="text-navy/70 italic mb-8 leading-relaxed">"{t.quote}"</blockquote>
              <footer className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center text-navy font-bold text-lg">{t.role.charAt(0)}</div>
                <div>
                  <cite className="font-bold text-navy text-sm not-italic">{t.role}</cite>
                  <p className="text-navy/40 text-xs">{t.sector}</p>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
