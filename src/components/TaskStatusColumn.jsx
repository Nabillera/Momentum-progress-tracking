import TaskCard from "./TaskCard";
import { Link } from "react-router-dom";

export default function TaskStatusColumn({ color, status, tasks }) {
  return (
    <div className="flex w-[381px] flex-col gap-y-[30px] pt-[79px]">
      <h2
        className="w-[100%] rounded-[10px] py-[15px] text-center text-[20px] font-medium text-white"
        style={{ backgroundColor: color }}
      >
        {status}
      </h2>
      <div className="flex w-[100%] flex-col gap-y-[30px]">
        {tasks.map((task, i) => {
          if (task.status.name == status) {
            return (
              <Link to={`/tasks/${task.id}`}>
                <TaskCard key={i} taskData={task} color={color} />
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
}
