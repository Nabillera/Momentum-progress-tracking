import High from "../assets/PriorityHigh.svg";
import Medium from "../assets/PriorityMedium.svg";
import Low from "../assets/PriorityLow.svg";
import Comments from "../assets/Comments.svg";
import DepartmentIcon from "./DepartmentIcon";
import { format } from "date-fns";
import { ka } from "date-fns/locale";

export default function TaskCard({ taskData, color }) {
  console.log(taskData);
  const dueDate = taskData.due_date.slice(0, 10);
  const formattedDate = format(dueDate, "dd MMM, yyyy", { locale: ka });
  const priorityIcon =
    taskData.priority.id == 1 ? Low : taskData.priority.id == 2 ? Medium : High;

  return (
    <div
      className="flex w-[100%] flex-col justify-between gap-y-[28px] rounded-[15px] border-[1px] p-[20px]"
      style={{ borderColor: color }}
    >
      <div className="flex items-center justify-between">
        <div className="flex gap-x-[10px]">
          <img src={priorityIcon} />
          <DepartmentIcon departmentId={taskData.department.id} isTaskCard />
        </div>
        <span className="text-[12px] text-[#212529]">{formattedDate}</span>
      </div>
      <div className="flex flex-col">
        <span className="text-[15px] font-medium text-[#212529]">
          {taskData.name}
        </span>
        <span className="text-[14px] text-[#343A40]">
          {taskData.description}
        </span>
      </div>
      <div className="flex justify-between">
        <img
          src={taskData.employee.avatar}
          className="h-[31px] w-[31px] rounded-full"
        />
        <div className="flex items-center gap-x-[4px]">
          <img src={Comments} />
          <span className="text-[14px] text-[#212529]">{taskData.total_comments}</span>
        </div>
      </div>
    </div>
  );
}
