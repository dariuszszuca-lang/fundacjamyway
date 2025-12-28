
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  const navLinks = [
    { name: 'O nas', path: isHome ? '#about' : '/#about' },
    { name: 'Misja', path: isHome ? '#transparency' : '/#transparency' },
    { name: 'Historie', path: isHome ? '#stories' : '/#stories' },
    { name: 'Jak pomagamy', path: isHome ? '#help' : '/#help' },
    { name: 'Kontakt', path: isHome ? '#contact' : '/#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith('#')) {
      e.preventDefault();
      const id = path.substring(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e9ecf1] bg-white/95 backdrop-blur-md px-4 sm:px-10 py-3">
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 text-primary">
          <div className="flex items-center justify-center size-10 rounded-lg bg-primary/5 text-primary">
            <span className="material-symbols-outlined text-2xl">forest</span>
          </div>
          <h2 className="text-primary text-xl font-bold leading-tight tracking-tight">Fundacja MyWay</h2>
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              onClick={(e) => handleNavClick(e, link.path)}
              className="text-slate-600 hover:text-primary text-sm font-black leading-normal transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Link to="/donate" className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-xl h-12 px-6 bg-[#1a355b] text-white text-sm font-black shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5">
            Wesprzyj
          </Link>
          <button 
            className="lg:hidden flex items-center justify-center size-10 text-slate-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 p-8 flex flex-col gap-6 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              onClick={(e) => handleNavClick(e, link.path)}
              className="text-[#1a355b] text-xl font-black uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <Link
            to="/donate"
            className="bg-orange-500 text-white font-black p-4 rounded-2xl text-center text-xl shadow-xl shadow-orange-500/20"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Wesprzyj fundację
          </Link>
        </div>
      )}
    </header>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a355b] text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-orange-500">
                <span className="material-symbols-outlined text-2xl">volunteer_activism</span>
              </div>
              <span className="text-xl font-black tracking-tight text-white uppercase tracking-widest">MyWay</span>
            </div>
            <p className="text-blue-100/70 text-sm leading-relaxed max-w-xs">
              Profesjonalna pomoc w powrocie do zdrowia. Towarzyszymy Ci w drodze do wolności od uzależnień z empatią i zrozumieniem.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-black text-white uppercase tracking-widest">Na skróty</h3>
            <nav className="flex flex-col gap-3">
              <a className="text-blue-100/70 hover:text-orange-500 transition-colors text-sm font-bold" href="#about">O nas</a>
              <a className="text-blue-100/70 hover:text-orange-500 transition-colors text-sm font-bold" href="#stories">Historie sukcesu</a>
              <Link className="text-orange-500 font-black hover:text-white transition-colors text-sm flex items-center gap-2" to="/donate">
                Wesprzyj <span className="material-symbols-outlined text-[16px]">favorite</span>
              </Link>
            </nav>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-black text-white uppercase tracking-widest">Kontakt</h3>
            <div className="flex flex-col gap-4">
              <a className="text-blue-100/70 hover:text-white text-sm" href="mailto:biuro@fundacjamyway.pl">biuro@fundacjamyway.pl</a>
              <a className="text-blue-100/70 hover:text-white text-sm" href="tel:+48123456789">+48 123 456 789</a>
              <p className="text-blue-100/70 text-sm">ul. Wichrowe Wzgórza 21, Kąpino</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <p className="text-white text-sm font-black mb-4">Szukasz ośrodka terapii?</p>
              <a className="flex items-center justify-center rounded-xl h-12 px-4 bg-orange-500 hover:bg-orange-600 text-white gap-2 text-sm font-black transition-all" href="https://osrodek-myway.pl" target="_blank">
                <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                <span>Ośrodek MyWay</span>
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 text-center text-[10px] text-blue-100/30 uppercase font-black tracking-widest">
          © 2024 Fundacja MyWay. Wszelkie prawa zastrzeżone.
        </div>
      </div>
    </footer>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
