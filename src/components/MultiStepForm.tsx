import { useState } from 'react';
import {
  Clock, TrendingUp, Shield, Globe, Briefcase,
  Home, MapPin, ChevronRight, ArrowRight, ExternalLink, CheckCircle2,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { cn } from '../lib/utils';

type ServiceType = 'assurance' | 'investissement' | 'retraite' | 'frontalier' | 'autre';

interface LeadData {
  service: ServiceType | '';
  residence: 'suisse' | 'france' | 'autre' | '';
  objective: string;
  name: string;
  email: string;
  phone: string;
}

const stepVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

const SERVICES = [
  { id: 'retraite', label: 'Retraite par capitalisation (3A/3B)', icon: Clock },
  { id: 'investissement', label: 'Gestion de patrimoine & Placement', icon: TrendingUp },
  { id: 'assurance', label: 'Prévoyance & Assurances (2ème pilier)', icon: Shield },
  { id: 'frontalier', label: 'Conseil Frontalier (France/Suisse)', icon: Globe },
  { id: 'autre', label: 'Autre mandat spécifique', icon: Briefcase },
] as const;

const RESIDENCES = [
  { id: 'suisse', label: 'Je vis en Suisse', icon: Home },
  { id: 'france', label: 'Je vis en France (Frontalier)', icon: MapPin },
  { id: 'autre', label: 'Autre situation', icon: Globe },
] as const;

function SuccessScreen({ name }: { name: string }) {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-2xl text-center max-w-md mx-auto">
      <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle2 className="w-10 h-10" aria-hidden="true" />
      </div>
      <h3 className="text-2xl font-bold text-navy mb-2">Demande envoyée !</h3>
      <p className="text-navy/60 mb-6">
        Merci {name.split(' ')[0]}. Nicolas Arnaud vous recontactera très prochainement.
      </p>
      <a
        href="https://calendly.com/louisrouanet75/appel-decouverte-30-minutes"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-gold hover:bg-gold/90 text-navy font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2"
      >
        Prendre RDV sur Calendly <ExternalLink className="w-4 h-4" aria-hidden="true" />
      </a>
    </div>
  );
}

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<LeadData>({
    service: '', residence: '', objective: '', name: '', email: '', phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const next = () => setStep(s => s + 1);
  const prev = () => setStep(s => s - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => { setIsSubmitting(false); setIsSubmitted(true); }, 1500);
  };

  if (isSubmitted) return <SuccessScreen name={formData.name} />;

  return (
    <div id="contact-form" className="bg-white p-6 md:p-10 rounded-3xl shadow-2xl max-w-xl mx-auto border border-slate-100">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xs font-bold uppercase tracking-widest text-gold">Étape {step} sur 4</span>
          <div className="flex gap-1" role="progressbar" aria-valuenow={step} aria-valuemin={1} aria-valuemax={4}>
            {[1, 2, 3, 4].map(i => (
              <div key={i} className={cn('h-1.5 w-8 rounded-full transition-all', i <= step ? 'bg-gold' : 'bg-slate-100')} />
            ))}
          </div>
        </div>
        <h3 className="text-2xl font-bold text-navy">
          {step === 1 && 'Quelle expertise recherchez-vous ?'}
          {step === 2 && 'Votre situation géographique'}
          {step === 3 && 'Précisez votre demande'}
          {step === 4 && 'Vos coordonnées'}
        </h3>
      </div>

      <AnimatePresence mode="wait">
        {/* Step 1 – Service */}
        {step === 1 && (
          <motion.div key="s1" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="grid gap-3">
            {SERVICES.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => { setFormData(f => ({ ...f, service: id as ServiceType })); next(); }}
                className="flex items-center gap-4 p-4 rounded-xl border-2 border-navy/5 hover:border-gold hover:bg-gold/5 transition-all text-left group"
              >
                <div className="w-10 h-10 rounded-full bg-navy/5 group-hover:bg-navy flex items-center justify-center transition-colors">
                  <Icon className="w-5 h-5 text-navy group-hover:text-gold" aria-hidden="true" />
                </div>
                <span className="font-bold text-navy/80 group-hover:text-navy">{label}</span>
                <ChevronRight className="ml-auto w-5 h-5 text-navy/20 group-hover:text-gold" aria-hidden="true" />
              </button>
            ))}
          </motion.div>
        )}

        {/* Step 2 – Résidence */}
        {step === 2 && (
          <motion.div key="s2" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="grid gap-3">
            {RESIDENCES.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => { setFormData(f => ({ ...f, residence: id as any })); next(); }}
                className="flex items-center gap-4 p-4 rounded-xl border-2 border-slate-100 hover:border-gold hover:bg-gold/5 transition-all text-left group"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-50 group-hover:bg-gold/10 flex items-center justify-center transition-colors">
                  <Icon className="w-5 h-5 text-navy/60 group-hover:text-gold" aria-hidden="true" />
                </div>
                <span className="font-semibold text-navy/80 group-hover:text-navy">{label}</span>
                <ChevronRight className="ml-auto w-5 h-5 text-slate-300 group-hover:text-gold" aria-hidden="true" />
              </button>
            ))}
            <button onClick={prev} className="mt-3 text-sm font-medium text-slate-400 hover:text-slate-600">← Retour</button>
          </motion.div>
        )}

        {/* Step 3 – Objectif */}
        {step === 3 && (
          <motion.div key="s3" variants={stepVariants} initial="hidden" animate="visible" exit="exit">
            <label htmlFor="objective" className="sr-only">Décrivez votre situation</label>
            <textarea
              id="objective"
              autoFocus
              className="w-full p-4 rounded-xl border-2 border-slate-100 focus:border-gold focus:ring-0 transition-all min-h-[150px] text-navy placeholder:text-slate-300"
              placeholder="Décrivez brièvement votre situation ou vos questions..."
              value={formData.objective}
              onChange={e => setFormData(f => ({ ...f, objective: e.target.value }))}
            />
            <div className="flex gap-4 mt-6">
              <button onClick={prev} className="flex-1 py-4 rounded-xl font-bold text-navy/40 hover:bg-slate-50 transition-all">Retour</button>
              <button
                onClick={next}
                disabled={!formData.objective.trim()}
                className="flex-1 bg-navy hover:bg-navy/90 disabled:opacity-50 text-cream py-4 rounded-xl font-bold transition-all shadow-lg"
              >
                Continuer
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 4 – Coordonnées */}
        {step === 4 && (
          <motion.div key="s4" variants={stepVariants} initial="hidden" animate="visible" exit="exit">
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { id: 'name', label: 'Nom complet', type: 'text', placeholder: 'Jean Dupont', key: 'name' as keyof LeadData },
                { id: 'email', label: 'Email', type: 'email', placeholder: 'jean@exemple.com', key: 'email' as keyof LeadData },
                { id: 'phone', label: 'Téléphone', type: 'tel', placeholder: '+41 78 000 00 00', key: 'phone' as keyof LeadData },
              ].map(({ id, label, type, placeholder, key }) => (
                <div key={id} className="space-y-1.5">
                  <label htmlFor={id} className="text-sm font-bold text-navy ml-1">{label}</label>
                  <input
                    id={id}
                    type={type}
                    required
                    className="w-full p-4 rounded-xl border-2 border-slate-100 focus:border-gold focus:ring-0 transition-all text-navy"
                    placeholder={placeholder}
                    value={formData[key] as string}
                    onChange={e => setFormData(f => ({ ...f, [key]: e.target.value }))}
                  />
                </div>
              ))}
              <div className="flex gap-4 mt-8">
                <button type="button" onClick={prev} className="flex-1 py-4 rounded-xl font-bold text-navy/40 hover:bg-slate-50 transition-all">Retour</button>
                <button
                  type="submit"
                  disabled={isSubmitting || !formData.name || !formData.email || !formData.phone}
                  className="flex-[2] bg-gold hover:bg-gold/90 disabled:opacity-50 text-navy py-4 rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'Envoi en cours…' : 'Valider ma demande'}
                  {!isSubmitting && <ArrowRight className="w-5 h-5" aria-hidden="true" />}
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
