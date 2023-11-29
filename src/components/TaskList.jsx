import { TaskForm } from "./TaskForm"
import { TaskItem } from "./TaskItem";
import { useEffect, useState } from "react";


const TaskList = () => {

  const [tasks, setTasks] = useState(() => {
    let data = localStorage.getItem("tasks");
    return data ? JSON.parse(data) : [];
  });
  const [mensaje, setMensaje] = useState(false);

  const agregarTask = (task) => {
    
    if (task.texto === '') {
      setMensaje(true)
    } else {
      task.texto = task.texto.trim();
      const tareasActualizadas = [task, ...tasks];
      setTasks(tareasActualizadas);
      setMensaje(false)
    }
  };

  const eliminarTask = (id) => {
    const tareasActualizadas = tasks.filter((task) => task.id !== id);
    setTasks(tareasActualizadas);
  };

  const completarTask = (id) => {

    const tareasActualizadas = tasks.map((task) => {
      if (task.id === id) {
        task.completada = !task.completada;
      }
      return task;
    });
    setTasks(tareasActualizadas);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <TaskForm agregarTask={agregarTask} mensaje={mensaje} />
      <div className="max-h-screen overflow-y-auto">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            id={task.id}
            task={task.texto}
            completada={task.completada}
            eliminarTask={eliminarTask}
            completarTask={completarTask}
          />
        ))}
      </div>
    </>
  );
};

export { TaskList };