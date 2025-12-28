
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';

const AICounselor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([
    { role: 'ai', text: 'Witaj. Jestem Twoim wirtualnym asystentem Fundacji MyWay. W czym mogę Ci dzisiaj pomóc? Pamiętaj, że nie zastępuję profesjonalnej diagnozy lekarskiej.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: 'Jesteś empatycznym asystentem Fundacji MyWay, pomagającej osobom uzależnionym. Twoim zadaniem jest udzielanie informacji o działalności fundacji (pomoc finansowa w terapii, wsparcie rodzin, reintegracja) oraz oferowanie wsparcia i nadziei. Nie stawiaj diagnoz medycznych. Zachęcaj do kontaktu z terapeutą lub infolinią fundacji (+48 731 395 295). Odpowiadaj w języku polskim, z dużym wyczuciem i empatią.'
        }
      });

      const aiText = response.text || 'Przepraszam, wystąpił błąd w połączeniu. Spróbuj ponownie za chwilę.';
      setMessages(prev => [...prev, { role: 'ai', text: aiText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', text: 'Przepraszam, chwilowo nie mogę odpowiedzieć. Skontaktuj się z nami telefonicznie.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="flex flex-col w-[350px] sm:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in slide-in-from-bottom-10 duration-300">
          <div className="bg-primary p-4 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-white/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-accent">support_agent</span>
              </div>
              <div>
                <h4 className="font-bold text-sm">Asystent MyWay</h4>
                <div className="flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-green-400 animate-pulse"></span>
                  <span className="text-[10px] opacity-80 uppercase font-bold tracking-widest">Online</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-full transition-colors">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto space-y-4 bg-slate-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user' ? 'bg-primary text-white rounded-tr-none' : 'bg-white border border-slate-200 text-slate-700 rounded-tl-none shadow-sm'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-none shadow-sm">
                  <div className="flex gap-1">
                    <span className="size-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                    <span className="size-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="size-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="p-4 border-t border-slate-100 bg-white">
            <div className="flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Napisz wiadomość..."
                className="flex-grow bg-slate-100 border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-primary/20"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="size-10 bg-accent text-white rounded-xl flex items-center justify-center hover:bg-accent-hover transition-colors shadow-lg shadow-accent/20 disabled:opacity-50"
              >
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="size-16 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-105 transition-all group relative"
        >
          <span className="material-symbols-outlined text-3xl">chat</span>
          <span className="absolute -top-1 -right-1 size-5 bg-accent text-[10px] font-bold rounded-full flex items-center justify-center animate-bounce shadow-md">1</span>
          <div className="absolute right-20 bg-white text-slate-800 px-3 py-1.5 rounded-lg shadow-xl text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-slate-100">
            Potrzebujesz pomocy? Porozmawiajmy.
          </div>
        </button>
      )}
    </div>
  );
};

export default AICounselor;
