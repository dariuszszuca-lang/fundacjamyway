
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="flex flex-col bg-white">
      <section className="w-full py-16 lg:py-24 px-4 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 flex flex-col gap-10">
              <div className="flex items-center gap-4">
                <div className="h-0.5 w-12 bg-orange-500"></div>
                <span className="text-orange-500 text-xs font-black uppercase tracking-widest">O Fundacji</span>
              </div>
              <h1 className="text-[#1a355b] text-5xl md:text-7xl font-black leading-[1.05] tracking-tight">
                Droga do wolności <br/>
                zaczyna się tutaj
              </h1>
              <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-xl">
                Fundacja MyWay powstała z potrzeby serca. Naszą misją jest wspieranie osób uzależnionych w powrocie do zdrowia i społeczeństwa. Wierzymy, że poprzez empatię, profesjonalną terapię i budowanie nowej tożsamości, każdy może odnaleźć swoją własną drogę.
              </p>
              <button className="w-fit flex items-center justify-center rounded-2xl h-16 px-10 bg-[#1a355b] text-white text-lg font-black shadow-2xl shadow-[#1a355b]/20 hover:bg-[#122b4d] hover:-translate-y-1 transition-all">
                Poznaj naszą historię
              </button>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-[48px] bg-slate-100 p-8 shadow-2xl">
                <div className="aspect-square rounded-[36px] overflow-hidden shadow-xl border-8 border-white">
                  <img 
                    className="w-full h-full object-cover" 
                    src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Forest Path"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-24 bg-slate-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-10">
          <h2 className="text-[#1a355b] text-4xl font-black mb-16 px-4">Nasz Zespół i Partnerzy</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* Founder Quote Card */}
            <div className="bg-white rounded-[40px] p-12 shadow-[0_15px_60px_rgba(0,0,0,0.03)] border border-slate-50 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-10">
                  <span className="material-symbols-outlined text-orange-500 text-4xl font-bold">format_quote</span>
                  <span className="text-slate-400 text-xs font-black uppercase tracking-widest">Misja Założyciela</span>
                </div>
                <h3 className="text-[#1a355b] text-3xl font-black leading-tight mb-8">
                  „Każdy zasługuje na drugą szansę. Nie oceniamy przeszłości, budujemy przyszłość.”
                </h3>
                <p className="text-slate-500 text-lg font-medium leading-relaxed mb-10">
                  Naszym celem jest przywracanie nadziei tam, gdzie wydaje się ona utracona. Stworzyliśmy to miejsce, by dać ludziom bezpieczną przestrzeń do zmiany.
                </p>
              </div>
              <div className="flex items-center gap-6 pt-10 border-t border-slate-50">
                <div className="size-16 rounded-full overflow-hidden border-4 border-slate-100">
                  <img src="https://i.pravatar.cc/150?u=jan" alt="Jan Kowalski" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-[#1a355b] text-xl font-black">Jan Kowalski</p>
                  <p className="text-slate-400 text-sm font-bold">Założyciel Fundacji MyWay</p>
                </div>
              </div>
            </div>

            {/* Strategic Partner Card */}
            <div className="bg-[#1a355b] rounded-[40px] p-12 shadow-2xl relative overflow-hidden flex flex-col justify-between text-white">
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="currentColor" />
                </svg>
              </div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-12">
                  <div className="size-14 rounded-2xl bg-white/10 flex items-center justify-center text-orange-400">
                    <span className="material-symbols-outlined text-3xl font-bold">handshake</span>
                  </div>
                  <span className="bg-orange-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">Partner Strategiczny</span>
                </div>
                <h3 className="text-white text-3xl font-black leading-tight mb-6">
                  Prywatny Ośrodek Terapii Uzależnień MyWay Kąpino
                </h3>
                <p className="text-white/70 text-lg font-medium leading-relaxed mb-12">
                  Jesteśmy dumnym partnerem renomowanego ośrodka, zapewniając naszym podopiecznym bezpośredni dostęp do najlepszych specjalistów, terapeutów i lekarzy w Polsce.
                </p>
              </div>
              <button className="relative z-10 w-fit flex items-center justify-center h-14 px-8 rounded-2xl bg-white text-[#1a355b] text-base font-black hover:bg-slate-50 transition-all gap-3 shadow-xl">
                <span>Zobacz ośrodek</span>
                <span className="material-symbols-outlined text-xl">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
