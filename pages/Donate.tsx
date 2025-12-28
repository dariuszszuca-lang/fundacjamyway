
import React, { useState } from 'react';

const Donate: React.FC = () => {
  const [isCyclycal, setIsCyclycal] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState('100');

  const amounts = ['50', '100', '200'];

  return (
    <div className="bg-slate-50 min-h-screen pt-16 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-200 w-fit mb-10">
              <span className="material-symbols-outlined text-[#1a355b] text-xl fill-current">favorite</span>
              <span className="text-[#1a355b] text-xs font-black tracking-widest uppercase">Fundacja MyWay</span>
            </div>
            
            <h1 className="text-6xl sm:text-7xl font-black text-[#1a355b] leading-[1.05] mb-10 tracking-tight">
              Twoje wsparcie <br/>
              <span className="relative">
                ratuje życie
                <svg className="absolute w-[110%] h-4 -bottom-2 -left-[5%] text-orange-400 opacity-60" fill="none" viewBox="0 0 200 9" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.00025 6.99997C25.7201 5.20404 135.244 1.8366 198 2.00004" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"></path>
                </svg>
              </span>
            </h1>
            
            <p className="text-xl text-slate-500 font-medium leading-relaxed mb-12 max-w-xl">
              Każda złotówka to krok w stronę powrotu do zdrowia dla naszych podopiecznych. Dzięki Tobie możemy finansować terapię, zapewniać wsparcie psychologiczne i dawać nadzieję tam, gdzie jej brakuje.
            </p>
            
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl aspect-[16/10] w-full group">
              <img 
                alt="Supportive hands" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 filter brightness-90" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeUE5bnyNhyZgSdFe2FLy9bfOZn6zoQbXHNUjUgJSoLAMdaoTyYGcRE0iZlv8cQLgfir27xXzTzQULPQTZxkZwGGOrH0RMLS4NfHBQg7RlyDLcNiaO2Yf6zAyR0JEF_ABokZv2EvkcpxwlSExgjdWs6wpL6c7eiiQfZBsQCjR1JQNp7JxVXx5qpIDm3OguInGlA7uQLid-kWapSyueoWun9RPIcQx7G8udq5FRcuxwKsYmMUABffCb_Hemyi8jZOOEm2yKzk3j280" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-10">
                <div className="max-w-md">
                  <p className="text-white text-2xl font-black leading-tight mb-2">"Dzięki terapii odzyskałem rodzinę i siebie."</p>
                  <p className="text-white/70 text-base font-medium">— Marek, podopieczny fundacji</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-8 mt-12">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-green-500 text-2xl font-bold">check_circle</span>
                <span className="text-slate-600 font-bold text-sm">Organizacja Pożytku Publicznego</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#1a355b] text-2xl font-bold">groups</span>
                <span className="text-slate-600 font-bold text-sm">Ponad 1200 uratowanych osób</span>
              </div>
            </div>
          </div>

          {/* Right Column (Widget) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-[40px] shadow-[0_30px_80px_rgba(0,0,0,0.06)] border border-slate-50 overflow-hidden sticky top-24">
              <div className="flex p-2 bg-slate-50/50">
                <button 
                  onClick={() => setIsCyclycal(false)}
                  className={`flex-1 py-5 rounded-[28px] transition-all font-black text-sm ${!isCyclycal ? 'bg-white text-[#1a355b] shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  Wpłata jednorazowa
                </button>
                <button 
                  onClick={() => setIsCyclycal(true)}
                  className={`flex-1 py-5 rounded-[28px] transition-all font-black text-sm ${isCyclycal ? 'bg-white text-[#1a355b] shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  Darowizna cykliczna
                </button>
              </div>
              
              <div className="p-10">
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Wybierz kwotę wsparcia</p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {amounts.map(amt => (
                    <button
                      key={amt}
                      onClick={() => setSelectedAmount(amt)}
                      className={`h-16 flex items-center justify-center rounded-2xl border-2 transition-all font-black text-xl ${
                        selectedAmount === amt 
                        ? 'border-[#1a355b] bg-[#1a355b]/5 text-[#1a355b]' 
                        : 'border-slate-100 text-slate-400 hover:border-slate-300'
                      }`}
                    >
                      {amt} PLN
                    </button>
                  ))}
                  <button
                    onClick={() => setSelectedAmount('other')}
                    className={`h-16 flex items-center justify-center rounded-2xl border-2 transition-all font-bold text-lg ${
                      selectedAmount === 'other' 
                      ? 'border-[#1a355b] bg-[#1a355b]/5 text-[#1a355b]' 
                      : 'border-slate-100 text-slate-400 hover:border-slate-300'
                    }`}
                  >
                    Inna kwota
                  </button>
                </div>
                
                <button className="w-full flex items-center justify-center gap-4 rounded-2xl h-20 bg-orange-500 hover:bg-orange-600 text-white text-2xl font-black shadow-2xl shadow-orange-500/30 transition-all hover:-translate-y-1 mb-6">
                  Wpłać teraz
                  <span className="material-symbols-outlined text-3xl font-black">arrow_forward</span>
                </button>
                
                <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-300">
                  <span className="material-symbols-outlined text-sm">lock</span>
                  Bezpieczna płatność przez PayU
                </div>
              </div>
              
              <div className="bg-slate-50 p-8 border-t border-slate-100">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Tradycyjny przelew</p>
                <p className="text-base font-mono font-bold text-slate-600 break-all mb-1">PL 12 3456 7890 0000 0000 1234 5678</p>
                <p className="text-xs font-medium text-slate-400">Fundacja MyWay, ul. Przykładowa 12, Warszawa</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              <div className="bg-slate-100/50 rounded-3xl p-8 border border-slate-100 hover:bg-white hover:shadow-xl transition-all group">
                <div className="flex items-center justify-between mb-6">
                  <div className="size-12 bg-white rounded-2xl flex items-center justify-center text-[#1a355b] shadow-sm">
                    <span className="material-symbols-outlined text-2xl">percent</span>
                  </div>
                  <span className="material-symbols-outlined text-slate-300 text-lg">content_copy</span>
                </div>
                <h3 className="font-black text-[#1a355b] mb-3">Przekaż 1,5% podatku</h3>
                <div className="bg-white border border-slate-200 rounded-lg px-3 py-1.5 inline-block">
                  <p className="font-mono text-sm text-[#1a355b] font-black tracking-tight">KRS: 0000123456</p>
                </div>
              </div>
              
              <div className="bg-slate-100/50 rounded-3xl p-8 border border-slate-100 hover:bg-white hover:shadow-xl transition-all group cursor-pointer">
                <div className="flex items-center justify-between mb-6">
                  <div className="size-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-500 shadow-sm">
                    <span className="material-symbols-outlined text-2xl">volunteer_activism</span>
                  </div>
                  <span className="material-symbols-outlined text-slate-300 text-lg">open_in_new</span>
                </div>
                <h3 className="font-black text-[#1a355b] mb-3">Zostań wolontariuszem</h3>
                <p className="text-xs font-medium text-slate-400 leading-relaxed">Dołącz do naszego zespołu i pomagaj na miejscu.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
