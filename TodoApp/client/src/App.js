import { ShowTodo } from './components/showTodo';
import { CreateTodoFAB } from './components/createTodoFAB';
import {Login, authenticateCookie} from './login/Login';
import Header from './header/Header'


function App() {
  if (!authenticateCookie()){
    return(
      <div className='bg-gradient-to-r from-green-400 to-blue-500 absolute h-screen w-screen overflow-auto'>
        <Header isLoggedIn = "false"/>
        <Login/>
      </div>
   )    
  }
  else{
    return (
      <div className="App h-auto">
        <div className='bg-gradient-to-r from-green-400 to-blue-500 absolute h-screen w-screen overflow-auto'>
          <Header isLoggedIn = "true"/>
          <ShowTodo/>
          <CreateTodoFAB/>
        </div>
      </div>
    )}
}

export default App;
