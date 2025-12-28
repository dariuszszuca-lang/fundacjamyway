
import React from 'react';

const Mission: React.FC = () => {
  return (
    <div className="flex flex-col bg-slate-50 min-h-screen pb-20">
      <section className="w-full py-20 px-4 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-[#1a355b] mb-6 tracking-tight">Każda złotówka się liczy</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Transparentność to fundament naszego zaufania. Dbamy o to, by każda przekazana nam złotówka była mądrą inwestycją w ludzkie życie.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            {/* Chart Area */}
            <div className="flex flex-col items-center">
              <div className="relative mb-12">
                <div 
                  className="size-64 md:size-80 rounded-full shadow-[0_20px_50px_rgba(26,53,91,0.15)] flex items-center justify-center p-4 bg-white" 
                  style={{ background: 'conic-gradient(#1a355b 0% 65%, #38a169 65% 85%, #ed8936 85% 100%)' }}
                >
                  <div className="size-48 md:size-60 bg-white rounded-full flex flex-col items-center justify-center shadow-inner">
                    <span className="text-5xl md:text-6xl font-black text-[#1a355b]">100%</span>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-2">Przejrzystości</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl">
                <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="size-3 rounded-full bg-[#1a355b]"></div>
                    <span className="text-2xl font-black text-[#1a355b]">65%</span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Terapia</span>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="size-3 rounded-full bg-[#38a169]"></div>
                    <span className="text-2xl font-black text-[#38a169]">20%</span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Profilaktyka</span>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="size-3 rounded-full bg-[#ed8936]"></div>
                    <span className="text-2xl font-black text-[#ed8936]">15%</span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Administracja</span>
                </div>
              </div>
            </div>

            {/* Reports area */}
            <div className="flex flex-col gap-10">
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 relative overflow-hidden group">
                {/* Checkmark watermark */}
                <div className="absolute top-4 right-4 text-slate-50 select-none pointer-events-none">
                  <span className="material-symbols-outlined text-[120px] font-thin opacity-40">check_circle</span>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-5 mb-6">
                    <div className="size-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary border border-primary/10">
                      <span className="material-symbols-outlined text-3xl font-bold">verified_user</span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#1a355b]">Organizacja Pożytku Publicznego</h3>
                  </div>
                  <p className="text-slate-600 mb-8 leading-relaxed max-w-md">
                    Jesteśmy zarejestrowaną organizacją OPP. Przekazując nam 1,5% podatku lub darowiznę, masz pewność, że działamy legalnie, etycznie i podlegamy ścisłej kontroli.
                  </p>
                  <div className="inline-flex items-center gap-3 bg-slate-50 border border-slate-100 px-5 py-3 rounded-xl">
                    <span className="material-symbols-outlined text-primary text-xl">badge</span>
                    <span className="font-mono font-bold text-primary">KRS: 0000123456</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold text-[#1a355b] mb-6 flex items-center gap-3">
                  <span className="material-symbols-outlined text-accent fill-current">folder</span>
                  Raporty roczne i finansowe
                </h4>
                <div className="space-y-4">
                  {[
                    { name: 'Raport Finansowy 2023', size: '2.4 MB', icon: 'description' },
                    { name: 'Sprawozdanie Merytoryczne', size: '1.8 MB', icon: 'article' }
                  ].map((report, i) => (
                    <div key={i} className="group flex items-center justify-between p-5 bg-white rounded-2xl border border-slate-100 hover:border-primary/20 hover:shadow-lg transition-all cursor-pointer">
                      <div className="flex items-center gap-5">
                        <div className="size-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-primary group-hover:bg-primary/5 transition-colors">
                          <span className="material-symbols-outlined">{report.icon}</span>
                        </div>
                        <div>
                          <p className="font-bold text-slate-800 group-hover:text-primary transition-colors">{report.name}</p>
                          <p className="text-xs text-slate-400 font-medium">PDF, {report.size}</p>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-slate-300 group-hover:text-primary group-hover:translate-y-1 transition-all">download</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;
