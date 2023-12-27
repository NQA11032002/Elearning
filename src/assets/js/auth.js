import Cookies from "js-cookie";

export function auth() {
  return Cookies.get('userID') != null ? Cookies.get('userID') : null;
}
