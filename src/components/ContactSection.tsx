import { Clock, MapPin, Linkedin, Mail, MessageCircle } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 bg-cream" aria-labelledby="contact-title">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <header>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold mb-6">Contact & RDV</p>
              <h2 id="contact-title" className="text-4xl font-bold text-navy mb-8">Planifiez votre consultation offerte</h2>
              <p className="text-lg text-navy/60 leading-relaxed">Choisissez un créneau de 30 minutes en visioconférence ou par téléphone.</p>
            </header>
            <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-navy/5 min-h-[260px] flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                <Clock className="w-10 h-10 text-gold" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">Agenda de Nicolas Arnaud</h3>
              <p className="text-navy/40 text-sm mb-8 max-w-xs">Sélectionnez votre créneau pour un appel découverte de 30 minutes, sans engagement.</p>
              <a href="https://calendly.com/louisrouanet75/appel-decouverte-30-minutes" target="_blank" rel="noopener noreferrer"
                className="bg-navy text-cream px-8 py-4 rounded-full font-bold hover:bg-navy/90 transition-all">
                Ouvrir l’agenda en ligne
              </a>
            </div>
            <div className="bg-white rounded-[2.5rem] p-4 shadow-xl border border-navy/5 h-[180px] relative overflow-hidden group">
              <div className="absolute inset-0 bg-navy/5 flex items-center justify-center" aria-hidden="true">
                <MapPin className="w-12 h-12 text-navy/20 group-hover:text-gold transition-colors" />
              </div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-navy/5">
                <p className="font-bold text-navy text-sm">Genève, Suisse</p>
                <p className="text-navy/50 text-xs">Consultations sur RDV • Présentiel & Visio</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="bg-navy rounded-[3rem] p-12 md:p-16 text-cream relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-[100px]" aria-hidden="true" />
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-10">Coordonnées directes</h3>
                <ul className="space-y-8">
                  <li>
                    <a href="https://wa.me/41783335909" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                      <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-navy transition-all">
                        <MessageCircle className="w-7 h-7" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-cream/40 uppercase tracking-widest">WhatsApp Business</p>
                        <p className="text-xl font-bold">+41 78 333 59 09</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/nicolas-arnaud/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                      <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-navy transition-all">
                        <Linkedin className="w-7 h-7" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-cream/40 uppercase tracking-widest">LinkedIn</p>
                        <p className="text-xl font-bold">Profil Professionnel</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:nicolas.arnaud@neoma-alumni.com" className="flex items-center gap-6 group">
                      <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-navy transition-all">
                        <Mail className="w-7 h-7" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-cream/40 uppercase tracking-widest">Email</p>
                        <p className="text-lg font-bold break-all">nicolas.arnaud@neoma-alumni.com</p>
                      </div>
                    </a>
                  </li>
                </ul>
                <div className="mt-16 pt-10 border-t border-white/10">
                  <p className="text-sm text-cream/60 leading-relaxed italic">"Mon engagement : une réponse sous 24h pour toute demande de mandat de conseil."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
