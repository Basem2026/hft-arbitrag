export interface Feature {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Product {
  title: string;
  desc: string;
  features: string[];
}

export interface Testimonial {
  rating: number;
  text: string;
  author: string;
}

export interface Exchange {
  name: string;
  status: string;
  pairs: number;
}

export interface Spread {
  pair: string;
  buy: string;
  sell: string;
  spread: number;
}
