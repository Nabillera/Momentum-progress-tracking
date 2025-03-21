import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
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
      const updatedFilters = {
        ...prev,
        [category]: [...value],
      };

      localStorage.setItem(
        "department",
        JSON.stringify(updatedFilters.department),
      );
      localStorage.setItem("priority", JSON.stringify(updatedFilters.priority));
      localStorage.setItem("employee", JSON.stringify(updatedFilters.employee));
      return updatedFilters;
    });
  };

  const handleRemoveFilter = (category, value) => {
    setSelectedFilters((prev) => {
      const updatedFilters = {
        ...prev,
        [category]: prev[category].filter((item) => item != value),
      };
      localStorage.setItem(category, JSON.stringify(updatedFilters[category]));
      return updatedFilters;
    });
  };

  const clearLocalStorage = () => {
    localStorage.setItem("department", JSON.stringify([]));
    localStorage.setItem("priority", JSON.stringify([]));
    localStorage.setItem("employee", JSON.stringify([]));
  };

  const clearFilters = () => {
    setSelectedFilters({
      department: [],
      priority: [],
      employee: [],
    });
    clearLocalStorage();
  };

  useEffect(() => {
    clearLocalStorage();
  }, [location]);

  const handleFilterTasks = (taskList) => {
    const savedDepartments = JSON.parse(localStorage.getItem("department"));
    let departments = [...savedDepartments];

    const savedPriorities = JSON.parse(localStorage.getItem("priority"));
    let priorities = [...savedPriorities];

    const savedEmployee = JSON.parse(localStorage.getItem("employee"));
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
          savedEmployee[0] == undefined ||
          (savedEmployee[0].includes(task3.employee.name) &&
            savedEmployee[0].includes(task3.employee.surname)),
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
