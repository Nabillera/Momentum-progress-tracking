import Momentum from "../assets/Momentum.svg";
import Hourglass from "../assets/Hourglass.svg";
import PlusSign from "../assets/Plus.svg";
import { Link } from "react-router-dom";

export default function Navbar({ onAddEmployee }) {
  return (
    <div className="fixed flex w-[100%] items-center justify-between bg-white px-[120px] py-[30px]">
      <Link to="/">
        <div className="flex items-center gap-x-[8px]">
          <img src={Momentum} />
          <img src={Hourglass} />
        </div>
      </Link>

      <div className="flex gap-x-[40px]">
        <button
          className="cursor-pointer rounded-[5px] border border-[#8338EC] px-[20px] py-[9px] leading-[16px] transition hover:border-[#B588F4]"
          onClick={onAddEmployee}
        >
          თანამშრომლის შექმნა
        </button>
        <Link to="/create-task">
          <button className="cursor-pointer rounded-[5px] border border-[#8338EC] bg-[#8338EC] px-[20px] py-[9px] leading-[16px] text-white transition hover:border-[#B588F4] hover:bg-[#B588F4]">
            <div className="flex items-center gap-x-[4px]">
              <img src={PlusSign} /> შექმენი ახალი დავალება
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
}
