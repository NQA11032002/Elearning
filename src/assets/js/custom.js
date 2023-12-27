import axios from './axios';
import { auth } from "./auth";
import { findApiByName } from "./apiUtil";

export async function loadInfor() {
    try {
      const apiObject = findApiByName("customer", "common").url;
      const response = await axios.get(apiObject+"/"+ auth());
      
      if(response.status == 200){
        return response.data.data;
      }
      return null;

    } catch (error) {
      console.error('Get infor failed', error.response.data);
    }
}

export async function updateInfor(fullName, email,  phone) {
  try {
    const apiObject = findApiByName("customer", "common").url;
    const response = await axios.put(apiObject+"/"+ auth(),{
      fullName: fullName,
      email: email,
      phone: phone
    });
    
    if(response.status == 200){
      console.log(response.data);
      return response.data;
    }

  } catch (error) {
    console.error('Get infor failed', error);
  }
}

