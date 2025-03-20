import { useParams } from "react-router-dom";
import High from "../assets/PriorityHigh.svg";
import Medium from "../assets/PriorityMedium.svg";
import Low from "../assets/PriorityLow.svg";
import DepartmentIcon from "../components/DepartmentIcon";
import OpenTaskDetails from "../components/OpenTaskDetails";
import CommentSection from "../components/CommentSection";

export default function OpenTaskPage({ data, priorities, statuses }) {
  const taskId = useParams().taskId;
  const taskData = data.find((task) => task.id == taskId);
  const priorityIcon =
    priorities.id == 1 ? Low : priorities.id == 2 ? Medium : High;

  return (
    <div className="flex gap-[223px] pt-[140px] pl-[121px]">
      <div className="flex flex-col w-[715px]">
        <div className="flex gap-[18px]">
          <img src={priorityIcon} className="w-[106px]" />
          <DepartmentIcon departmentId={taskData.employee.department.id} />
        </div>
        <h1 className="pt-[12px] pb-[26px] text-[34px] font-semibold text-[#212529]">
          {taskData.name}
        </h1>
        <p className="text-[18px]">{taskData.description}</p>
        <OpenTaskDetails
          taskId={taskId}
          details={taskData}
          statuses={statuses}
        />
      </div>
      <CommentSection taskId={taskId} totalComments={taskData.total_comments}/>
    </div>
  );
}
