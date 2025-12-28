
export interface Story {
  id: string;
  name: string;
  age: number;
  status: string;
  quote: string;
  description: string;
  imageUrl: string;
  icon: string;
  iconColor: string;
}

export interface StatItem {
  icon: string;
  value: string;
  label: string;
  color: string;
}

export interface Pillar {
  title: string;
  description: string;
  icon: string;
  link: string;
}
