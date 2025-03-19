export default function DepartmentIcon({ departmentId, isTaskCard }) {
  const departmentColors = ["#FF66A8", "#FD9A6A", "#FFD86D", "#89B6FF"];
  const colorIndex = Math.floor(Math.random() * 4);

  const shortenDepartment = () => {
    let shortenedDepartment;
    if (departmentId == 1) {
      shortenedDepartment = "ადმინისტრაცია";
    } else if (departmentId == 2) {
      shortenedDepartment = "HR";
    } else if (departmentId == 3) {
      shortenedDepartment = "ფინანსები";
    } else if (departmentId == 4) {
      shortenedDepartment = "მარკეტინგი";
    } else if (departmentId == 5) {
      shortenedDepartment = "ლოჯისტიკა";
    } else if (departmentId == 6) {
      shortenedDepartment = "ინფ. ტექ.";
    } else {
      shortenedDepartment = "მედია";
    }
    return shortenedDepartment;
  };

  return (
    <div
      className={`${isTaskCard ? "h-[24px] px-[9px] text-[12px]" : "h-[29px] px-[10px] text-[16px]"} flex items-center justify-center rounded-[15px] text-white`}
      style={{ backgroundColor: departmentColors[colorIndex] }}
    >
      {shortenDepartment()}
    </div>
  );
}
