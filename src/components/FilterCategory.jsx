import { createPortal } from "react-dom";
import Arrow from "../assets/Arrow.svg";
import ArrowActive from "../assets/ArrowActive.svg";
import FilterList from "./FilterList";

export default function FilterCategory({
  children,
  onOpen,
  activeCategory,
  list,
  name,
  onSubmit,
}) {
  const isActive = activeCategory == children;
  const activeClass = isActive ? "text-[#8338EC]" : "";

  const handleOpenList = () => {
    if (isActive) {
      onOpen(null);
    } else {
      onOpen(children);
    }
  };

  return (
    <>
      <div
        className={`flex h-[44px] w-[199px] cursor-pointer items-center gap-x-[8px] pl-[20px] ${activeClass}`}
        onClick={handleOpenList}
      >
        <span>{children}</span>
        <img
          src={isActive ? ArrowActive : Arrow}
          className={isActive ? "rotate-x-180" : ""}
        />
      </div>
      {isActive &&
        createPortal(
          <FilterList
            category={name}
            list={list}
            onSubmit={onSubmit}
            onOpen={handleOpenList}
          />,
          document.getElementById("filter-section"),
        )}
    </>
  );
}
