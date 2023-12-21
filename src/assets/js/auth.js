export function auth() {
  return localStorage.getItem('idUser') != null ? localStorage.getItem('idUser') : null;
}
