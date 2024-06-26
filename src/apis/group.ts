import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_SERVER_URL;
// const token = process.env.NEXT_PUBLIC_TOKEN;

interface Ingredient {
  "id": number;
  "englishName": string;
  "koreanName": string;
  "imageUrl": string;
};

export const getGroupList = async (accessToken: string) => {
  try{
    const response = await axios.get(`${baseURL}/groups`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    return response.data;
    
  }catch(error){
    console.error(error);
  }
};

export const getGroupMembers = async (currentGroup: number, accessToken: string) => {
  try{
    const response = await axios.get(`${baseURL}/groups/${currentGroup}/members`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    return response.data;
    
  }catch(error){
    console.error(error);
  }
};

export const createNewGroup = async (groupName: string, accessToken: string) => {
  try{
    const response = await axios.post(`${baseURL}/groups/create`,{
      groupName: groupName
    },  {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    
  }catch(error){
    console.error(error);
  }
};

export const participateNewGroup = async (code: string, accessToken: string) => {
  try{
    const response = await axios.post(`${baseURL}/groups/${code}/register`, null,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
  }catch(error){
    console.error(error);
  }
};

export const leaveGroup = async (code: number, accessToken: string) => {
  try{
    const response = await axios.post(`${baseURL}/groups/${code}/unregister`, null,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    
  }catch(error){
    console.error(error);
  }
};

export const removeGroup = async (code: number, accessToken: string) =>  {
  try{
    const response = await axios.post(`${baseURL}/groups/${code}/remove`, null,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
  }catch(error){
    console.error(error);
  }
};

export const postGroupIngredients = async (groupId: number, accessToken: string):Promise<Ingredient[]|undefined> => {
  try{
    const response = await axios.post(`${baseURL}/groups/${groupId}/categories`, null, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    return response.data;
  }catch(error){
    console.error(error);
  }
};

export const postExpelMember = async (groupId: number, memberId: number, accessToken: string) => {
  try{
    const response = await axios.post(`${baseURL}/groups/${groupId}/expel`, {
      memberId: memberId,
    }, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    return response.data;
  }catch(error){
    console.error(error);
  };
};