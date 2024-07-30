import { cn } from "@/lib/utils"

interface MessageProps {
    message: string;
    time: string;
    photoURL: string;
    isCurrentUser: boolean;
}
const Message = ({
    message,
    time,
    photoURL,
    isCurrentUser,
}: MessageProps) => {
  return (
    <article className={cn("flex gap-x-2", {
        "flex-row-reverse": isCurrentUser,
        "flex-row": !isCurrentUser
      })}>
        <img src={photoURL} className="rounded-full size-10" alt="" />
        <div className={
          cn("rounded-md p-2 max-w-[60%]", {
            "bg-sky-200": isCurrentUser,
            "bg-white": !isCurrentUser
          })
        }>
        <p className="text-gray-700">{message}</p>
        <p className="text-right text-xs">{time}</p>
        </div>
      </article>
  )
}

export default Message