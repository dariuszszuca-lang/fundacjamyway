
import React from 'react';
import { PILLARS } from '../constants';
import { Link } from 'react-router-dom';

const Help: React.FC = () => {
  return (
    <div className="flex flex-col bg-slate-50">
      <section className="py-24 px-4 md:px-10 lg:px-20">
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="flex flex-col gap-4 text-center items-center max-w-4xl mx-auto mb-16">
            <span className="text-orange-500 font-black tracking-widest text-xs uppercase">Nasza Misja</span>
            <h2 className="text-[#1a355b] text-5xl md:text-6xl font-black tracking-tight leading-tight">
              Jak pomagamy
            </h2>
            <p className="text-slate-500 text-xl font-medium leading-relaxed mt-4">
              Działamy kompleksowo, oferując pomoc na każdym etapie wychodzenia z uzależnienia. Naszym celem jest nie tylko leczenie, ale także odbudowa życia i wsparcie bliskich.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {PILLARS.map((pillar, idx) => (
              <div key={idx} className="group flex flex-col p-10 rounded-[32px] bg-white border border-slate-50 shadow-[0_15px_60px_rgba(0,0,0,0.03)] hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
                <div className="h-16 w-16 rounded-2xl bg-slate-50 flex items-center justify-center text-[#1a355b] mb-10 group-hover:bg-[#1a355b] group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-[32px]">{pillar.icon}</span>
                </div>
                <h3 className="text-[#1a355b] text-2xl font-black mb-4">{pillar.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-10 flex-grow font-medium">
                  {pillar.description}
                </p>
                <Link to={pillar.link} className="inline-flex items-center text-sm font-black text-orange-500 hover:text-orange-600 transition-colors group/link">
                  <span>Dowiedz się więcej</span>
                  <span className="material-symbols-outlined text-lg ml-2 group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
              </div>
            ))}
          </div>

          <div className="relative w-full py-20 px-4 md:px-10 overflow-hidden bg-white rounded-[48px] shadow-sm border border-slate-50 text-center flex flex-col items-center">
            <div className="size-24 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 mb-10">
              <span className="material-symbols-outlined text-5xl fill-current">favorite</span>
            </div>
            <h2 className="text-[#1a355b] text-4xl md:text-5xl font-black tracking-tight leading-tight max-w-[800px] mb-6">
              Twoja pomoc może zmienić czyjeś życie
            </h2>
            <p className="text-slate-500 text-xl font-medium leading-relaxed max-w-[700px] mb-12">
              Każda wpłata to szansa na nową drogę dla potrzebujących. Dołącz do nas i wesprzyj nasze działania statutowe.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
              <Link to="/donate" className="flex items-center justify-center h-16 px-10 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white text-lg font-black shadow-2xl shadow-orange-500/20 transition-all hover:-translate-y-0.5">
                <span className="material-symbols-outlined mr-3 text-2xl">volunteer_activism</span>
                <span>Przekaż darowiznę</span>
              </Link>
              <Link to="/volunteer" className="flex items-center justify-center h-16 px-10 rounded-2xl border-2 border-[#1a355b] text-[#1a355b] hover:bg-[#1a355b] hover:text-white text-lg font-black transition-all hover:-translate-y-0.5">
                <span>Zostań wolontariuszem</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Help;
