import { useState } from "react"
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

const TaskForm = ({agregarTask, mensaje}) => {

  const [input, setInput] = useState('');

  const manejarForm = (e) => {
    setInput(e.target.value);
  }

  const manejarEnvio = (e) => {

    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      texto: input,
      completada: false,
    };
    agregarTask(newTask);
    setInput('');
  }

  return (
    <>
      <form
        onSubmit={manejarEnvio}
        className="flex items-center justify-center space-x-2"
      >
        <input
          type="text"
          placeholder="Ingrese una nota"
          name="texto-nota"
          onChange={manejarForm}
          value={input}
          className="text-black w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline-blue">
          Agregar
        </button>
      </form>
      {mensaje && (
        <p className="text-sm text-red-500 text-left">Ingrese texto en la tarea</p>
      )}
    </>
  );
}

TaskForm.propTypes = {
  agregarTask: PropTypes.func,
  mensaje: PropTypes.bool
}
export { TaskForm }