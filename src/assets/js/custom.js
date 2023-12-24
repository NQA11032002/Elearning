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
