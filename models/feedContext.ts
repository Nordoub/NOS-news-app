import { Category } from "./category";

export type FeedContextType = {
  selectedCategory: Category;
  setSelectedCategory: React.Dispatch<React.SetStateAction<Category>>;
};
