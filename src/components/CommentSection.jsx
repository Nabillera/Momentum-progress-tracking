import Comment from "./Comment";
import CommentBox from "./CommentBox";
import { getTaskComments } from "../../api";
import { useEffect, useState } from "react";

export default function CommentSection({ taskId, totalComments }) {
  const [openReply, setOpenReply] = useState();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getTaskComments(taskId, setComments);
  }, []);

  const handleOpenReply = (parentId) => {
    setOpenReply((prev) => (prev == parentId ? "" : parentId));
  };

  return (
    <div className="max-h-[975px] w-[741px] rounded-[10px] border border-[#DDD2FF] bg-[#F8F3FEA6] px-[40px] py-[40px]">
      <CommentBox taskId={taskId} parentId={null} />
      <div className="mt-[66px] mb-[40px] flex items-center gap-[10px]">
        <span className="text-[20px] font-medium">კომენტარები</span>
        <span className="flex h-[22px] items-center rounded-full bg-[#8338EC] px-[10px] text-[14px] text-white">
          {totalComments}
        </span>
      </div>
      <div className="flex h-[70%]">
        <ul className="h-[100%] w-[100%] overflow-y-scroll">
          {comments.map((parentComment) => (
            <>
              <Comment
                comment={parentComment}
                key={parentComment.id}
                onOpen={handleOpenReply}
                id={parentComment.id}
                isParent
              />
              <div className="flex flex-col gap-[20px] pt-[20px] pl-[53px]">
                {parentComment.sub_comments.map((subComment) => (
                  <Comment comment={subComment} key={subComment.id} />
                ))}
                {openReply == parentComment.id && (
                  <CommentBox
                    taskId={taskId}
                    parentId={parentComment.id}
                    onOpen={handleOpenReply}
                  />
                )}
              </div>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
}
