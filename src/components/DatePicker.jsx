import { useState } from "react";

export default function DatePicker({ name, defaultValue, onFillField }) {
  const currentDate = new Date().toISOString().slice(0, 10);

  const [selectedDate, setSelectedDate] = useState(defaultValue);

  const handleSetDate = (event) => {
    setSelectedDate(event.target.value);
    onFillField(name, event.target.value);
    console.log(selectedDate);
  };

  return (
    <div className="flex flex-col">
      <label className="py-[6px] text-[16px] font-medium text-[#343A40]">
        დედლაინი
      </label>
      <input
        type="date"
        min={currentDate}
        value={selectedDate}
        onChange={handleSetDate}
        className="h-[45px] w-[318px] rounded-[6px] border border-[#CED4DA] bg-white p-[10px]"
      />
    </div>
  );
}
