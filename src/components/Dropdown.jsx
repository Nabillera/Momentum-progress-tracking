import { useRef, useState } from "react";
import ArrowDown from "../assets/ArrowDown.svg";
import ArrowDownDisabled from "../assets/ArrowDownDisabled.svg";
import Low from "../assets/Low.svg";
import Medium from "../assets/Medium.svg";
import High from "../assets/High.svg";
import Add from "../assets/Add.svg";

export default function Dropdown({
  label,
  options,
  defaultValue,
  name,
  onFillField,
  isModal,
  isDisabled,
  isEmployeeList,
  onAddEmployee,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultValue);
  const [selectedEmployee, setSelectedEmployee] = useState({
    name: undefined,
    surname: undefined,
    avatar: undefined,
  });
  const optionRef = useRef([]);

  const handleOpenSelect = () => {
    setIsOpen(() => !isOpen);
  };

  const handleSelectOption = (refValue, index) => {
    setSelectedOption(refValue);
    onFillField(name, index);
    setIsOpen(false);
  };

  const handleSelectEmployee = (eName, eSurname, eAvatar, index) => {
    setSelectedEmployee({ name: eName, surname: eSurname, avatar: eAvatar });
    onFillField(name, index);
    setIsOpen(false);
  };

  return (
    <div className="flex w-[100%] flex-col">
      <label
        className={` ${isModal ? "text-[14px]" : "text-[16px] leading-[19px]"} ${isDisabled ? "text-[#ADB5BD]" : "text-[#343A40]"} py-[6px] font-medium`}
      >
        {label}
      </label>
      <div className="relative w-[100%] cursor-pointer bg-white">
        <button
          className={`${isOpen ? "rounded-t-[6px]" : "rounded-[6px]"} ${isModal ? "h-[42px]" : "h-[45px]"} ${isDisabled && "pointer-events-none"} flex w-[100%] cursor-pointer items-center justify-between border border-[#CED4DA] p-[10px]`}
          onClick={handleOpenSelect}
        >
          {isEmployeeList && selectedEmployee.name ? (
            <div className="flex items-center gap-[8px]">
              <img src={selectedEmployee.avatar} className="w-[28px]" />
              <span className="text-[14px] text-[#0D0F10]">
                {selectedEmployee.name + " " + selectedEmployee.surname}
              </span>
            </div>
          ) : (
            <div className="flex">
              {selectedOption == "საშუალო" ? (
                <img src={Medium} className="mr-[8px]" />
              ) : selectedOption == "დაბალი" ? (
                <img src={Low} className="mr-[8px]" />
              ) : selectedOption == "მაღალი" ? (
                <img src={High} className="mr-[8px]" />
              ) : undefined}
              <span className="text-[14px]">{selectedOption}</span>
            </div>
          )}

          <img
            src={isDisabled ? ArrowDownDisabled : ArrowDown}
            className={isOpen ? "rotate-x-180" : ""}
          />
        </button>
        <ul
          className={`${isOpen ? "" : "hidden"} absolute top-[38px] left-0 z-2 w-[100%] gap-y-[2px] rounded-b-[6px] border-r border-b border-l border-[#CED4DA] bg-white px-[10px]`}
        >
          {isEmployeeList && (
            <li className="flex gap-[8px] py-[10px]" onClick={onAddEmployee}>
              <img src={Add} />
              <span className="text-[#8338EC]">დაამატე თანამშრომელი</span>
            </li>
          )}
          {isEmployeeList
            ? options.map((option, index) => (
                <li
                  key={index}
                  className="flex items-center gap-x-[8px] py-[10px] text-[14px] text-[#0D0F10]"
                  onClick={() =>
                    handleSelectEmployee(
                      option.name,
                      option.surname,
                      option.avatar,
                      option.id,
                    )
                  }
                >
                  <img src={option.avatar} className="w-[28px]" />
                  {option.name + " " + option.surname}
                </li>
              ))
            : options.map((option, index) => (
                <li
                  key={index}
                  className="flex items-center gap-[8px] py-[10px] text-[14px]"
                  ref={(elem) => (optionRef.current[index] = elem)}
                  onClick={() =>
                    handleSelectOption(
                      optionRef.current[index].innerText,
                      option.id,
                    )
                  }
                >
                  {name == "priority" && <img src={option.icon} />}
                  {option.name}
                </li>
              ))}
        </ul>
      </div>
    </div>
  );
}
