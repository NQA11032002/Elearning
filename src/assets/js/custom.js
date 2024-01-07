import axios from './axios';
import { auth } from "./auth";
import { findApiByName } from "./apiUtil";

export async function loadInfor() {
  const authResult = await auth();
    return getUserByID(authResult);
}

export async function updateInfor(fullName, email,  phone) {
  try {
    const apiObject = findApiByName("customer", "common").url;
    const authResult = await auth();

    const response = await axios.put(apiObject+"/"+ authResult,{
      fullName: fullName,
      email: email,
      phone: phone
    });
    
    if(response.status == 200){
      return response.data;
    }

  } catch (error) {
    console.error('Get infor failed', error);
  }
}

 //get information of customer by userID
export async function getUserByID(userID) {
  try {
    // Get API URL
    const apiObject = findApiByName("customer", "findCustomerByUserID").url;
    // Make API request
    const res = await axios.get(apiObject + userID);
    if (res.status === 200) {
      return res.data.data;
    } else {
      console.error('Error fetching user data. Status:', res.status);
      return null;
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    return null;
  }
}

export async function getAllCourserByUserID(userID) {
  try {
    // Get API URL
    const apiObject = findApiByName("course", "findCourseByUserID").url;

    // Make API request
    const res = await axios.get(apiObject + userID);

    if (res.status === 200) {
      return res.data.data;
    } else {
      console.error('Error fetching user data. Status:', res.status);
      return null;
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    return null;
  }
}
