import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

export const postNicknameModify = async (nickName:string, token: string) => {
  console.log(token);
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