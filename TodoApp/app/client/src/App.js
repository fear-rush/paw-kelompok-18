import { ShowTodo } from './components/showTodo';
import { CreateTodoFAB } from './components/createTodoFAB';

function App() {
  return (
    <div className="App h-auto">
      <div className='bg-gradient-to-r from-green-400 to-blue-500 absolute h-screen w-screen overflow-auto'>
        <ShowTodo/>
        <CreateTodoFAB/>
      </div>
    </div>
  );
}

export default App;
