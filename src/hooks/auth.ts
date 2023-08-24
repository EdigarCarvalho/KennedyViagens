import { api } from "./useFetch";

export function login(username: string, password: string) {
  return api.post('/auth/login', { username, password });
}

export function logout() {
  return api.post('/auth/logout');
}