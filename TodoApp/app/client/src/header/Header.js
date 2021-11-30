import {logOut} from "../login/Login"

function Header(props) {
    var logOutButton = (
        <div class = "flex border-white border-2 p-1.5 rounded-md">
            <button href="#" class="text-md text-white" onClick = {logOut}>Log Out</button>
        </div>)
        if(props.isLoggedIn == "false") logOutButton = (<div/>)
    return (
      <div class = "flex justify-between items-center bg-blue-500 p-6">
        <div>
            <h1 class = "font-bold text-lg text-white">Todos App</h1>
            </div>
            {logOutButton}
      </div>
    )
  }
  
  export default Header