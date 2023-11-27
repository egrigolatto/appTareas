import PropTypes from "prop-types";
import { IconoBorrar } from "./IconoBorrar";

const TaskItem = ({ id, nota, completada, completarNota, eliminarNota }) => {
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
        onClick={() => completarNota(id)}
      >
        {nota}
      </div>
      <div onClick={() => eliminarNota(id)} className="">
        <IconoBorrar />
      </div>
    </div>
  );
};

TaskItem.propTypes = {
  id: PropTypes.string,
  nota: PropTypes.string,
  completada: PropTypes.bool,
  completarNota: PropTypes.func,
  eliminarNota: PropTypes.func,
};

export { TaskItem };
