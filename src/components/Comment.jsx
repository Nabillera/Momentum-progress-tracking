import Reply from "../assets/Reply.svg";

export default function Comment({ comment, isParent, onOpen, id }) {
  return (
    <div className="flex flex-col">
      <div className="flex gap-[12px]">
        <img
          src={comment.author_avatar}
          className="h-[38px] w-[38px] rounded-full"
        />

        <div className="flex flex-col">
          <span className="text-[18px] font-medium text-[#212529]">
            {comment.author_nickname}
          </span>
          <p className="text-[#343A40]">{comment.text}</p>
          {isParent && (
            <div
              className="flex cursor-pointer gap-[6px] py-[6px]"
              onClick={() => onOpen(id)}
            >
              <img src={Reply} />
              <span className="cursor-pointer text-[12px] text-[#8338EC]">
                უპასუხე
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
