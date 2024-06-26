import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

export const postNicknameModify = async (nickName:string, token: string) => {
  try{
    const response = await axios.put(`${baseURL}/members/my/name`, {
      nickName: nickName,
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log(response);
    return response.data;
  }catch(error){
    console.error(error);
  }
};

export const getMyIngredients = async (token: string) => {
  try{
    const response = await axios.get(`${baseURL}/members/my/categories`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log(response);
    return response.data;
  }catch(error){
    console.error(error);
  }
};

export const getMyProfile = async (accessToken: string) => {
  try{
    const response = await axios.get(`${baseURL}/members/my`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    return response.data;
  }catch(error){
    console.error(error);
  };
};