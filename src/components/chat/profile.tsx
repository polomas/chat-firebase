import { Button } from "../ui/button"

const Profile = () => {
  return (
    <div className="p-4 text-center border-l">
      <img src="https://randomuser.me/api/portraits/women/45.jpg" alt=""
      className="rounded-md mb-4 mx-auto w-24 h-24"
       />
      <h2 className="text-xl font-bold text-gray-800 mb-4">Profile</h2>
      <p className="font-semibold">Osw Vásq</p>
      <p className="text-gray-500 mb-2">osw@main.com</p>
      <Button className="w-full">Logout</Button>
    </div>
  )
}

export default Profile