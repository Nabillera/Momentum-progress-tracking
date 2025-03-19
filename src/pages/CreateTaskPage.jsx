import { useState } from "react";
import DatePicker from "../components/DatePicker";
import Dropdown from "../components/Dropdown";
import Input from "../components/Input";
import { postTask } from "../../api";
import { Link } from "react-router-dom";

export default function CreateTaskPage({ data, onAddEmployee }) {
  let defaultDate = new Date();
  defaultDate.setDate(defaultDate.getDate() + 1);
  defaultDate = defaultDate.toISOString().slice(0, 10);

  const [employeeDropdown, setEmployeeDropdown] = useState({
    isDisabled: true,
    filteredEmployees: [],
  });
  const [taskInformation, setTaskInformation] = useState({
    name: undefined,
    description: undefined,
    priority: 2,
    status: 1,
    department: undefined,
    employee: undefined,
    date: defaultDate,
  });

  const handleFillField = (field, value) => {
    console.log(field + " " + value);
    if (field == "department") {
      setEmployeeDropdown(() => {
        const filtered = data.employees.filter(
          (employee) => employee.department.id == value,
        );
        return {
          isDisabled: false,
          filteredEmployees: filtered,
        };
      });
    }
    setTaskInformation((previousInformation) => {
      console.log(taskInformation);
      return {
        ...previousInformation,
        [field]: value,
      };
    });
  };

  const handleSubmit = () => {
    if (!taskInformation.name) {
      alert("Please enter a title");
    } else if (!taskInformation.department) {
      alert("Please select a department");
    } else if (!taskInformation.employee) {
      alert("Please select an employee");
    }
    postTask(taskInformation);
  };

  return (
    <div className="flex flex-col">
      <h1 className="pt-[140px] pb-[52px] pl-[118px] text-[34px] font-semibold text-[#212529]">
        შექმენი ახალი დავალება
      </h1>
      <div className="ml-[118px] flex h-[958px] w-[1684px] rounded-[4px] border border-[#DDD2FF] bg-[#FBF9FFA6] pt-[65px] pl-[55px]">
        <div className="flex w-[1261px] justify-between">
          <div className="flex h-fit w-[550px] flex-col gap-y-[55px]">
            <Input label="სათაური*" name="name" onFillField={handleFillField} />
            <Input
              label="აღწერა"
              name="description"
              onFillField={handleFillField}
              isTextarea
            />
            <div className="flex gap-x-[32px]">
              <Dropdown
                label="პრიორიტეტი*"
                options={data.priorities}
                defaultValue="საშუალო"
                name="priority"
                onFillField={handleFillField}
              />
              <Dropdown
                label="სტატუსი*"
                options={data.statuses}
                defaultValue="დასაწყები"
                name="status"
                onFillField={handleFillField}
              />
            </div>
          </div>
          <div className="flex w-[550px] flex-col gap-y-[193px]">
            <div className="flex flex-col gap-y-[175px]">
              <div className="flex flex-col gap-y-[94px]">
                <Dropdown
                  label="დეპარტამენტი*"
                  options={data.departments}
                  name="department"
                  defaultValue=" "
                  onFillField={handleFillField}
                />
                <Dropdown
                  label="პასუხისმგებელი თანამშრომელი*"
                  options={employeeDropdown.filteredEmployees}
                  name="employee"
                  defaultValue=" "
                  onFillField={handleFillField}
                  isDisabled={employeeDropdown.isDisabled}
                  onAddEmployee={onAddEmployee}
                  isEmployeeList
                />
              </div>
              <DatePicker
                name="date"
                defaultValue={defaultDate}
                onFillField={handleFillField}
              />
            </div>
            <Link to="/" className="self-end">
              <button
                className="cursor-pointer rounded-[5px] bg-[#8338EC] px-[20px] py-[10px] text-[18px] text-white hover:bg-[#B588F4]"
                onClick={handleSubmit}
              >
                დავალების შექმნა
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
