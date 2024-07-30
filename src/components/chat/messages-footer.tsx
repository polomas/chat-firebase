import { BsEmojiSmile } from "react-icons/bs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react'

const MessagesFooter = () => {

    const [message, setMessage] = useState("")

    const [showEmojiPiker, setShowEmojiPicker] = useState(false)

    const onEmojiClick = (emojiData: EmojiClickData) => {
        setMessage((prev) => prev + emojiData.emoji)
    }

    const handleSendMessage = async () => {
        if (!message) return
        console.log(message);
        setMessage("")
        setShowEmojiPicker(false)
    }

  return (
    <footer className="border-t p-4 flex gap-x-2">
        <div className="relative">
            <Button onClick={() => setShowEmojiPicker(prev => !prev)}>
            <BsEmojiSmile className="text-xl"/>
            </Button>
            <div className="absolute bottom-12">
              <EmojiPicker open={showEmojiPiker} onEmojiClick={onEmojiClick} />
            </div>
        </div>
        
        <Input placeholder="Type a message"
            value={message} onChange={(e) => setMessage(e.target.value)}
        />
        <Button onClick={handleSendMessage}>Send</Button>
    </footer>
)
}

export default MessagesFooter

// Parse a list blog posts a .cvs file