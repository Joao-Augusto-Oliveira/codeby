export interface Item {
  id: number;
  name: string;
  sellingPrice: number;
  price: number;
  imageUrl: string;
  amount: number;
}

export interface Stock {
  id: number;
  amount: number;
}
