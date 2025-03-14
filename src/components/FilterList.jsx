import FilterItem from "./FilterItem";

export default function FilterList({ category, list }) {
  return (
    <div className="absolute mt-[11px] flex h-[274px] w-[688px] flex-col gap-y-[24px] rounded-[10px] border-[1px] border-[#8338EC] bg-white px-[30px] pt-[40px] pb-[20px]">
      <ul className="flex h-[156px] flex-col gap-y-[22px] overflow-y-scroll">
        {list.map((item, i) => {
          const filterOption =
            item.surname == undefined
              ? item.name
              : item.name + " " + item.surname;
          return (
            <FilterItem category={category} option={filterOption} key={i} />
          );
        })}
      </ul>
      <button className="h-[35px] w-[155px] cursor-pointer self-end rounded-[20px] bg-[#8338EC] text-white transition hover:bg-[#B588F4]">
        არჩევა
      </button>
    </div>
  );
}
