import Dropdown from "./Dropdown";
import Input from "./Input";
import Cancel from "../assets/Cancel.svg";
import FileInput from "./FileInput";
import { useState } from "react";
import { postEmployee } from "../../api/index.js";

export default function AddEmployeeModal({ onClose, departments }) {
  // const departmentOptions = departments.map((department) => department.name);
  const [employeeCredentials, setEmployeeCredentials] = useState({
    name: undefined,
    surname: undefined,
    department: undefined,
    avatar: undefined,
  });

  const handleFillField = (field, value) => {
    console.log(field + " " + value);
    setEmployeeCredentials((previousCredentials) => {
      return {
        ...previousCredentials,
        [field]: value,
      };
    });
  };

  const handleSubmit = () => {
    if (!employeeCredentials.name || !employeeCredentials.surname) {
      alert(
        "Please fill the fields accordingly: \n\u2022 2 symbols minimum\n\u2022 255 symbols maximum\n\u2022 Latin or Georgian characters only, no spaces",
      );
    } else if (!employeeCredentials.avatar) {
      alert("Please upload an avatar");
    } else if (!employeeCredentials.department) {
      alert("Please select a department");
    }
    console.log(employeeCredentials);
    postEmployee(employeeCredentials);
  };

  return (
    <div
      className="absolute flex h-[100%] w-[100%] justify-center bg-[#0D0F1026] pt-[118px] backdrop-blur-[5px]"
      onClick={onClose}
    >
      <div
        className="flex h-[766px] w-[913px] flex-col gap-y-[37px] rounded-[10px] bg-white px-[50px] pt-[40px] pb-[60px]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={Cancel}
          className="cursor-pointer self-end"
          onClick={onClose}
        />
        <div className="flex flex-col items-center gap-y-[45px]">
          <h2 className="text-[32px] font-medium text-[#212529]">
            თანამშრომლის დამატება
          </h2>
          <div className="flex w-[100%] gap-x-[45px]">
            <Input label="სახელი*" onFillField={handleFillField} name="name" />
            <Input
              label="გვარი*"
              onFillField={handleFillField}
              name="surname"
            />
          </div>

          <FileInput onFillField={handleFillField} />

          <div className="w-[384px] self-start">
            <Dropdown
              options={departments}
              defaultValue=" "
              onFillField={handleFillField}
            />
          </div>

          <div className="flex gap-x-[22px] self-end">
            <button
              className="cursor-pointer rounded-[5px] border border-[#8338EC] bg-white px-[16px] py-[10px] text-[18px] leading-[16px] transition hover:border-[#B588F4]"
              onClick={onClose}
            >
              გაუქმება
            </button>
            <button
              className="cursor-pointer rounded-[5px] border border-[#8338EC] bg-[#8338EC] px-[16px] py-[10px] text-[18px] leading-[16px] text-white transition hover:border-[#B588F4] hover:bg-[#B588F4]"
              onClick={handleSubmit}
            >
              დაამატე თანამშრომელი
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
