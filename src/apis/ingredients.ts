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

