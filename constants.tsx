
import { Story, StatItem, Pillar } from './types';

export const STORIES: Story[] = [
  {
    id: '1',
    name: 'Tomek',
    age: 34,
    status: 'Trzeźwy od 2 lat',
    quote: '"Myślałem, że to koniec. Okazało się, że to dopiero początek."',
    description: 'Straciłem wszystko - pracę, rodzinę, nadzieję. Fundacja MyWay podała mi rękę, gdy inni się odwrócili. Terapia pozwoliła mi zrozumieć mechanizmy mojej choroby i odbudować relacje z dziećmi.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDRT-b0-H0DLnJm8wqxDZHs8PieJXPPSpvOi5c62Hi1E-xPUIG_Fb8YtplcsTUr1t5nYEDOx_X0hYI9G11M0R9n9xnTWzMLLPeFWuHhKnW7ytkOFC6othfxVitrea2QGw7JYTag_sU9I__TgFTysRhPPzAnTK-3DsGmwxMJdzsy3pDNGWylIwJv7m1VnNkNelwjiBqtDVfRh_g4FTPD33uAPl-cnefr1LDavfGrmACkrQ7mgrj4kCZs0g6Poq41dQclEpfCQTDlS8',
    icon: 'spa',
    iconColor: 'text-accent-green'
  },
  {
    id: '2',
    name: 'Anna',
    age: 29,
    status: 'Czysta od 14 miesięcy',
    quote: '"Odzyskałam siebie i marzenia, o których zapomniałam."',
    description: 'Wychodzenie z nałogu to najtrudniejsza droga, jaką przeszłam. Dzięki wsparciu darczyńców miałam bezpieczne miejsce i czas na uleczenie ran. Dziś kończę studia i sama chcę pomagać innym.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAObGQuhQdl0PScmz-ry352iS_qmbYhPsp8QCcqD8qHfvZMiCt4NG1R-czO-qp6ecvQi7fuuhXhDbk1KePBe9E1teCgpNqzsGzcFuC63fVmhbir1XRfrTQprdcPwmERJQCcSrthN0Mm1CF70NHF7TZfhsOdzKFgsLcb1NRsI0tF9FPQteAOR_SDUo9dzsQrVdMvVI1tv7Xef9kUNbNCQ__646hvkXFFb_CLf3rMcmSrxoTrjWEfjvGJCneGGEsztC70eDJuzcm-avU',
    icon: 'wb_sunny',
    iconColor: 'text-accent'
  },
  {
    id: '3',
    name: 'Marek',
    age: 42,
    status: 'Nowe życie od 3 lat',
    quote: '"Daliście mi drugą szansę, której nikt inny by nie dał."',
    description: 'Po latach walki z uzależnieniem byłem na dnie. Fundacja sfinansowała mój pobyt w ośrodku. Dziś prowadzę własną firmę i jestem obecnym ojcem. To cud, który wydarzyc się dzięki Wam.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiAzsIZ8-7yq9CZCVCM2D5acAOeAID-exsgu18Wh3yo2wRjDH9KmTFch-QRUUDyGLVKQGejW_GeaJU__9EA8QL1r7xzS9QsY__1HLNxcK3chVUonCi7VijaM6jqxJ96DOQ3Au4EZf0eMROjUzcFhuWmmdUDGAEe4fzND_NOwZut2jM0BDRuToY-0dNe4UG9tCv4n69Z6fC_GxnxE6hrezAkR93B59P7AAI6Z8AxmWoZlAPtDNjTjBcWeK2P-8bSu150dUyyGaatxs',
    icon: 'handshake',
    iconColor: 'text-blue-500'
  }
];

export const STATS: StatItem[] = [
  { icon: 'volunteer_activism', value: '500+', label: 'Osób, którym pomogliśmy odzyskać kontrolę', color: 'bg-primary/10 text-primary' },
  { icon: 'diversity_1', value: '120', label: 'Wolontariuszy i terapeutów zaangażowanych w pomoc', color: 'bg-accent/10 text-accent' },
  { icon: 'home_health', value: '5', label: 'Ośrodków wsparcia w całej Polsce', color: 'bg-blue-100 text-blue-600' }
];

export const PILLARS: Pillar[] = [
  { title: 'Finansowanie terapii', icon: 'volunteer_activism', description: 'Pokrywamy koszty prywatnego leczenia odwykowego dla osób w trudnej sytuacji finansowej.', link: '/help' },
  { title: 'Wsparcie rodzin', icon: 'diversity_3', description: 'Oferujemy bezpłatną pomoc psychologiczną i prawną dla rodzin osób uzależnionych.', link: '/help' },
  { title: 'Edukacja i profilaktyka', icon: 'school', description: 'Prowadzimy warsztaty w szkołach i kampanie społeczne, zwiększając świadomość.', link: '/knowledge' },
  { title: 'Reintegracja społeczna', icon: 'handshake', description: 'Pomagamy osobom po zakończonej terapii w powrocie na rynek pracy.', link: '/volunteer' }
];

export const FAQS = [
  { question: "Dla kogo przeznaczona jest pomoc fundacji?", answer: "Nasza pomoc skierowana jest do osób uzależnionych od alkoholu, narkotyków, hazardu oraz ich rodzin, które znajdują się w trudnej sytuacji materialnej i nie mogą sfinansować prywatnego leczenia." },
  { question: "Jak mogę zgłosić osobę potrzebującą pomocy?", answer: "Zgłoszenia przyjmujemy poprzez formularz kontaktowy na stronie lub telefonicznie. Każdy przypadek jest analizowany indywidualnie przez nasz zespół terapeutów." },
  { question: "Czy moje dane są bezpieczne?", answer: "Tak, wszelkie zgłoszenia i procesy terapeutyczne są objęte ścisłą tajemnicą. Działamy zgodnie z RODO i etyką zawodową terapeutów." }
];

export const KNOWLEDGE_ARTICLES = [
  {
    id: 'k1',
    title: 'Jak rozpoznać pierwsze objawy uzależnienia?',
    excerpt: 'Uzależnienie często zaczyna się niewinnie. Dowiedz się, na jakie sygnały ostrzegawcze warto zwrócić uwagę u siebie lub bliskich.',
    category: 'Edukacja',
    date: '12.05.2024',
    readTime: '5 min'
  },
  {
    id: 'k2',
    title: 'Współuzależnienie – jak pomóc sobie i bliskiemu?',
    excerpt: 'Życie z osobą uzależnioną to ogromny ciężar. Dowiedz się, jak dbać o własne granice i gdzie szukać wsparcia jako rodzina.',
    category: 'Rodzina',
    date: '10.05.2024',
    readTime: '8 min'
  }
];
