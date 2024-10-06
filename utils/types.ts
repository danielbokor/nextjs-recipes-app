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

export type Comment = {
  id: string;
  name: string;
  email: string;
  comment: string;
  createdAt: string;
};
