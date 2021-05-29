import http from './httpService';
import 'react-toastify/dist/ReactToastify.css'



const apiPoint = "/api/login/"
const tokenKey = "token"

export async function login(username, password) {
    const {data: jwt} = await http.post(apiPoint, { username, password });
    localStorage.setItem(tokenKey, jwt.token);
    localStorage.setItem("organization", jwt.organization);
    localStorage.setItem('email',jwt.email)
    
}

export async function getTenders(){
    const getTender="/api/publish-tender/"
    return http.get(getTender)
}

export async function getTendersList(id){
    const getTender="/api/publish-tender/"+id
    return http.get(getTender)
}

export async function getBids(){
    return http.get("/api/bid/")
}
export async function approveBids(id,status){
    return http.patch("/api/bid/"+id+"/",{status})
}
export async function rejectBids(id,status){
    return http.patch("/api/bid/"+id+"/",{status})
}
export async function updateTender(id,assigned_to){
    return http.patch("/api/publish-tender/"+id+"/",{assigned_to})
}


export function publishTender(data){
    return http.post('/api/publish-tender/',data)
}

export function searchTender(data){
    const search="/api/publish-tender/?search="+data
    return http.get(search)
}

export function searchBids(data){
    const search="/api/bid/?search="+data
    return http.get(search)
}
export function deleteTender(id){
    const getTender="/api/publish-tender/"+id+"/"
    return http.delete(getTender)
}
export function deleteBid(id){
    const getTender="/api/bid/"+id+"/"
    return http.delete(getTender)
}

    const apiEndPoint1 = "/api/bid/"
    export async function postBid(data){
            return http.post(apiEndPoint1, data)
        }
    
export function logout(){
    localStorage.removeItem(tokenKey);
    localStorage.removeItem("organization");
}

export function getCurrentUser(){
    try {
        const jwt = localStorage.getItem(tokenKey);
        const jwt2 = localStorage.getItem("organization");

       return jwt,jwt2;
       
      } catch (ex) {
        return null
      }
}
export default{
    login,
    logout,
    getCurrentUser,
    publishTender,
    getTenders,
    deleteTender,
    searchTender,
    getBids,
    searchBids,
    rejectBids,
    getTendersList

}