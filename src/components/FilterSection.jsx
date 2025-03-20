import { useState } from "react";
import FilterCategory from "./FilterCategory";

export default function FilterSection({
  departments,
  employees,
  priorities,
  onSubmit,
}) {
  const [activeCategory, setActiveCategory] = useState();

  const handleOpenCategory = (category) => {
    setActiveCategory(category);
  };

  return (
    <div id="filter-section" className="pl-[120px]">
      <div className="flex w-fit gap-x-[45px] rounded-[10px] border-[1px] border-gray-300">
        <FilterCategory
          onOpen={handleOpenCategory}
          activeCategory={activeCategory}
          list={departments}
          name="department"
          onSubmit={onSubmit}
        >
          დეპარტამენტი
        </FilterCategory>
        <FilterCategory
          onOpen={handleOpenCategory}
          activeCategory={activeCategory}
          list={priorities}
          name="priority"
          onSubmit={onSubmit}
        >
          პრიორიტეტი
        </FilterCategory>
        <FilterCategory
          onOpen={handleOpenCategory}
          activeCategory={activeCategory}
          list={employees}
          name="employee"
          onSubmit={onSubmit}
        >
          თანამშრომელი
        </FilterCategory>
      </div>
    </div>
  );
}
