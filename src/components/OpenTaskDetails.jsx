import PieChart from "../assets/PieChart.svg";
import Employee from "../assets/Employee.svg";
import Calendar from "../assets/Calendar.svg";
import Dropdown from "../components/Dropdown";
import { format } from "date-fns";
import { ka } from "date-fns/locale";
import { putStatus } from "../../api";

export default function OpenTaskDetails({ taskId, details, statuses }) {
  const dueDate = details.due_date.slice(0, 10);
  const formattedDate = format(dueDate, "E - d/M/yyyy", { locale: ka });

  const handleChangeStatus = (name, statusId) => {
    putStatus(taskId, statusId);
  };

  return (
    <div>
      <h2 className="pt-[63px] pb-[10px] text-[24px] font-medium text-[#2A2A2A]">
        დავალების დეტალები
      </h2>
      <div className="flex">
        <div className="flex w-[715px] flex-col">
          <div className="flex h-[70px] items-center gap-[70px]">
            <div className="flex w-[164px] gap-[6px]">
              <img src={PieChart} />
              <span className="text-[#474747]">სტატუსი</span>
            </div>
            <div className="w-[259px]">
              <Dropdown
                options={statuses}
                defaultValue={details.status.name}
                onFillField={handleChangeStatus}
              />
            </div>
          </div>

          <div className="flex h-[70px] items-center gap-[70px]">
            <div className="flex w-[164px] gap-[6px]">
              <img src={Employee} />
              <span className="text-[#474747]">თანამშრომელი</span>
            </div>
            <div className="flex items-center gap-[12px]">
              <img src={details.employee.avatar} className="w-[32px]" />
              <div className="flex flex-col">
                <span className="text-[11px] text-[#474747]">
                  {details.employee.department.name}
                </span>
                <span className="text-[14px] text-[#0D0F10]">
                  {details.employee.name + " " + details.employee.surname}
                </span>
              </div>
            </div>
          </div>

          <div className="flex h-[70px] items-center gap-[70px]">
            <div className="flex w-[164px] gap-[6px]">
              <img src={Calendar} />
              <span className="text-[#474747]">დავალების ვადა</span>
            </div>
            <span className="text-[14px] text-[#0D0F10]">{formattedDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
