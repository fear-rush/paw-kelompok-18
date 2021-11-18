import { ShowTodo } from './components/showTodo';
import { CreateTodo } from './components/createTodo';

function App() {
  return (
    <div className="App">
      <div className='bg-gradient-to-r from-green-400 to-blue-500 absolute h-auto w-screen overflow-hidden'>
        <CreateTodo/>
        <ShowTodo/>
      </div>
    </div>
  );
}

export default App;
