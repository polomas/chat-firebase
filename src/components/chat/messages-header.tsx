import { Button } from "@/components/ui/button"

const MessagesHeader = () => {
  return (
    <header className="border-b p-4 flex items-center gap-x-4">
    <img src="https://randomuser.me/api/portraits/women/15.jpg" className="rounded-md size-20" alt="" />
    <div>
      <p className="font-semibold text-lg text-gray-700">Gabriela</p>
      <p className="text-xs text-gray-500">Active</p>
    </div>
    <div className="ml-auto">
      <Button className="">Close chat</Button>
    </div>
  </header>  )
}

export default MessagesHeader