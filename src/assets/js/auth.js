import Cookies from "js-cookie";
import axios from "./axios";
import { findApiByName } from './apiUtil.js';

export async function auth() {
  try {
    const apiObject = findApiByName("auth", "getUserID").url;

    const res = await axios.get(apiObject);

    if(res.status == 200)
    {
      return res.data.data;
    }else {
      throw new Error(`Request failed with status ${res.status}`);
    }  
  } catch (error) {
    console.error("Error during authentication:", error.message);
    window.location.href = '/error-403';

    throw error;
  }
}

export function getRole() {
  return Cookies.get('role') != null ? Cookies.get('role') : null;
}

export function exceptionHandling(){
  const url = window.location.pathname.split('/')[1];
  if(!Cookies.get('auth') && Cookies.get('auth') == undefined && url != "error-403")
  {
    window.location.href = '/error-403';
  }
}
