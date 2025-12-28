
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { STATS, STORIES, PILLARS, FAQS } from '../constants';

const Home: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col bg-white">
      {/* 1. HERO SECTION */}
      <section id="hero" className="relative w-full min-h-[700px] flex items-center justify-center overflow-hidden bg-[#1a355b]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a355b]/95 via-[#1a355b]/80 to-transparent z-10"></div>
          <img 
            alt="Forest Path" 
            className="h-full w-full object-cover object-center opacity-40 mix-blend-overlay" 
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          />
        </div>
        <div className="relative z-20 w-full max-w-7xl px-4 sm:px-10 py-20">
          <div className="max-w-3xl flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <div className="h-0.5 w-12 bg-orange-500"></div>
              <span className="text-orange-500 text-xs font-black uppercase tracking-widest">Fundacja MyWay</span>
            </div>
            <h1 className="text-white text-6xl md:text-8xl font-black leading-[1.05] tracking-tight">
              Droga do wolności <br/>
              <span className="text-orange-500">zaczyna się tutaj</span>
            </h1>
            <p className="text-blue-100 text-xl font-medium leading-relaxed max-w-xl">
              Pomagamy osobom uzależnionym odzyskać kontrolę nad życiem. Zapewniamy profesjonalną terapię i wsparcie, którego potrzebujesz Ty lub Twoi bliscy.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 mt-4">
              <Link to="/donate" className="flex h-16 items-center justify-center px-10 rounded-2xl bg-orange-500 text-white text-lg font-black shadow-2xl shadow-orange-500/30 hover:bg-orange-600 hover:-translate-y-1 transition-all">
                Wesprzyj nas teraz
              </Link>
              <a href="#help" className="flex h-16 items-center justify-center px-10 rounded-2xl border-2 border-white text-white text-lg font-black hover:bg-white hover:text-[#1a355b] transition-all">
                Jak pomagamy
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. JAK POMAGAMY (Image 3) */}
      <section id="help" className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-10">
          <div className="text-center mb-16 flex flex-col items-center">
            <span className="text-orange-500 font-black tracking-widest text-xs uppercase mb-4">Nasza Misja</span>
            <h2 className="text-[#1a355b] text-5xl md:text-6xl font-black tracking-tight mb-6">Jak pomagamy</h2>
            <p className="text-slate-500 text-xl max-w-3xl leading-relaxed">
              Działamy kompleksowo, oferując pomoc na każdym etapie wychodzenia z uzależnienia. Naszym celem jest nie tylko leczenie, ale także odbudowa życia.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PILLARS.map((p, i) => (
              <div key={i} className="bg-white p-10 rounded-[32px] shadow-sm border border-slate-100 flex flex-col hover:-translate-y-2 transition-all duration-500 group">
                <div className="size-16 rounded-2xl bg-slate-50 flex items-center justify-center text-[#1a355b] mb-8 group-hover:bg-[#1a355b] group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-3xl">{p.icon}</span>
                </div>
                <h3 className="text-[#1a355b] text-2xl font-black mb-4">{p.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">{p.description}</p>
                <Link to={p.link} className="text-orange-500 font-black text-sm flex items-center gap-2 hover:gap-3 transition-all">
                  Dowiedz się więcej <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-20 bg-white rounded-[48px] p-12 md:p-20 text-center flex flex-col items-center shadow-xl border border-slate-50">
            <div className="size-20 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-4xl fill-current">favorite</span>
            </div>
            <h3 className="text-[#1a355b] text-4xl md:text-5xl font-black mb-6">Twoja pomoc może zmienić czyjeś życie</h3>
            <p className="text-slate-500 text-lg max-w-2xl mb-12">Każda wpłata to szansa na nową drogę dla potrzebujących. Dołącz do nas i wesprzyj nasze działania statutowe.</p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/donate" className="bg-orange-500 text-white px-10 h-16 rounded-2xl flex items-center justify-center font-black text-lg shadow-xl shadow-orange-500/20">Przekaż darowiznę</Link>
              <Link to="/volunteer" className="border-2 border-[#1a355b] text-[#1a355b] px-10 h-16 rounded-2xl flex items-center justify-center font-black text-lg">Zostań wolontariuszem</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HISTORIE SUKCESU (Image 2) */}
      <section id="stories" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-10 text-center">
          <span className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">Historie sukcesu</span>
          <h2 className="text-[#1a355b] text-5xl md:text-6xl font-black mb-8">Dzięki Wam wrócili do życia</h2>
          <p className="text-slate-500 text-xl max-w-3xl mx-auto mb-16">Poznaj tych, którzy dzięki Twojemu wsparciu odnaleźli drogę do domu.</p>
          <div className="grid lg:grid-cols-3 gap-8">
            {STORIES.map(s => (
              <div key={s.id} className="text-left bg-white rounded-3xl overflow-hidden shadow-soft border border-slate-50 flex flex-col">
                <div className="h-72 relative">
                  <img src={s.imageUrl} className="w-full h-full object-cover" alt={s.name} />
                  <div className="absolute bottom-6 left-6 flex items-center gap-3">
                    <div className="size-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <span className={`material-symbols-outlined text-xl ${s.iconColor}`}>{s.icon}</span>
                    </div>
                    <span className="text-white font-bold text-xl drop-shadow-md">{s.name}, {s.age} lata</span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-blue-400 text-[10px] font-black uppercase tracking-widest mb-4">{s.status}</span>
                  <h4 className="text-[#1a355b] text-2xl font-black leading-tight mb-6">"{s.quote}"</h4>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">{s.description}</p>
                  <a href="#" className="text-orange-500 font-black text-sm flex items-center gap-2">Przeczytaj historię <span className="material-symbols-outlined">arrow_right_alt</span></a>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-16 bg-[#1a355b] text-white px-10 h-16 rounded-2xl font-black text-lg flex items-center justify-center gap-3 mx-auto shadow-2xl shadow-[#1a355b]/20">
            Zobacz więcej historii <span className="material-symbols-outlined">menu_book</span>
          </button>
        </div>
      </section>

      {/* 4. KAŻDA ZŁOTÓWKA SIĘ LICZY (Image 1) */}
      <section id="transparency" className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-10">
          <div className="text-center mb-16">
            <h2 className="text-[#1a355b] text-5xl font-black mb-6">Każda złotówka się liczy</h2>
            <p className="text-slate-500 text-xl max-w-2xl mx-auto">Transparentność to fundament zaufania. Dbamy o to, by każda wpłata była mądrą inwestycją w życie.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="flex flex-col items-center">
              <div className="relative mb-12 size-72 md:size-96 rounded-full flex items-center justify-center shadow-2xl bg-white p-4" style={{ background: 'conic-gradient(#1a355b 0% 65%, #38a169 65% 85%, #ed8936 85% 100%)' }}>
                <div className="size-56 md:size-72 bg-white rounded-full flex flex-col items-center justify-center shadow-inner">
                  <span className="text-6xl md:text-7xl font-black text-[#1a355b]">100%</span>
                  <span className="text-xs font-bold text-slate-400 tracking-widest uppercase">Przejrzystości</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 w-full">
                <div className="bg-white p-4 rounded-xl shadow-sm border text-center">
                  <div className="flex items-center justify-center gap-2 mb-1"><div className="size-2 rounded-full bg-[#1a355b]"></div><span className="font-black">65%</span></div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase">Terapia</span>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border text-center">
                  <div className="flex items-center justify-center gap-2 mb-1"><div className="size-2 rounded-full bg-[#38a169]"></div><span className="font-black">20%</span></div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase">Profilaktyka</span>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border text-center">
                  <div className="flex items-center justify-center gap-2 mb-1"><div className="size-2 rounded-full bg-[#ed8936]"></div><span className="font-black">15%</span></div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase">Administracja</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <div className="bg-white p-10 rounded-[40px] shadow-xl border border-slate-50 relative overflow-hidden">
                <span className="material-symbols-outlined absolute top-4 right-4 text-[120px] text-slate-100 opacity-50 font-thin">check_circle</span>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="size-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary"><span className="material-symbols-outlined text-3xl">verified_user</span></div>
                    <h3 className="text-[#1a355b] text-2xl font-black">Organizacja Pożytku Publicznego</h3>
                  </div>
                  <p className="text-slate-500 mb-8 leading-relaxed">Przekazując nam 1,5% podatku lub darowiznę, masz pewność, że działamy legalnie i podlegamy ścisłej kontroli.</p>
                  <div className="inline-flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl font-mono font-black text-[#1a355b] border"><span className="material-symbols-outlined text-sm">badge</span> KRS: 0000123456</div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-[#1a355b] font-black flex items-center gap-2"><span className="material-symbols-outlined text-orange-500 fill-current">folder</span> Raporty roczne</h4>
                <div className="bg-white p-6 rounded-2xl border flex items-center justify-between hover:shadow-md transition-all cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="size-10 bg-slate-50 rounded-lg flex items-center justify-center text-slate-400"><span className="material-symbols-outlined">description</span></div>
                    <div><p className="font-black text-sm text-slate-700">Raport Finansowy 2023</p><p className="text-[10px] text-slate-400">PDF, 2.4 MB</p></div>
                  </div>
                  <span className="material-symbols-outlined text-slate-300">download</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. NASZ ZESPÓŁ I PARTNERZY (Image 5) */}
      <section id="about" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-10">
          <h2 className="text-[#1a355b] text-4xl font-black mb-16">Nasz Zespół i Partnerzy</h2>
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="bg-white p-12 rounded-[40px] shadow-soft border border-slate-50 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-10">
                  <span className="material-symbols-outlined text-orange-500 text-4xl">format_quote</span>
                  <span className="text-slate-400 text-xs font-black uppercase tracking-widest">Misja Założyciela</span>
                </div>
                <h3 className="text-[#1a355b] text-3xl font-black mb-8 leading-tight">„Każdy zasługuje na drugą szansę. Nie oceniamy przeszłości, budujemy przyszłość.”</h3>
                <p className="text-slate-500 text-lg mb-12">Stworzyliśmy to miejsce, by dać ludziom bezpieczną przestrzeń do zmiany i powrotu do życia w społeczeństwie.</p>
              </div>
              <div className="flex items-center gap-6 pt-10 border-t">
                <img src="https://i.pravatar.cc/150?u=founder" className="size-16 rounded-full border-4 border-slate-100" />
                <div><p className="font-black text-xl text-[#1a355b]">Jan Kowalski</p><p className="text-slate-400 text-sm font-bold uppercase tracking-widest">Założyciel Fundacji</p></div>
              </div>
            </div>
            <div className="bg-[#1a355b] p-12 rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col justify-between text-white">
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-12">
                  <div className="size-14 bg-white/10 rounded-2xl flex items-center justify-center text-orange-400"><span className="material-symbols-outlined text-3xl">handshake</span></div>
                  <span className="bg-orange-500 text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest">Partner Strategiczny</span>
                </div>
                <h3 className="text-3xl font-black mb-6">Prywatny Ośrodek Terapii Uzależnień MyWay Kąpino</h3>
                <p className="text-white/70 text-lg mb-12">Zapewniamy bezpośredni dostęp do najlepszych specjalistów, terapeutów i nowoczesnych metod leczenia.</p>
              </div>
              <a href="https://osrodek-myway.pl" target="_blank" className="bg-white text-[#1a355b] px-8 h-14 rounded-2xl flex items-center justify-center font-black gap-3 w-fit">Zobacz ośrodek <span className="material-symbols-outlined">arrow_forward</span></a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. KONTAKT (Image 6) */}
      <section id="contact" className="relative bg-[#1a355b] pt-24 pb-48 px-4 sm:px-10 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-white text-5xl md:text-7xl font-black text-center mb-16">Jesteśmy tu dla Ciebie</h2>
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="bg-white p-8 rounded-[32px] shadow-xl flex flex-col gap-4">
                <div className="flex items-center gap-4"><div className="size-12 bg-slate-50 rounded-2xl flex items-center justify-center text-[#1a355b]"><span className="material-symbols-outlined">call</span></div><h4 className="text-[#1a355b] text-xl font-black">Zadzwoń</h4></div>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Codziennie 06:00 - 22:00</p>
                <a href="tel:+48731395295" className="text-3xl font-black text-[#1a355b]">+48 731 395 295</a>
              </div>
              <div className="bg-white p-8 rounded-[32px] shadow-xl flex flex-col gap-4">
                <div className="flex items-center gap-4"><div className="size-12 bg-slate-50 rounded-2xl flex items-center justify-center text-[#1a355b]"><span className="material-symbols-outlined">mail</span></div><h4 className="text-[#1a355b] text-xl font-black">Napisz</h4></div>
                <a href="mailto:fundacja@osrodek-myway.pl" className="text-xl font-black text-[#1a355b] break-all">fundacja@osrodek-myway.pl</a>
              </div>
              <div className="bg-white p-8 rounded-[32px] shadow-xl border-l-8 border-orange-500 flex items-start gap-6">
                <span className="material-symbols-outlined text-[#1a355b] text-3xl mt-1">location_on</span>
                <div><h4 className="text-[#1a355b] text-xl font-black mb-2">Odwiedź nas</h4><p className="text-slate-500 font-medium">ul. Wichrowe Wzgórza 21, 84-200 Kąpino</p></div>
              </div>
            </div>
            <div className="lg:col-span-7 bg-white p-10 md:p-16 rounded-[48px] shadow-2xl">
              <h3 className="text-[#1a355b] text-4xl font-black mb-4">Formularz kontaktowy</h3>
              <p className="text-slate-400 font-medium mb-12">Wypełnij pola, skontaktujemy się tak szybko jak to możliwe.</p>
              <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-8">
                  <input placeholder="Imię" className="h-16 px-6 rounded-2xl bg-slate-50 border-none w-full" />
                  <input placeholder="Email" className="h-16 px-6 rounded-2xl bg-slate-50 border-none w-full" />
                </div>
                <textarea placeholder="Wiadomość" className="h-40 p-6 rounded-2xl bg-slate-50 border-none w-full resize-none"></textarea>
                <div className="flex items-center gap-3 bg-blue-50 p-6 rounded-2xl"><span className="material-symbols-outlined text-[#1a355b]">lock</span><p className="text-sm font-medium">Twoja wiadomość jest w <span className="font-black">100% poufna</span>.</p></div>
                <button className="h-20 bg-[#1a355b] text-white rounded-[24px] font-black text-xl flex items-center justify-center gap-4 shadow-2xl">Wyślij wiadomość <span className="material-symbols-outlined">send</span></button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-primary mb-4 tracking-tight">Często zadawane pytania</h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="border border-slate-100 rounded-xl overflow-hidden shadow-sm">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 bg-white text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-slate-800">{faq.question}</span>
                  <span className={`material-symbols-outlined transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`}>expand_more</span>
                </button>
                {activeFaq === i && (
                  <div className="p-5 bg-slate-50 border-t border-slate-100 text-slate-600 leading-relaxed text-sm">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. NEWSLETTER */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="mx-auto max-w-5xl px-4 sm:px-10">
          <div className="bg-[#1a355b] rounded-[40px] p-8 md:p-16 shadow-2xl flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1"><h2 className="text-white text-3xl font-black mb-4">Bądź na bieżąco</h2><p className="text-blue-100 opacity-80">Zapisz się, aby otrzymywać informacje o naszych działaniach.</p></div>
            <div className="flex-1 w-full"><form className="flex gap-4"><input className="flex-grow h-16 px-6 rounded-2xl bg-white/10 text-white border-none" placeholder="Twój email" /><button className="bg-orange-500 text-white px-8 h-16 rounded-2xl font-black">Zapisz się</button></form></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
