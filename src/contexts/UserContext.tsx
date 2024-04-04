import { ReactNode, createContext, useEffect, useState } from "react";

export interface UserContextValues {
  user:{
    name: string;
    isVegeterian: boolean;
  };
  setName: (value: string) => void;
}

const contextDefaultValue: UserContextValues = {
  user:{
    name: '',
    isVegeterian: false,
  },
  setName: () => {},
};

export const UserContext = createContext(contextDefaultValue);

export const UserProvider = ({children} : {children: ReactNode}) => {
  const [name, setName] = useState(contextDefaultValue.user.name);
  const [isVegeterian, setIsVegeterian] = useState(contextDefaultValue.user.isVegeterian);

  useEffect(() => {
    contextDefaultValue.user.name = name;
    contextDefaultValue.user.isVegeterian = isVegeterian;
  }, [name, isVegeterian]);

  return(
    <UserContext.Provider value={{user: {name, isVegeterian}, setName}}>
      {children}
    </UserContext.Provider>

  );
};