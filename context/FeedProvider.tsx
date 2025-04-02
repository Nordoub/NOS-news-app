import { PropsWithChildren, createContext, useState } from "react";
import { categories } from "../constants/config";
import { FeedContextType } from "../models/feedContext";
import { Category } from "../models/category";

export const FeedContext = createContext<FeedContextType | null>(null);

const FeedProvider = ({ children }: PropsWithChildren) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    categories.Algemeen
  );

  return (
    <FeedContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </FeedContext.Provider>
  );
};

export default FeedProvider;
