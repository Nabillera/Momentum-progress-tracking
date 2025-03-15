import CheckGrey from "../assets/CheckGrey.svg";
import CheckGreen from "../assets/CheckGreen.svg";
import CheckRed from "../assets/CheckRed.svg";

export default function Input({ label }) {
  return (
    <div className="flex w-[100%] flex-col">
      <label className="text-[14px] font-medium text-[#343A40]">{label}</label>
      <input className="mt-[3px] mb-[6px] h-[42px] w-[100%] rounded-[6px] border border-[#CED4DA] p-[14px] outline-0" />
      <div className="flex items-center gap-y-[2px]">
        <img src={CheckGrey} />
        <span className="text-[10px] text-[#6C757D]">მინიმუმ 2 სიმბოლო</span>
      </div>

      <div className="flex items-center gap-y-[2px]">
        <img src={CheckGrey} />
        <span className="text-[10px] text-[#6C757D]">მაქსიმუმ 255 სიმბოლო</span>
      </div>
    </div>
  );
}
