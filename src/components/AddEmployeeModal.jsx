import Dropdown from "./Dropdown";
import Input from "./Input";
import Cancel from "../assets/Cancel.svg";
import UploadIcon from "../assets/ImageUpload.svg";

export default function AddEmployeeModal({ departments }) {
  const departmentOptions = departments.map((department) => department.name);

  return (
    <div className="absolute flex h-[100%] w-[100%] justify-center bg-[#0D0F1026] pt-[118px] backdrop-blur-[5px]">
      <div className="flex h-[766px] w-[913px] flex-col gap-y-[37px] rounded-[10px] bg-white px-[50px] pt-[40px] pb-[60px]">
        <img src={Cancel} className="self-end" />
        <div className="flex flex-col items-center gap-y-[45px]">
          <h2 className="text-[32px] font-medium text-[#212529]">
            თანამშრომლის დამატება
          </h2>
          <div className="flex w-[100%] gap-x-[45px]">
            <Input label="სახელი*" />
            <Input label="გვარი*" />
          </div>

          <div className="relative flex w-[100%] flex-col">
            <label className="text-[14px] font-medium text-[#343A40]">
              ავატარი*
            </label>
            <div className="flex flex-col pt-[50px] items-center h-[120px]">
              <img src={UploadIcon} />
              <span className="text-[14px] text-[#0D0F10]">ატვირთე ფოტო</span>
            </div>
            <input
              type="file"
              accept="image/*"
              className="absolute top-[25px] h-[120px] w-[100%] rounded-[8px] border border-dashed border-[#CED4DA] text-center"
            />
          </div>

          <div className="w-[384px] self-start">
            <Dropdown options={departmentOptions} defaultValue=" " />
          </div>

          <div className="flex gap-x-[22px] self-end">
            <button className="cursor-pointer rounded-[5px] border border-[#8338EC] bg-white px-[16px] py-[10px] text-[18px] leading-[16px] transition hover:border-[#B588F4]">
              გაუქმება
            </button>
            <button className="cursor-pointer rounded-[5px] border border-[#8338EC] bg-[#8338EC] px-[16px] py-[10px] text-[18px] leading-[16px] text-white transition hover:border-[#B588F4] hover:bg-[#B588F4]">
              დაამატე თანამშრომელი
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
