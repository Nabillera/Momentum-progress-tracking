import TaskStatusColumn from "./TaskStatusColumn";

export default function TaskDisplay({ statuses, tasks }) {
  return (
    <div className="flex justify-center gap-x-[52px]">
      {statuses.map((status) => {
        return <TaskStatusColumn status={status.name} tasks={tasks} />;
      })}
    </div>
  );
}
