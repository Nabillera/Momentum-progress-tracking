import { useState } from "react";
import UploadIcon from "../assets/ImageUpload.svg";
import Delete from "../assets/Delete.svg";

export default function FileInput({ onFillField }) {
  const [validAvatar, setValidAvatar] = useState({ file: {}, url: "" });

  const handleRemoveImage = () => {
    setValidAvatar({ file: "", url: "" });
    onFillField("avatar", undefined)
  };

  const handleImageUpload = (event) => {
    const validExtensions = ["png", "jpg", "jpeg"];
    const file = event.target.files[0];
    const fileExtension = file.type.split("/")[1];

    if (!validExtensions.includes(fileExtension)) {
      file.value = "";
      alert("Invalid file type, try: .png, .jpg or .jpeg");
      return;
    }
    if (file.size > 600000) {
      file.value = "";
      alert("Maximum file size is 600kb");
      return;
    }

    const fileUrl = URL.createObjectURL(file);
    setValidAvatar({ file: file, url: fileUrl });
    onFillField("avatar", file);
    return () => URL.revokeObjectURL(fileUrl);
  };

  return (
    <div className="relative flex w-[100%] flex-col">
      <label className="text-[14px] font-medium text-[#343A40]">ავატარი*</label>
      <div className="flex h-[120px] flex-col items-center pt-[50px]">
        {!validAvatar.url && (
          <>
            <img src={UploadIcon} />
            <span className="text-[14px] text-[#0D0F10]">ატვირთე ფოტო</span>
          </>
        )}
      </div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="absolute top-[25px] h-[120px] w-[100%] cursor-pointer rounded-[8px] border border-dashed border-[#CED4DA] text-center text-white"
      />
      {validAvatar.url && (
        <div className="absolute top-[41px] left-[363px]">
          <div className="relative">
            <img
              src={validAvatar.url}
              className="h-[88px] w-[88px] rounded-full object-cover object-center"
            />
            <img
              src={Delete}
              onClick={handleRemoveImage}
              className="absolute right-[-3px] bottom-[-3px] cursor-pointer"
            />
          </div>
        </div>
      )}
    </div>
  );
}
