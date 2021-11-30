import LoginForm from "./loginComponents/LoginForm";
import Cookie from 'universal-cookie';

function Login(){
    return(
        <LoginForm />
    )
}
function authenticateCookie(){
    const cookie = new Cookie()
    const authCookie = cookie.get("auth")
    var request = new XMLHttpRequest()
    request.open("GET" ,"http://localhost:8080/users/"+authCookie,false)
    request.send()
    if (request.status == 200) return true
    else return false
    
}
function logOut(){
    const cookie = new Cookie()
    cookie.remove("auth")
    window.location.reload()
}
export{Login, authenticateCookie, logOut}