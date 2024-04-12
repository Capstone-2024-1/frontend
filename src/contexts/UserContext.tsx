import { ReactNode, createContext, useEffect, useState } from "react";

export interface UserContextValues {
  user:{
    name: string;
    image: string;
    isVegeterian: boolean;
    banIngredient: Array<number>;
  };
  setName: (value: string) => void;
  setImage: (value: string) => void;
  addBanIngredient: (value: number) => void;
  removeBanIngredient: (value: number) => void;
  navigationName: string;
  setNavigationName: (value: string) => void;
}

const contextDefaultValue: UserContextValues = {
  user:{
    name: '',
    image: '',
    isVegeterian: false,
    banIngredient: [],
  },
  setName: () => {},
  setImage: () => {},
  addBanIngredient: (value: number) => {},
  removeBanIngredient: (value: number) => {},
  navigationName: 'camera',
  setNavigationName: () => {},
};

export const UserContext = createContext(contextDefaultValue);

export const UserProvider = ({children} : {children: ReactNode}) => {
  const [name, setName] = useState(contextDefaultValue.user.name);
  const [image, setImage] = useState(contextDefaultValue.user.image);
  const [isVegeterian, setIsVegeterian] = useState(contextDefaultValue.user.isVegeterian);
  const [banIngredient, setBanIngredient] = useState(contextDefaultValue.user.banIngredient);
  const [navigationName, setNavigationName] = useState(contextDefaultValue.navigationName);

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
    <UserContext.Provider value={{user: {name, image, isVegeterian, banIngredient}, setName, setImage, addBanIngredient, removeBanIngredient, navigationName, setNavigationName}}>
      {children}
    </UserContext.Provider>
  );
};