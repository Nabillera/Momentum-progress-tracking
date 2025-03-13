import FilterCategory from "./FilterCategory";

export default function FilterSection() {
  return (
    <div id="filter-section" className="pl-[120px]">
      <div className="flex w-fit gap-x-[45px] rounded-[10px] border-[1px] border-gray-300">
        <FilterCategory>დეპარტამენტი</FilterCategory>
        <FilterCategory>პრიორიტეტი</FilterCategory>
        <FilterCategory>თანამშრომელი</FilterCategory>
      </div>
    </div>
  );
}
