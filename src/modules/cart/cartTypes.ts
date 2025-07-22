export interface FoodItem {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    quantity: number;
  }
  
  export interface CartState {
    items: FoodItem[];
    total: number;
  }