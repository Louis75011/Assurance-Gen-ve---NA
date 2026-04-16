import { CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-32 bg-white overflow-hidden" aria-labelledby="about-title">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-gold/10 rounded-full blur-[100px]" aria-hidden="true" />
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5] border-8 border-cream">
              <img src="/nicolas_a_assurance.jpg" alt="Nicolas Arnaud, conseiller financier indépendant"
                className="w-full h-full object-cover" width={800} height={1000} />
              <div className="absolute inset-0 bg-navy/10" aria-hidden="true" />
              <div className="absolute top-8 right-8 w-28 h-28 rounded-full border-4 border-white shadow-2xl overflow-hidden">
                <img src="/logo_nv.jpg" alt="Logo Nicolas Arnaud" className="w-full h-full object-cover" width={112} height={112} />
              </div>
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold mb-6">Votre Partenaire Indépendant</p>
            <h2 id="about-title" className="text-4xl md:text-5xl font-bold text-navy mb-10 leading-tight">La transparence comme socle de confiance.</h2>
            <div className="space-y-8 text-lg text-navy/70 leading-relaxed">
              <p>Basé à Genève, j’accompagne mes clients avec une vision 360° du marché. Mon statut d’indépendant me permet de placer vos intérêts au centre de chaque recommandation.</p>
              <div className="bg-cream p-8 rounded-3xl border-l-4 border-gold">
                <p className="font-bold text-navy mb-2">Modèle de Mandat</p>
                <p className="text-sm">La première consultation est offerte pour cadrer vos besoins. Les prestations suivantes font l’objet d’un mandat de conseil clair et transparent.</p>
              </div>
              <div className="grid grid-cols-2 gap-8 pt-4">
                {[{ title:'Proximité', desc:'Visio ou présentiel (Genève / Yvelines)' },{ title:'Expertise', desc:'Spécialiste Retraite & Prévoyance' }].map(({ title, desc }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-gold" aria-hidden="true" />
                    </div>
                    <div><p className="font-bold text-navy">{title}</p><p className="text-sm">{desc}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
