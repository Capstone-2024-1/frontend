import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from "react";

interface Menu {
  name: string;
  quantity: number;
}

export interface UserContextValues {
  user:{
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
}

const contextDefaultValue: UserContextValues = {
  user:{
    name: '',
    image: '',
    isVegeterian: false,
    banIngredient: [],
    accessToken: '',
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
};

export const UserContext = createContext(contextDefaultValue);

export const UserProvider = ({children} : {children: ReactNode}) => {
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

  const addBanIngredient = (ingredientId: number) => {
    setBanIngredient((prevBanIngredient) => [...prevBanIngredient, ingredientId]);
  };

  const removeBanIngredient = (ingredientId: number) => {
    setBanIngredient((prevBanIngredient) =>
      prevBanIngredient.filter((id) => id !== ingredientId)
    );
  };

  useEffect(() => {
    contextDefaultValue.user.name = name;
    contextDefaultValue.user.isVegeterian = isVegeterian;
    contextDefaultValue.user.banIngredient = banIngredient;
  }, [name, isVegeterian, banIngredient]);

  return(
    <UserContext.Provider value={{user: {name, image, isVegeterian, banIngredient, accessToken, userId}, setName, setImage, addBanIngredient, removeBanIngredient, navigationName, navigationGroupName, setNavigationName, setNavigationGroupName, menuSort, setMenuSort, menuList, setMenuList, currentGroup, setCurrentGroup, setAccessToken, setUserId}}>
      {children}
    </UserContext.Provider>
  );
};