import { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav aria-label="Navigation principale" className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-cream/90 backdrop-blur-md shadow-sm border-b border-navy/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center gap-3" aria-label="Accueil">
          <img src="/logo_nv.jpg" alt="Logo Nicolas Arnaud" className="w-10 h-10 rounded-full object-cover shadow-lg" width={40} height={40} />
          <div className="flex flex-col">
            <span className="font-bold text-lg leading-none text-navy">Nicolas ARNAUD</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-gold mt-1">Conseiller Indépendant · Genève</span>
          </div>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-semibold text-navy/70 hover:text-gold transition-colors">Expertises</a>
          <a href="#about" className="text-sm font-semibold text-navy/70 hover:text-gold transition-colors">Indépendant</a>
          <a href="https://wa.me/41783335909" target="_blank" rel="noopener noreferrer" className="bg-navy hover:bg-navy/90 text-cream px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-md flex items-center gap-2">
            <MessageCircle className="w-4 h-4 text-gold" aria-hidden="true" />+41 78 333 59 09
          </a>
        </div>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}>
          {open ? <X className="text-navy" /> : <Menu className="text-navy" />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity:0, y:-10 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-10 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 flex flex-col gap-4 md:hidden">
            <a href="#services" onClick={() => setOpen(false)} className="text-navy font-semibold py-2">Expertises</a>
            <a href="#about" onClick={() => setOpen(false)} className="text-navy font-semibold py-2">À propos</a>
            <a href="https://wa.me/41783335909" target="_blank" rel="noopener noreferrer"
              className="bg-navy text-cream px-6 py-3 rounded-xl font-bold text-center flex items-center justify-center gap-2">
              <MessageCircle className="w-4 h-4 text-gold" aria-hidden="true" />WhatsApp Nicolas
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
