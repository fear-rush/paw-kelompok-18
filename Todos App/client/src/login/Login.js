import LoginForm from "./loginComponents/LoginForm";
import Cookie from 'universal-cookie';
import axios from "axios";

function Login(){
    return(
        <LoginForm />
    )
}
function authenticateCookie(){
    const cookie = new Cookie()
    const authCookie = cookie.get("auth")
    var request = new XMLHttpRequest()
    try{
        request.open("GET" ,"http://localhost:8080/users/"+authCookie,false)
        request.send()

        if (request.status === 200) return true
        else throw "error"
        }   
    catch(error){
        return false
    }
}
export{Login, authenticateCookie}