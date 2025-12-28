
import React from 'react';
import { STORIES } from '../constants';

const Stories: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-10">
        <div className="mb-16 flex flex-col items-center text-center">
          <span className="mb-4 inline-block rounded-full bg-orange-100 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-orange-600">
            Historie sukcesu
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-[#1a355b] tracking-tight mb-8">
            Dzięki Wam wrócili do życia
          </h2>
          <p className="max-w-3xl text-lg text-slate-500 font-medium leading-relaxed">
            Każda darowizna to kolejna napisana historia. Poznaj tych, którzy dzięki Twojemu wsparciu odnaleźli drogę do domu i do samych siebie.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {STORIES.map(story => (
            <article key={story.id} className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="relative h-72 overflow-hidden">
                <img 
                  alt={story.name} 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  src={story.imageUrl} 
                />
                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                  <div className="size-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className={`material-symbols-outlined text-xl ${story.iconColor}`}>{story.icon}</span>
                  </div>
                  <span className="text-white font-bold text-xl drop-shadow-md">{story.name}, {story.age} lata</span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-8 pt-10">
                <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-6">{story.status}</p>
                <h3 className="text-2xl font-black text-[#1a355b] leading-tight mb-6">
                  {story.quote}
                </h3>
                <p className="text-slate-500 text-base leading-relaxed mb-10 flex-grow">
                  {story.description}
                </p>
                <div className="pt-6 border-t border-slate-50">
                  <a className="inline-flex items-center text-orange-500 font-black text-sm hover:text-orange-600 transition-colors gap-2" href="#">
                    <span>Przeczytaj historię {story.name}a</span>
                    <span className="material-symbols-outlined text-xl">arrow_right_alt</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <button className="inline-flex items-center justify-center gap-3 rounded-2xl bg-[#1a355b] px-10 py-5 text-white font-black shadow-2xl shadow-[#1a355b]/20 hover:bg-[#122b4d] hover:-translate-y-1 transition-all">
            <span>Zobacz więcej historii</span>
            <span className="material-symbols-outlined">menu_book</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Stories;
