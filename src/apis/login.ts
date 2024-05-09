import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

interface LoginResponse {
  id: number;
  accessToken: string;
  isRegistered: boolean;
}

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
}