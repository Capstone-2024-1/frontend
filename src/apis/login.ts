import { requestAPIWithoutToken } from "./api-helper"

const baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

export const postLogin = async (code: string) => {
  try{
    // const response = await requestAPIWithoutToken('POST', '/login/oauth/google', {code});
    // return response;

    const temp = {
      "isRegistered": true,
    }
    return temp;
  }catch(error){
    console.error(error);
  }
}