import Momentum from "../assets/Momentum.svg";
import Hourglass from "../assets/Hourglass.svg";
import PlusSign from "../assets/Plus.svg";

export default function Navbar() {
  return (
    <div className="fixed flex w-[100%] items-center justify-between bg-white px-[120px] py-[30px]">
      <div className="flex items-center gap-x-[8px]">
        <img src={Momentum} />
        <img src={Hourglass} />
      </div>

      <div className="flex gap-x-[40px]">
        <button className="cursor-pointer rounded-[5px] border-[1px] border-[#8338EC] px-[20px] py-[9px] leading-[16px] hover:border-[#B588F4] transition">
          თანამშრომლის შექმნა
        </button>
        <button className="border-blue-violet cursor-pointer rounded-[5px] border-[1px] bg-[#8338EC] px-[20px] py-[9px] leading-[16px] text-white hover:bg-[#B588F4] transition">
          <div className="flex items-center gap-x-[4px]">
            <img src={PlusSign} /> შექმენი ახალი დავალება
          </div>
        </button>
      </div>
    </div>
  );
}
