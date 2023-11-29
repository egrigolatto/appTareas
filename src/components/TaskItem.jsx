import PropTypes from "prop-types";
import { IconoBorrar } from "./IconoBorrar";

const TaskItem = ({ id, task, completada, completarTask, eliminarTask }) => {
  return (
    <div
      className={
        completada
          ? "task bg-red-200 line-through hover:bg-red-300 "
          : "task"
      }
    >
      <div
        className=" w-full h-full text-left "
        onClick={() => completarTask(id)}
      >
        {task}
      </div>
      <div onClick={() => eliminarTask(id)} className="">
        <IconoBorrar />
      </div>
    </div>
  );
};

TaskItem.propTypes = {
  id: PropTypes.string,
  task: PropTypes.string,
  completada: PropTypes.bool,
  completarTask: PropTypes.func,
  eliminarTask: PropTypes.func,
};

export { TaskItem };
