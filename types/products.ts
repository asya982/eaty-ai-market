export type TProducts = {
  _id: string;
  name: string;
  quantity: number;
  price: number;
  description: string;
  img: string;
  category: TCategory;
  allergens: TAllergens[];
};

export type TCategory = {
  _id: string;
  name: string;
  icon: string;
};

export type TAllergens = {
  _id: string;
  name: string;
};
