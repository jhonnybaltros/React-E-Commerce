export interface IProducts {
  product: {
    _id: string;
    name: string;
    image: string;
    rating: number;
    numReviews: number;
    price: number;
    description?: string;
    countInStock: number;
  };
}
