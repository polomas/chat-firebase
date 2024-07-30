import { useEffect, useState } from "react"
import FriendItem from "./friend-item"
import FriendSearch from "./friend-search"

interface Friend {
  uid: string
  displayName: string
  photoURL: string
  lastMessage: string
}

const Friends = () => {

  const [friends, setFriends] = useState<Friend[]>([])


  useEffect(() => {
    const getFriends = async () => {
      const res = await fetch("https://randomuser.me/api/?results=15&nat=mx")
      const {results}  = await res.json()

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const data = results.map((user: any) => ({
          uid: user.login.uuid,
          displayName: user.name.first,
          photoURL: user.picture.large,
          lastMessage: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, commodi." + user.name.first,
      }))
      setFriends(data)
    }

    getFriends()
    
    }, [])

  return (
    <div className="grid grid-rows-[auto_1fr] h-screen border-r">
      <section className="border-b p-4">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Chats</h2>
      <div>
        <FriendSearch />
      </div>
      </section>
      <section className="custom-scrollbar cursor-pointer">
      {
        friends.map((friend) => (
          <FriendItem 
          key={friend.uid}
          {...friend}

          />

      ))}
      </section>
    </div>
  )
}

export default Friends