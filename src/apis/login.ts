import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

interface LoginResponse {
  id: number;
  accessToken: string;
  isRegistered: boolean;
};

export const postLogin = async (code: string): Promise<LoginResponse|undefined> => {
  try{
    console.log(code);
    const response = await axios.post(`${baseURL}/login/oauth/google`, {
      code: code,
    });
    return response.data;
  }catch(error){
    console.error(error);
    return undefined;
  }
};

export const postRegister = async (nickName:string, categoryIds:number[], token: string) => {
  try{
    const response = await axios.post(`${baseURL}/members/register`, {
      nickName: nickName,
      categoryIds: categoryIds,
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  }catch(error){
    console.error(error);
  }
};

export const postCategoriesIds = async(accessToken:string):Promise<number[]|undefined> => {
  try{
    const response = await axios.get(`${baseURL}/members/my/categories/ids`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    console.log(response);
    return response.data.categoryIds;
  }catch(error){
    console.error(error);
  }
}