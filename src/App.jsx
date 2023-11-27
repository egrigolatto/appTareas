import { TaskList } from './components/TaskList';

function App() {
  
  return (
    <div className="p-6 mt-11 w-96 min-h-[350px] mx-auto bg-gray-500 bg-opacity-50 text-center rounded-lg shadow-lg text-white font-bold m-3">
      <h1 className="mb-6">Lista de Tareas</h1>
      <TaskList />
    </div>
  );
}

export default App
