import TaskStatusColumn from "./TaskStatusColumn";

export default function TaskDisplay({ statuses, tasks }) {
  const columnColors = ["#f7bc30", "#fb5607", "#ff006e", "#3a86ff"];

  return (
    <div className="flex justify-center gap-x-[52px]">
      {statuses.map((status, i) => {
        const color = columnColors[i];
        return (
          <TaskStatusColumn
            key={i}
            color={color}
            status={status.name}
            tasks={tasks}
          />
        );
      })}
    </div>
  );
}
