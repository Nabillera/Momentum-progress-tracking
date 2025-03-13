import High from "../assets/PriorityHigh.svg";
import Medium from "../assets/PriorityMedium.svg";
import Low from "../assets/PriorityLow.svg";
import Comments from "../assets/Comments.svg";
import Icon from "../assets/icon.png";

export default function TaskCard() {
  const departmentColors = ["#FF66A8", "#FD9A6A", "#FFD86D", "#89B6FF"];
  const colorIndex = Math.floor(Math.random() * 4);

  return (
    <div
      className="flex w-[100%] flex-col justify-between gap-y-[28px] rounded-[15px] border-[1px] p-[20px]"
      style={{ borderColor: "pink" }}
    >
      <div className="flex items-center justify-between">
        <div className="flex gap-x-[10px]">
          <img src={High} />
          <div
            className="flex h-[24px] items-center justify-center rounded-[15px] px-[9px] text-[12px] text-white"
            style={{ backgroundColor: departmentColors[colorIndex] }}
          >
            Department
          </div>
        </div>

        <span className="text-[12px]">Due Date</span>
      </div>
      <div className="flex flex-col">
        <span className="text-[15px] font-medium">Title</span>
        <span className="text-[14px]">Description</span>
      </div>
      <div className="flex justify-between">
        <img src={Icon} className="h-[31px] w-[31px] rounded-full" />
        <div className="flex items-center gap-x-[4px]">
          <img src={Comments} />
          <span className="text-[14px]">count</span>
        </div>
      </div>
    </div>
  );
}
