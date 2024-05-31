import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from "react";

interface Menu {
  name: string;
  quantity: number;
}

interface Ingredient {
  id: number;
  englishName: string;
  koreanName: string;
  imageUrl: string;
}

interface Food {
  koreanName: string;
  englishName: string;
  isFood: boolean;
  isAmbiguous: boolean;
  canEatCategories: Ingredient[];
  cannotEatCategories: Ingredient[];
  canEat: boolean;
}

export interface UserContextValues {
  user: {
    name: string;
    image: string;
    isVegeterian: boolean;
    banIngredient: Array<number>;
    accessToken: string;
    userId: number;
  };
  setName: (value: string) => void;
  setImage: (value: string) => void;
  addBanIngredient: (value: number) => void;
  removeBanIngredient: (value: number) => void;
  navigationName: string;
  navigationGroupName: string;
  setNavigationName: (value: string) => void;
  setNavigationGroupName: (value: string) => void;
  menuSort: string;
  setMenuSort: (value: string) => void;
  menuList: Menu[];
  setMenuList: Dispatch<SetStateAction<Menu[]>>;
  currentGroup: number;
  setCurrentGroup: (value: number) => void;
  setAccessToken: (value: string) => void;
  setUserId: (value: number) => void;
  creater: string;
  setCreater: (value: string) => void;
  groupImage: string;
  setGroupImage: (value: string) => void;
  isExistedMenuList: boolean;
  setIsExistedMenuList: (value: boolean) => void;
  canEatList: Food[];
  cannotEatList: Food[];
  ambiguousList: Food[];
  categorizeItems: (items: Food[]) => void;
  canEatCategories: Ingredient[];
  cannotEatCategories: Ingredient[];
  setCanEatCategories: Dispatch<SetStateAction<Ingredient[]>>;
  setCannotEatCategories: Dispatch<SetStateAction<Ingredient[]>>;
}

const contextDefaultValue: UserContextValues = {
  user: {
    name: '',
    image: '',
    isVegeterian: false,
    banIngredient: [],
    accessToken: 'eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzYWZlYXQiLCJpYXQiOjE3MTY4MDY3NTIsImV4cCI6MTcyNDU4Mjc1MiwibWVtYmVySWQiOjF9.vzzMJ2ozwg9nlfsHbO9A9lVOnIU0IttraP7mgMo6qHE',
    userId: -1,
  },
  setName: () => {},
  setImage: () => {},
  addBanIngredient: (value: number) => {},
  removeBanIngredient: (value: number) => {},
  navigationName: 'camera',
  navigationGroupName: 'home',
  setNavigationName: () => {},
  setNavigationGroupName: () => {},
  menuSort: 'can eat',
  setMenuSort: () => {},
  menuList: [],
  setMenuList: () => {},
  currentGroup: 1,
  setCurrentGroup: () => {},
  setAccessToken: () => {},
  setUserId: () => {},
  creater: '',
  setCreater: () => {},
  groupImage: '',
  setGroupImage: () => {},
  isExistedMenuList: false,
  setIsExistedMenuList: () => {},
  canEatList: [],
  cannotEatList: [],
  ambiguousList: [],
  categorizeItems: () => {},
  canEatCategories: [],
  cannotEatCategories: [],
  setCanEatCategories: () => {},
  setCannotEatCategories: () => {},
};

export const UserContext = createContext(contextDefaultValue);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState(contextDefaultValue.user.name);
  const [image, setImage] = useState(contextDefaultValue.user.image);
  const [isVegeterian, setIsVegeterian] = useState(contextDefaultValue.user.isVegeterian);
  const [banIngredient, setBanIngredient] = useState(contextDefaultValue.user.banIngredient);
  const [navigationName, setNavigationName] = useState(contextDefaultValue.navigationName);
  const [navigationGroupName, setNavigationGroupName] = useState(contextDefaultValue.navigationGroupName);
  const [menuSort, setMenuSort] = useState(contextDefaultValue.menuSort);
  const [menuList, setMenuList] = useState(contextDefaultValue.menuList);
  const [currentGroup, setCurrentGroup] = useState(contextDefaultValue.currentGroup);
  const [accessToken, setAccessToken] = useState(contextDefaultValue.user.accessToken);
  const [userId, setUserId] = useState(contextDefaultValue.user.userId);
  const [creater, setCreater] = useState(contextDefaultValue.creater);
  const [groupImage, setGroupImage] = useState(contextDefaultValue.groupImage);
  const [isExistedMenuList, setIsExistedMenuList] = useState(contextDefaultValue.isExistedMenuList);

  const [canEatList, setCanEatList] = useState<Food[]>(contextDefaultValue.canEatList);
  const [cannotEatList, setCannotEatList] = useState<Food[]>(contextDefaultValue.cannotEatList);
  const [ambiguousList, setAmbiguousList] = useState<Food[]>(contextDefaultValue.ambiguousList);

  const [canEatCategories, setCanEatCategories] = useState<Ingredient[]>(contextDefaultValue.canEatCategories);
  const [cannotEatCategories, setCannotEatCategories] = useState<Ingredient[]>(contextDefaultValue.cannotEatCategories);

  const addBanIngredient = (ingredientId: number) => {
    setBanIngredient((prevBanIngredient) => [...prevBanIngredient, ingredientId]);
  };

  const removeBanIngredient = (ingredientId: number) => {
    setBanIngredient((prevBanIngredient) => prevBanIngredient.filter((id) => id !== ingredientId));
  };

  const categorizeItems = (items: Food[]) => {
    const canEat: Food[] = [];
    const cannotEat: Food[] = [];
    const ambiguous: Food[] = [];

    items.forEach((item) => {
      if (item.canEat === true && item.isAmbiguous === false) {
        canEat.push(item);
      } else if (item.canEat === true && item.isAmbiguous === true) {
        ambiguous.push(item);
      } else {
        cannotEat.push(item);
      }
      // ambiguous.push(item);
    });

    setCanEatList(canEat);
    setCannotEatList(cannotEat);
    setAmbiguousList(ambiguous);
  };

  useEffect(() => {
    contextDefaultValue.user.name = name;
    contextDefaultValue.user.isVegeterian = isVegeterian;
    contextDefaultValue.user.banIngredient = banIngredient;
  }, [name, isVegeterian, banIngredient]);

  return (
    <UserContext.Provider
      value={{
        user: { name, image, isVegeterian, banIngredient, accessToken, userId },
        setName,
        setImage,
        addBanIngredient,
        removeBanIngredient,
        navigationName,
        navigationGroupName,
        setNavigationName,
        setNavigationGroupName,
        menuSort,
        setMenuSort,
        menuList,
        setMenuList,
        currentGroup,
        setCurrentGroup,
        setAccessToken,
        setUserId,
        creater,
        setCreater,
        groupImage,
        setGroupImage,
        isExistedMenuList,
        setIsExistedMenuList,
        canEatList,
        cannotEatList,
        ambiguousList,
        categorizeItems,
        canEatCategories,
        cannotEatCategories,
        setCanEatCategories,
        setCannotEatCategories,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
