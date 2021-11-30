import { ShowTodo } from './components/showTodo';
import { CreateTodoFAB } from './components/createTodoFAB';
import {Login, authenticateCookie} from './login/Login';


function App() {
  if (!authenticateCookie()){
    return(
      <div className='bg-gradient-to-r from-green-400 to-blue-500 absolute h-screen w-screen overflow-auto'>
        <Login/>
      </div>
   )    
  }
  else{
    return (
      <div className="App h-auto">
        <div className='bg-gradient-to-r from-green-400 to-blue-500 absolute h-screen w-screen overflow-auto'>
          <ShowTodo/>
          <CreateTodoFAB/>
        </div>
      </div>
    )}
}

export default App;
