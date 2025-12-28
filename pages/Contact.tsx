
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      {/* Header Section */}
      <section className="bg-[#1a355b] pt-24 pb-48 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-white text-5xl md:text-7xl font-black mb-8 tracking-tight">Jesteśmy tu dla Ciebie</h1>
          <p className="text-white/80 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Niezależnie od tego, w jakim miejscu się znajdujesz, jesteśmy gotowi Cię wysłuchać. Twoja podróż do zdrowia zaczyna się od jednej rozmowy.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto w-full px-4 -mt-32 mb-24 relative z-20">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Info Cards & Map */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {/* Call Card */}
              <div className="bg-white p-8 rounded-[32px] shadow-xl border border-slate-50 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="size-12 rounded-2xl bg-slate-50 flex items-center justify-center text-[#1a355b] group-hover:bg-[#1a355b] group-hover:text-white transition-all">
                      <span className="material-symbols-outlined text-2xl font-bold">call</span>
                    </div>
                    <h3 className="text-[#1a355b] text-xl font-black">Zadzwoń</h3>
                  </div>
                  <p className="text-slate-400 text-sm font-medium mb-6">Codziennie 06:00 - 22:00</p>
                </div>
                <a href="tel:+48731395295" className="text-2xl font-black text-[#1a355b] hover:text-orange-500 transition-colors">
                  +48 731 395 295
                </a>
              </div>

              {/* Email Card */}
              <div className="bg-white p-8 rounded-[32px] shadow-xl border border-slate-50 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="size-12 rounded-2xl bg-slate-50 flex items-center justify-center text-[#1a355b] group-hover:bg-[#1a355b] group-hover:text-white transition-all">
                      <span className="material-symbols-outlined text-2xl font-bold">mail</span>
                    </div>
                    <h3 className="text-[#1a355b] text-xl font-black">Napisz</h3>
                  </div>
                  <p className="text-slate-400 text-sm font-medium mb-6">Jesteśmy dostępni online</p>
                </div>
                <a href="mailto:fundacja@osrodek-myway.pl" className="text-lg font-black text-[#1a355b] hover:text-orange-500 transition-colors break-all">
                  fundacja@osrodek-myway.pl
                </a>
              </div>

              {/* Address Card */}
              <div className="bg-white p-8 rounded-[32px] shadow-xl border border-slate-50 flex items-start gap-6 border-l-8 border-[#1a355b]">
                <div className="size-12 rounded-2xl bg-slate-50 flex items-center justify-center text-[#1a355b] shrink-0">
                  <span className="material-symbols-outlined text-2xl font-bold">location_on</span>
                </div>
                <div>
                  <h3 className="text-[#1a355b] text-xl font-black mb-2">Odwiedź nas</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">
                    Fundacja MyWay<br/>
                    ul. Wichrowe Wzgórza 21<br/>
                    84-200 Kąpino
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl h-[300px] border-4 border-white">
              <img 
                className="w-full h-full object-cover" 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Map View"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="size-12 bg-orange-500 text-white rounded-full flex items-center justify-center shadow-2xl border-2 border-white animate-bounce">
                  <span className="material-symbols-outlined font-bold">pin_drop</span>
                </div>
                <div className="mt-2 bg-white px-3 py-1 rounded-lg text-xs font-black text-[#1a355b] shadow-xl">Kąpino</div>
              </div>
              <div className="absolute bottom-6 left-6 flex items-center gap-3 text-white">
                <span className="material-symbols-outlined text-orange-500 fill-current">location_on</span>
                <span className="font-black text-sm uppercase tracking-widest shadow-sm">Lokalizacja Ośrodka</span>
              </div>
            </div>
          </div>
          
          {/* Right Column: Form */}
          <div className="lg:col-span-7 bg-white rounded-[48px] shadow-2xl p-10 md:p-16 border border-slate-50">
            <h2 className="text-[#1a355b] text-4xl font-black mb-4">Formularz kontaktowy</h2>
            <p className="text-slate-400 font-medium text-lg mb-12">Wypełnij poniższe pola, a my skontaktujemy się z Tobą tak szybko, jak to możliwe.</p>
            
            <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <label className="flex flex-col gap-3">
                  <span className="text-[#1a355b] text-sm font-black uppercase tracking-widest">Imię</span>
                  <input className="rounded-2xl border-slate-100 bg-slate-50 h-16 p-6 focus:ring-4 focus:ring-[#1a355b]/10 focus:border-[#1a355b] transition-all" placeholder="Wpisz swoje imię" type="text"/>
                </label>
                <label className="flex flex-col gap-3">
                  <span className="text-[#1a355b] text-sm font-black uppercase tracking-widest">Email</span>
                  <input className="rounded-2xl border-slate-100 bg-slate-50 h-16 p-6 focus:ring-4 focus:ring-[#1a355b]/10 focus:border-[#1a355b] transition-all" placeholder="Wpisz swój email" type="email"/>
                </label>
              </div>
              
              <label className="flex flex-col gap-3">
                <span className="text-[#1a355b] text-sm font-black uppercase tracking-widest">Wiadomość</span>
                <textarea className="rounded-2xl border-slate-100 bg-slate-50 min-h-[200px] p-6 focus:ring-4 focus:ring-[#1a355b]/10 focus:border-[#1a355b] transition-all resize-none" placeholder="Opisz, jak możemy Ci pomóc..."></textarea>
              </label>
              
              <div className="flex items-center gap-4 bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                <span className="material-symbols-outlined text-[#1a355b] text-2xl">lock</span>
                <p className="text-sm text-slate-600 font-medium">Twoja wiadomość jest w <span className="font-black text-[#1a355b]">100% poufna</span>.</p>
              </div>
              
              <button className="flex w-full cursor-pointer items-center justify-center gap-4 rounded-[24px] h-20 bg-[#1a355b] hover:bg-[#122b4d] text-white text-xl font-black transition-all shadow-2xl shadow-[#1a355b]/30 group">
                <span>Wyślij wiadomość</span>
                <span className="material-symbols-outlined text-2xl group-hover:translate-x-1 transition-transform">send</span>
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <footer className="py-10 text-center text-slate-400 text-xs font-medium border-t border-slate-100 bg-white">
        © 2023 Fundacja MyWay. Wszelkie prawa zastrzeżone.
      </footer>
    </div>
  );
};

export default Contact;
