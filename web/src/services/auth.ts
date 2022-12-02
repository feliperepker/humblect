
export const TOKEN_KEY = "0asdjas09djsa09djasdjsadajsd09asjd09sajcnzxn";

export function isAuthenticated(){
 return localStorage.getItem(TOKEN_KEY) !== null
}
export function getToken(){
  return localStorage.getItem(TOKEN_KEY);
}

export function login(token: string){
  localStorage.setItem(TOKEN_KEY, token);
  return true;
}

export function logout(){
  localStorage.removeItem(TOKEN_KEY);
};