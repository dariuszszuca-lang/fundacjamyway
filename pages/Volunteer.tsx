
import React from 'react';

const Volunteer: React.FC = () => {
  const roles = [
    { title: 'Pomoc administracyjna', icon: 'description', desc: 'Wsparcie w prowadzeniu biura fundacji, obsługa korespondencji i baz danych.' },
    { title: 'Tłumacz / Specjalista IT', icon: 'code', desc: 'Pomoc w rozwijaniu naszych platform online oraz tłumaczenie materiałów edukacyjnych.' },
    { title: 'Wolontariat terenowy', icon: 'campaign', desc: 'Udział w eventach, dystrybucja ulotek i bezpośrednia pomoc w ośrodkach.' }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-primary pt-20 pb-32 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-white text-4xl md:text-5xl font-black mb-6 tracking-tight">Dołącz do Drużyny MyWay</h1>
          <p className="text-blue-100/80 text-lg">Twoje umiejętności i czas mogą zmienić czyjąś rzeczywistość. Nie musisz być terapeutą, by pomagać.</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto w-full px-4 -mt-20 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {roles.map((role, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
              <div className="size-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl">{role.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{role.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{role.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-soft p-8 md:p-12 border border-slate-100 flex flex-col lg:flex-row gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-primary mb-6">Zgłoś swoją gotowość</h2>
            <p className="text-slate-600 mb-8">Zostaw nam swoje dane i napisz krótko, jak chciałbyś pomóc. Skontaktujemy się z Tobą w ciągu kilku dni roboczych.</p>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input placeholder="Imię i nazwisko" className="w-full h-12 px-4 rounded-xl bg-slate-50 border-slate-200" />
                <input placeholder="E-mail" className="w-full h-12 px-4 rounded-xl bg-slate-50 border-slate-200" />
              </div>
              <input placeholder="Numer telefonu" className="w-full h-12 px-4 rounded-xl bg-slate-50 border-slate-200" />
              <textarea placeholder="Jakie masz doświadczenie lub jak chcesz pomóc?" className="w-full h-32 p-4 rounded-xl bg-slate-50 border-slate-200 resize-none"></textarea>
              <button className="w-full h-14 bg-accent text-white font-bold rounded-xl shadow-lg hover:bg-accent-hover transition-colors">
                Wyślij zgłoszenie
              </button>
            </form>
          </div>
          <div className="flex-1 lg:border-l lg:pl-12 border-slate-100">
            <h3 className="font-bold text-primary mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-accent">tips_and_updates</span>
              Co zyskujesz?
            </h3>
            <ul className="space-y-4 text-slate-600">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-green-500 mt-0.5">check_circle</span>
                <span>Udział w profesjonalnych szkoleniach z zakresu profilaktyki uzależnień.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-green-500 mt-0.5">check_circle</span>
                <span>Zaświadczenie o wolontariacie (przydatne do CV lub szkoły).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-green-500 mt-0.5">check_circle</span>
                <span>Satysfakcję z realnego wpływu na życie innych ludzi.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-green-500 mt-0.5">check_circle</span>
                <span>Pracę w zespole pełnym pasji i empatii.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
