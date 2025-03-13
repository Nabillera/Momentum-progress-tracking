export default function TaskStatusColumn({ status }) {
  return (
    <div className="flex w-[381px] flex-col gap-y-[30px] pt-[79px]">
      <h2 className="w-[100%] rounded-[10px] py-[15px] text-center text-[20px] font-medium text-white">
        {status}
      </h2>
      <div className="flex w-[100%] flex-col gap-y-[30px]">Task List</div>
    </div>
  );
}
