import axios from 'axios';
import { useState } from 'react';
import Cookie from 'universal-cookie'

export default function LoginForm() {
    const [data, setData] = useState({ name: "", password: "" })
    const [status, setStatus] = useState("")
    const cookie = new Cookie()
    function handleChange(e) {
        setStatus()
        setData((data) => ({ ...data, [e.target.name]: e.target.value }));
    }
    function handleSubmit(e){
        console.log(data)
        axios
        .post('http://localhost:8080/users/auth', data)
        .then((res =>{
            console.log(res)
            setStatus("Login successful!")
            cookie.set('auth',res.data)
            window.location.reload(true) 
        }))
        .catch((err)=>{
            console.log(err)
            setStatus("Invalid Login")
        })
        //
    }
    return (
            <div id="userFormBody" class="max-w-sm w-11/12 mt-10 mx-auto h-full">
                <div class="text-base text-white bg-blue-400 py-4 rounded-t-md text-center font-bold">Welcome</div>
                <form id="userForm" class="bg-white p-4 rounded-b-md grid" action="" method="">
                    <div class="mb-4 md:flex items-center">
                        <label class="font-bold  text-gray-500 pr-4 w-1/3 text-right">Username</label>
                        <input 
                            type="text" 
                            name="name" 
                            class="bg-gray-200 border-2 border-gray-200 p-1 shadow rounded-md w-full focus:outline-none focus:bg-white focus:border-blue-400 text-gray-500"
                            onChange={handleChange} />
                    </div>
                    <div class="mb-4 md:flex items-center">
                        <label class="font-bold text-gray-500 pr-4 w-1/3 text-right">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            class="bg-gray-200 border-2 border-gray-200 p-1 shadow rounded-md w-full focus:outline-none focus:bg-white focus:border-blue-400 text-gray-500"
                            onChange = {handleChange}
                        />
                    </div>
                    <i class = "text-red-500 mb-2">{status}</i>
                    <div class="flex flex-col items-center">
                        <button id="userFormSubmit" class="bg-blue-400 text-base text-white px-2 py-2 rounded-md hover:bg-blue-700 w-full font-bold" type="button" onClick={handleSubmit}>Login</button>
                    </div>
                </form>
            </div>


    )
}
