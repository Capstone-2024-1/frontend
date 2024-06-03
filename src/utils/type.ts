export interface Category {
    id: number;
    englishName: string;
    koreanName: string;
    flatChildIds?: number[];
    childCategories: Category[];
  };

export interface IngredientContainerProps {
  english: string;
  korean: string;
  children?: React.ReactNode;
  depth: number;
  open: boolean;
  setOpen: (value: boolean) => void;
  id: number;
  handleCheck: (id: number, flatChildIds: number[]) => void;
  check: boolean;
  setCheck: (value: boolean) => void;
  flatChildIds: number[];
};