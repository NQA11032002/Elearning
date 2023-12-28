import Cookies from "js-cookie";

export function auth() {
  return Cookies.get('userID') != null ? Cookies.get('userID') : null;
}

export function getRole() {
  return Cookies.get('role') != null ? Cookies.get('role') : null;
}

