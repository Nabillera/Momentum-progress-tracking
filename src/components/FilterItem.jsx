import Check from "../assets/Check.svg";
import Tick from "../assets/Tick.svg";
import CheckPurple from "../assets/CheckPurple.svg";
import TickPurple from "../assets/TickPurple.svg";

export default function FilterItem({
  onSelect,
  category,
  option,
  isChecked,
  icon,
}) {
  const checkIcon = category == "department" ? Check : CheckPurple;
  const tickIcon = category == "department" ? Tick : TickPurple;

  const handleCheckbox = () => {
    onSelect(option);
  };

  return (
    <li className="relative flex items-center gap-x-[15px]">
      {isChecked && (
        <img
          src={tickIcon}
          onClick={() => handleCheckbox()}
          className="absolute left-[4px]"
        />
      )}
      <img src={checkIcon} onClick={() => handleCheckbox()} />
      <div
        className="flex items-center gap-[10px]"
        onClick={() => handleCheckbox()}
      >
        {icon && <img src={icon} className="w-[28px]" />}
        <span className="leading-[22px]">{option}</span>
      </div>
    </li>
  );
}
