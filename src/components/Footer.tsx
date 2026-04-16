export default function Footer() {
  return (
    <footer className="bg-white border-t border-navy/5 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <a href="/" className="flex items-center gap-3" aria-label="Accueil">
            <img src="/logo_nv.jpg" alt="Logo Nicolas Arnaud" className="w-10 h-10 rounded-full object-cover" width={40} height={40} />
            <div className="flex flex-col">
              <span className="font-bold text-navy">Nicolas ARNAUD</span>
              <span className="text-[10px] font-bold text-gold uppercase tracking-widest">Indépendant Genève</span>
            </div>
          </a>
          <nav aria-label="Liens footer">
            <ul className="flex flex-wrap justify-center gap-10 text-sm font-bold text-navy/40 uppercase tracking-widest">
              <li><a href="#services" className="hover:text-gold transition-colors">Expertises</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">Modèle</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </nav>
          <div className="text-right">
            <p className="text-xs text-navy/30 font-medium">© 2026 Nicolas Arnaud. Tous droits réservés.</p>
            <p className="text-[10px] text-navy/20 mt-1 uppercase tracking-tighter">Conseil financier indépendant · Genève · Yvelines · Visio</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
