export interface Plant {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'tropical' | 'low-light' | 'flowering';
  description: string;
}

export interface CartItem extends Plant {
  quantity: number;
}