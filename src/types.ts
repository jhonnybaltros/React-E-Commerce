export interface IProduct {
  _id: number;
  user: String;
  name: String;
  image: String;
  brand: String;
  category: String;
  rating: Number;
  numReviews: number;
  price: number;
  countInStock: number;
  __v: number;
  createdAt: String;
  updatedAt: String;
}

export interface IData {
  data: IProduct;
}
