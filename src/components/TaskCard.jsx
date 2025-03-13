import High from "../assets/PriorityHigh.svg";
import Medium from "../assets/PriorityMedium.svg";
import Low from "../assets/PriorityLow.svg";
import Comments from "../assets/Comments.svg";
import { format } from "date-fns";

export default function TaskCard({ taskData, color }) {
  const departmentColors = ["#FF66A8", "#FD9A6A", "#FFD86D", "#89B6FF"];
  const colorIndex = Math.floor(Math.random() * 4);
  const dueDate = taskData.due_date.slice(0, 10);
  const formattedDate = format(dueDate, "dd MMM, yyyy");
  const priorityIcon =
    taskData.priority.id == 1 ? Low : taskData.priority.id == 2 ? Medium : High;

  //might find a better approach later
  const shortenDepartment = () => {
    let shortenedDepartment;
    if (taskData.department.id == 1) {
      shortenedDepartment = "ადმინისტრაცია";
    } else if (taskData.department.id == 2) {
      shortenedDepartment = "HR";
    } else if (taskData.department.id == 3) {
      shortenedDepartment = "ფინანსები";
    } else if (taskData.department.id == 4) {
      shortenedDepartment = "მარკეტინგი";
    } else if (taskData.department.id == 5) {
      shortenedDepartment = "ლოჯისტიკა";
    } else if (taskData.department.id == 6) {
      shortenedDepartment = "ინფ. ტექ.";
    } else {
      shortenedDepartment = "მედია";
    }
    return shortenedDepartment;
  };

  return (
    <div
      className="flex w-[100%] flex-col justify-between gap-y-[28px] rounded-[15px] border-[1px] p-[20px]"
      style={{ borderColor: color }}
    >
      <div className="flex items-center justify-between">
        <div className="flex gap-x-[10px]">
          <img src={priorityIcon} />
          <div
            className="flex h-[24px] items-center justify-center rounded-[15px] px-[9px] text-[12px] text-white"
            style={{ backgroundColor: departmentColors[colorIndex] }}
          >
            {shortenDepartment()}
          </div>
        </div>
        <span className="text-[12px]">{formattedDate}</span>
      </div>
      <div className="flex flex-col">
        <span className="text-[15px] font-medium">{taskData.name}</span>
        <span className="text-[14px]">{taskData.description}</span>
      </div>
      <div className="flex justify-between">
        <img
          src={taskData.employee.avatar}
          className="h-[31px] w-[31px] rounded-full"
        />
        <div className="flex items-center gap-x-[4px]">
          <img src={Comments} />
          <span className="text-[14px]">count</span>
        </div>
      </div>
    </div>
  );
}
