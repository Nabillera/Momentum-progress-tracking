import FilterSection from "../components/FilterSection";
import TaskDisplay from "../components/TaskDisplay";

export default function HomePage({data}) {
  return (
    <div>
      <h1 className="pt-[140px] pb-[52px] pl-[118px] text-[34px] font-semibold">
        დავალებების გვერდი
      </h1>
      <FilterSection/>
      <TaskDisplay statuses={data.statuses} tasks={data.tasks}/>
    </div>
  );
}
