import Login from "@/components/auth/login"
import Register from "@/components/auth/register"

const RootLayout = () => {
    const user = false
  return (
    <div className="">
        {user ? <h1>Welcome back!</h1> : <div className="grid grid-cols-2 h-screen bg-cyan-200 place-content-center">
        <Login/>
        <Register/>
        </div>}
    </div>
  )
}

export default RootLayout