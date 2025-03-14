import Check from "../assets/Check.svg";
import Tick from "../assets/Tick.svg";
import CheckPurple from "../assets/CheckPurple.svg";
import TickPurple from "../assets/TickPurple.svg";

export default function FilterItem({ category, option }) {
  const checkIcon = category == "დეპარტამენტი" ? Check : CheckPurple;
  const tickIcon = category == "დეპარტამენტი" ? Tick : TickPurple;

  return (
    <li className="relative flex items-center gap-x-[15px]">
      <img src={checkIcon} />
      <span className="leading-[22px]">{option}</span>
    </li>
  );
}
