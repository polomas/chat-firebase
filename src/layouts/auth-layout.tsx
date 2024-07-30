import Login from '@/components/auth/login'
import Register from '@/components/auth/register'
const AuthLayout = () => {
  return (
    <main className="bg-indigo-100">
        <div className="grid md:grid-cols-2 min-h-screen
            md:place-content-center md:place-items-center max-w-[1200px] mx-auto">
            <Login/>
            <Register/>
        </div>
    </main>
  )
}

export default AuthLayout