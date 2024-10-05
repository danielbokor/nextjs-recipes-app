export type Recipe = {
  id: string;
  name: string;
  description: string;
  ingredients: string;
  directions: string;
  image: string;
  createdAt: string;
  rating?: number;
};
