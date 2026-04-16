import { ArrowRight, MessageCircle, UserCheck } from 'lucide-react';
import { motion } from 'motion/react';
import MultiStepForm from './MultiStepForm';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" aria-labelledby="hero-title">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-navy -skew-x-12 translate-x-1/4 z-0 hidden lg:block" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7 }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy text-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
            <UserCheck className="w-3.5 h-3.5" aria-hidden="true" />
            Indepéndant • Première consultation offerte
          </div>
          <h1 id="hero-title" className="text-5xl md:text-7xl font-extrabold tracking-tight text-navy mb-8 leading-[1.05]">
            Votre patrimoine mérite une{' '}
            <span className="text-gold italic font-serif">vision indépendante.</span>
          </h1>
          <p className="text-lg md:text-xl text-navy/70 mb-12 max-w-xl leading-relaxed">
            Nicolas Arnaud : conseil financier stratégique à Genève. Optimisation de retraite,
            prévoyance et investissements sur mandat.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <a href="#contact-form" className="bg-gold hover:bg-gold/90 text-navy px-10 py-5 rounded-full font-bold text-lg transition-all shadow-xl flex items-center justify-center gap-3">
              Contacter le conseiller <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </a>
            <a href="https://wa.me/41783335909" target="_blank" rel="noopener noreferrer"
              className="bg-navy text-cream px-10 py-5 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-3 border border-navy shadow-lg">
              <MessageCircle className="w-5 h-5 text-gold" aria-hidden="true" /> WhatsApp
            </a>
          </div>
          <div className="mt-16 flex items-center gap-6">
            <img src="/nicolas_a_assurance.jpg" alt="Nicolas Arnaud, conseiller financier indépendant à Genève"
              className="w-20 h-20 rounded-full border-4 border-white shadow-2xl object-cover shrink-0" width={80} height={80} />
            <div>
              <p className="text-navy font-bold text-lg">Nicolas ARNAUD</p>
              <p className="text-navy/50 text-sm font-medium">Expert indépendant basé à Genève</p>
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity:0, scale:0.95 }} animate={{ opacity:1, scale:1 }} transition={{ duration:0.7, delay:0.2 }} className="relative">
          <div className="absolute -inset-4 bg-gold/10 blur-3xl rounded-full -z-10" aria-hidden="true" />
          <MultiStepForm />
          <p className="text-center mt-6 text-xs font-bold text-navy/40 uppercase tracking-widest">
            Étude de dossier confidentielle • Sans engagement
          </p>
        </motion.div>
      </div>
    </section>
  );
}
