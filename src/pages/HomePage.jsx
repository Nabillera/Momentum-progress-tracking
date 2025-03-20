import { useState } from "react";
import FilterSection from "../components/FilterSection";
import TaskDisplay from "../components/TaskDisplay";
import Clear from "../assets/Clear.svg";

export default function HomePage({ data }) {
  const [selectedFilters, setSelectedFilters] = useState({
    department: [],
    priority: [],
    employee: [],
  });

  const handleSubmitFilter = (category, value) => {
    setSelectedFilters((prev) => {
      return {
        ...prev,
        [category]: [...value],
      };
    });
  };

  const handleRemoveFilter = (category, value) => {
    setSelectedFilters((prev) => {
      return {
        ...prev,
        [category]: prev[category].filter((item) => item != value),
      };
    });
  };

  const clearFilters = () => {
    setSelectedFilters({
      department: [],
      priority: [],
      employee: [],
    });
  };

  const handleFilterTasks = (taskList) => {
    let departments = [];
    selectedFilters.department.forEach((item) => {
      departments.push(item);
    });
    let priorities = [];
    selectedFilters.priority.forEach((item) => {
      priorities.push(item);
    });
    let filteredTasks = taskList
      .filter(
        (task1) =>
          departments.length == 0 ||
          departments.includes(task1.department.name),
      )
      .filter(
        (task2) =>
          priorities.length == 0 || priorities.includes(task2.priority.name),
      )
      .filter(
        (task3) =>
          selectedFilters.employee[0] == undefined ||
          (selectedFilters.employee[0].includes(task3.employee.name) &&
            selectedFilters.employee[0].includes(task3.employee.surname)),
      );
    return filteredTasks;
  };

  return (
    <div>
      <h1 className="pt-[140px] pb-[52px] pl-[118px] text-[34px] font-semibold">
        დავალებების გვერდი
      </h1>
      <FilterSection
        departments={data.departments}
        employees={data.employees}
        priorities={data.priorities}
        onSubmit={handleSubmitFilter}
      />
      <div
        id="filter-container"
        className="flex h-[54px] gap-[16px] pt-[25px] pl-[118px]"
      >
        {Object.values(selectedFilters).map((categoryFilters, i) => {
          return categoryFilters.map((filter) => (
            <div className="flex items-center gap-[4px] rounded-full border border-[#CED4DA] px-[10px]">
              <span className="text-[14px] text-[#021526CC]">{filter}</span>
              <img
                src={Clear}
                className="cursor-pointer"
                onClick={() =>
                  handleRemoveFilter(Object.keys(selectedFilters)[i], filter)
                }
              />
            </div>
          ));
        })}
        {(selectedFilters.department.length > 0 ||
          selectedFilters.priority.length > 0 ||
          selectedFilters.employee.length > 0) && (
          <button onClick={clearFilters} className="text-[14px] text-[#343A40]">
            გასუფთავება
          </button>
        )}
      </div>
      <TaskDisplay
        statuses={data.statuses}
        tasks={handleFilterTasks(data.tasks)}
      />
    </div>
  );
}
