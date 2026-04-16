import { Clock, TrendingUp, Shield, Globe } from 'lucide-react';
import { motion } from 'motion/react';

const SERVICES = [
  { title: 'Retraite par capitalisation', desc: 'Épargne optimisée fiscalement (3A/3B) pour garantir votre niveau de vie futur.', icon: Clock },
  { title: 'Gestion sur mandat', desc: 'Accès aux institutions financières helvétiques pour une gestion de fortune sur-mesure.', icon: TrendingUp },
  { title: 'Prévoyance (2ème pilier)', desc: 'Audit et optimisation de vos couvertures professionnelles et rachat d’années de cotisation.', icon: Shield },
  { title: 'Conseil Frontalier', desc: 'Accompagnement dédié France/Suisse pour optimiser votre fiscalité et vos assurances.', icon: Globe },
] as const;

export default function ServicesSection() {
  return (
    <section id="services" className="py-32 bg-white" aria-labelledby="services-title">
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center max-w-3xl mx-auto mb-24">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold mb-6">Expertises Stratégiques</p>
          <h2 id="services-title" className="text-4xl md:text-5xl font-bold text-navy mb-8">Une approche globale de votre patrimoine</h2>
          <p className="text-lg text-navy/60">En tant qu’indépendant, je sélectionne les meilleures solutions du marché suisse sans conflit d’intérêt.</p>
        </header>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {SERVICES.map((s, i) => (
            <motion.article key={i} whileHover={{ y:-12 }} className="p-10 rounded-[2.5rem] border border-navy/5 hover:border-gold/30 hover:shadow-2xl hover:shadow-gold/10 transition-all bg-cream/30">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg bg-navy">
                <s.icon className="w-8 h-8 text-gold" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-5 leading-tight">{s.title}</h3>
              <p className="text-navy/60 leading-relaxed text-sm">{s.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
