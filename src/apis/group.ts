import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

export const getGroupList = async () => {
  try{
    const response = await axios.get(`${baseURL}/groups`);
    console.log(response);
    return response.data;
    
  }catch(error){
    console.error(error);
  }
}