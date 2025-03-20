import { useState } from "react";
import FilterItem from "./FilterItem";

export default function FilterList({ category, list }) {
  const [checkedFilters, setCheckedFilters] = useState([]);

  const handleFilterCheck = (optionValue) => {
    if (category == "employee") {
      setCheckedFilters((prev) => {
        if (prev.includes(optionValue)) {
          return [];
        } else {
          return [optionValue];
        }
      });
    } else {
      setCheckedFilters((prev) => {
        if (prev.includes(optionValue)) {
          const copy = [...prev];
          const index = copy.indexOf(optionValue);
          copy.splice(index, 1);
          return copy;
        } else {
          return [...prev, optionValue];
        }
      });
    }
  };

  const handleSubmitFilters = () => {
    // choose button function
  };

  return (
    <div className="absolute z-0 mt-[11px] flex h-[274px] w-[688px] flex-col gap-y-[24px] rounded-[10px] border-[1px] border-[#8338EC] bg-white px-[30px] pt-[40px] pb-[20px]">
      <ul className="flex h-[156px] flex-col gap-y-[22px] overflow-y-scroll">
        {list.map((item, i) => {
          const icon = item.avatar ?? undefined;
          const filterOption =
            item.surname == undefined
              ? item.name
              : item.name + " " + item.surname;
          return (
            <FilterItem
              onSelect={handleFilterCheck}
              category={category}
              option={filterOption}
              icon={icon}
              optionId={item.id}
              isChecked={checkedFilters.includes(filterOption)}
              key={i}
            />
          );
        })}
      </ul>
      <button
        className="h-[35px] w-[155px] cursor-pointer self-end rounded-[20px] bg-[#8338EC] text-white transition hover:bg-[#B588F4]"
        onClick={handleSubmitFilters}
      >
        არჩევა
      </button>
    </div>
  );
}
