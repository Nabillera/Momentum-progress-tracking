import { useRef, useState } from "react";
import ArrowDown from "../assets/ArrowDown.svg";

export default function Dropdown({ options, defaultValue, onFillField }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultValue);
  const optionRef = useRef([]);

  const handleOpenSelect = () => {
    setIsOpen(() => !isOpen);
  };

  const handleSelectOption = (refValue, index) => {
    setSelectedOption(refValue);
    onFillField("department", index);
    setIsOpen(false);
  };

  return (
    <div className="w-[100%]">
      <label className="mb-[3px] text-[14px] font-medium text-[#343A40]">
        დეპარტამენტი*
      </label>
      <div className="relative w-[100%] cursor-pointer">
        <button
          className={`${isOpen ? "rounded-t-[6px]" : "rounded-[6px]"} flex h-[42px] w-[100%] cursor-pointer items-center justify-between border border-[#CED4DA] p-[10px]`}
          onClick={handleOpenSelect}
        >
          <span>{selectedOption}</span>
          <img src={ArrowDown} className={isOpen ? "rotate-x-180" : ""} />
        </button>
        <ul
          className={`${isOpen ? "" : "hidden"} absolute top-[38px] left-0 w-[100%] gap-y-[2px] rounded-b-[6px] border-r border-b border-l border-[#CED4DA] bg-white px-[10px]`}
        >
          {options.map((option, index) => (
            <li
              key={index}
              className="py-[10px]"
              ref={(elem) => (optionRef.current[index] = elem)}
              onClick={() =>
                handleSelectOption(optionRef.current[index].innerText, index)
              }
            >
              {option.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
