import { useRef } from "react";
import { postTaskComment } from "../../api";

export default function CommentBox({ taskId, parentId, onOpen }) {
  const userComment = useRef();
  const handlePostComment = () => {
    const comment = userComment.current.value;
    if (
      (comment.length > 0 && comment.replace(/\s/g, "").length == 0) ||
      comment.length == 0
    ) {
      alert("Cannot add an empty comment !");
    }
    postTaskComment(taskId, parentId, comment);
    userComment.current.value = "";
    onOpen("");
  };

  return (
    <div className="relative">
      <textarea
        ref={userComment}
        placeholder="დაწერე კომენტარი"
        className="box-border w-[100%] resize-none rounded-[10px] border-b-[60px] border-white bg-white px-[20px] pt-[18px] focus:outline-none"
      />
      <button
        className="absolute right-[20px] bottom-[20px] cursor-pointer rounded-[20px] bg-[#8338EC] px-[20px] py-[8px] text-white transition hover:bg-[#B588F4]"
        onClick={handlePostComment}
      >
        დააკომენტარე
      </button>
    </div>
  );
}
