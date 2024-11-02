import Image from "next/image";

import star from "@/assets/icons/star.png";
import { CommentsType } from "@/utils/types";
interface CommentProps {
  comment: CommentsType;
}
const Comment = ({ comment }: CommentProps) => {
  return (
    <div className="shadow-lg w-full mb-2 p-4">
      <div className="flex justify-between ">
        <div className="flex gap-2">
          <Image src={comment.userImage} alt="comment user" />
          <div className="flex flex-col">
            <p className="text-sm leading-6">{comment.userName}</p>
            <p className="text-sm leading-6 text-text_gray">{comment.date}</p>
          </div>
        </div>
        <div className="flex gap-1">
          <Image src={star} alt="star" className="h-5 w-5" />
          <Image src={star} alt="star" className="h-5 w-5" />
          <Image src={star} alt="star" className="h-5 w-5" />
          <Image src={star} alt="star" className="h-5 w-5" />
          <Image src={star} alt="star" className="h-5 w-5" />
        </div>
      </div>
      <p className="mt-2">{comment.text}</p>
    </div>
  );
};

export default Comment;
