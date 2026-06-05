export interface HeroData {
  image: string;
  title: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  sizes: string[];
}

export type LoginInterface = {
  email: string;
  password: string;
};