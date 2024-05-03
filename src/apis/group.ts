import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_SERVER_URL;
const token = process.env.NEXT_PUBLIC_TOKEN;

export const getGroupList = async () => {
  try{
    const response = await axios.get(`${baseURL}/groups`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
    
  }catch(error){
    console.error(error);
  }
};

export const getGroupMembers = async (groupName:string) => {
  try{
    const response = await axios.get(`${baseURL}/groups/${groupName}/members`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
    
  }catch(error){
    console.error(error);
  }
};

export const createNewGroup = async (groupName:string) => {
  try{
    const response = await axios.post(`${baseURL}/groups/create`,{
      groupName: groupName
    },  {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log(response);
    
  }catch(error){
    console.error(error);
  }
};