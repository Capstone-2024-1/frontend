import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

export const postNicknameModify = async (nickName:string, token: string) => {
    try{
      const response = await axios.post(`${baseURL}/members/register`, {
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