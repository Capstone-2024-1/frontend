import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_SERVER_URL;
const token = process.env.NEXT_PUBLIC_TOKEN;

export const getVegetarian = async () => {
  try{
    const response = await axios.get(`${baseURL}/categories/vegetarian`);
    return response.data;
      
  }catch(error){
    console.error(error);
  }
};

export const getReligion = async () => {
  try{
    const response = await axios.get(`${baseURL}/categories/religions`);
    return response.data;
  }catch(error){
    console.error(error);
  }
};

export const getAllergy = async () => {
  try{
    const response = await axios.get(`${baseURL}/categories/allergies`);
    return response.data;
      
  }catch(error){
    console.error(error);
  }
};

export const getCategory = async () => {
  try{
    const response = await axios.get(`${baseURL}/categories/vegetarian`);
    return response.data;
      
  }catch(error){
    console.error(error);
  }
};

export const putModifiedIngredients = async (categoryIds:number[], accessToken: string) => {
  try{
    const response = await axios.put(`${baseURL}/members/my/categories`, {
      categoryIds: categoryIds,
    },{
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
  }catch(error){
    console.error(error);
  }
};

export const getFoodFiltering = async (foodName:string, accessToken: string) => {
  try {
    console.log(foodName);
    const response = await axios.post(`${baseURL}/filter`, {
      foodName: foodName,
    }, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    return response.data;
  }catch(error){
    console.error(error);
  }
};

export const getFoodGenerating = async (foodName:string, accessToken: string) => {
  try {
    console.log(foodName);
    const response = await axios.post(`${baseURL}/menu/generate`, {
      foodName: foodName,
    }, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    return response.data;
  }catch(error){
    console.error(error);
  }
}