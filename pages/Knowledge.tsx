
import React from 'react';
import { KNOWLEDGE_ARTICLES } from '../constants';

const Knowledge: React.FC = () => {
  return (
    <div className="bg-background-light py-16 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-10">
        <header className="mb-16 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            <span className="material-symbols-outlined text-sm">school</span>
            Strefa Wiedzy
          </div>
          <h1 className="text-4xl font-black text-primary mb-6 tracking-tight">Edukacja i Wsparcie</h1>
          <p className="text-slate-600 text-lg">Zrozumienie problemu to pierwszy krok do jego rozwiązania. Przygotowaliśmy bazę wiedzy, która pomoże Ci lepiej zrozumieć naturę uzależnień.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {KNOWLEDGE_ARTICLES.map(article => (
            <article key={article.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">{article.category}</span>
                  <span className="text-slate-400 text-xs font-medium">{article.date}</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-primary transition-colors leading-tight">{article.title}</h2>
                <p className="text-slate-600 mb-8 leading-relaxed line-clamp-3">{article.excerpt}</p>
                <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                    <span className="material-symbols-outlined text-sm">schedule</span>
                    {article.readTime} czytania
                  </div>
                  <button className="flex items-center gap-2 text-primary font-bold text-sm hover:text-accent transition-colors">
                    Czytaj więcej
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 bg-primary rounded-3xl p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-white text-2xl font-bold mb-4">Potrzebujesz materiałów dla swojej szkoły lub firmy?</h3>
            <p className="text-blue-100/70 mb-8">Prowadzimy warsztaty stacjonarne i online. Skontaktuj się z nami, aby otrzymać darmowy pakiet edukacyjny.</p>
            <button className="bg-white text-primary font-bold px-8 py-3 rounded-xl hover:bg-slate-50 transition-colors shadow-lg">
              Poproś o materiały
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Knowledge;
