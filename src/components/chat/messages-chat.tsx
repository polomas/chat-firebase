import { useEffect, useRef } from "react"
import Message from "./message"

const MessagesChat = () => {

  const containerRef = useRef<HTMLDivElement>(null)
  console.log(containerRef);

  useEffect(() =>{
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  },[])
  return (
    <main
    ref={containerRef}
     className="bg-indigo-100 p-4 space-y-2 custom-scrollbar">
      <Message
        message="Hello, how are you?"
        time="11:51 AM"
        photoURL="https://randomuser.me/api/portraits/women/64.jpg"
        isCurrentUser={false}
      />
      <Message
        message="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore odio beatae tenetur voluptate perferendis, asperiores harum a temporibus!"
        time="right now"
        photoURL="https://randomuser.me/api/portraits/women/7.jpg"
        isCurrentUser={true}
      />
      <Message
        message="Hello, how are you?"
        time="11:51 AM"
        photoURL="https://randomuser.me/api/portraits/women/64.jpg"
        isCurrentUser={false}
      />
      <Message
        message="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore odio beatae tenetur voluptate perferendis, asperiores harum a temporibus!"
        time="right now"
        photoURL="https://randomuser.me/api/portraits/women/7.jpg"
        isCurrentUser={true}
      />
      <Message
        message="Hello, how are you?"
        time="11:51 AM"
        photoURL="https://randomuser.me/api/portraits/women/64.jpg"
        isCurrentUser={false}
      />
      <Message
        message="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore odio beatae tenetur voluptate perferendis, asperiores harum a temporibus!"
        time="right now"
        photoURL="https://randomuser.me/api/portraits/women/7.jpg"
        isCurrentUser={true}
      />
      <Message
        message="Hello, how are you?"
        time="11:51 AM"
        photoURL="https://randomuser.me/api/portraits/women/64.jpg"
        isCurrentUser={false}
      />
      <Message
        message="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore odio beatae tenetur voluptate perferendis, asperiores harum a temporibus!"
        time="right now"
        photoURL="https://randomuser.me/api/portraits/women/7.jpg"
        isCurrentUser={true}
      />
      <Message
        message="Hello, how are you?"
        time="11:51 AM"
        photoURL="https://randomuser.me/api/portraits/women/64.jpg"
        isCurrentUser={false}
      />
      <Message
        message="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore odio beatae tenetur voluptate perferendis, asperiores harum a temporibus!"
        time="right now"
        photoURL="https://randomuser.me/api/portraits/women/7.jpg"
        isCurrentUser={true}
      />
      <Message
        message="Hello, how are you?"
        time="11:51 AM"
        photoURL="https://randomuser.me/api/portraits/women/64.jpg"
        isCurrentUser={false}
      />
      <Message
        message="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore odio beatae tenetur voluptate perferendis, asperiores harum a temporibus!"
        time="right now"
        photoURL="https://randomuser.me/api/portraits/women/7.jpg"
        isCurrentUser={true}
      />
      <Message
        message="Hello, how are you?"
        time="11:51 AM"
        photoURL="https://randomuser.me/api/portraits/women/64.jpg"
        isCurrentUser={false}
      />
      <Message
        message="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore odio beatae tenetur voluptate perferendis, asperiores harum a temporibus!"
        time="right now"
        photoURL="https://randomuser.me/api/portraits/women/7.jpg"
        isCurrentUser={true}
      />
      <Message
        message="Hello, how are you?"
        time="11:51 AM"
        photoURL="https://randomuser.me/api/portraits/women/64.jpg"
        isCurrentUser={false}
      />
      <Message
        message="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore odio beatae tenetur voluptate perferendis, asperiores harum a temporibus!"
        time="right now"
        photoURL="https://randomuser.me/api/portraits/women/7.jpg"
        isCurrentUser={true}
      />
      <article className="flex gap-x-2 flex-row-reverse">
        <img src="https://randomuser.me/api/portraits/women/7.jpg" className="rounded-full size-10" alt="" />
        <div className="bg-sky-200 rounded-md p-2 max-w-[60%]">
        <p className="text-gray-700">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore odio beatae tenetur voluptate perferendis, asperiores harum a temporibus!</p>
        <p className="text-right text-xs">right now</p>
        </div>
      </article>
    </main>
  )
}

export default MessagesChat