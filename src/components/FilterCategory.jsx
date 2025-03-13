import Arrow from "../assets/Arrow.svg";
import ArrowActive from "../assets/ArrowActive.svg";

export default function FilterCategory({ children }) {
  return (
    <>
      <div className="flex h-[44px] w-[199px] cursor-pointer items-center gap-x-[8px] pl-[20px]">
        <span>{children}</span>
        <img src={Arrow} />
      </div>
    </>
  );
}
