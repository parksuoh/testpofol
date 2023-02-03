import { Link } from "react-router-dom"

const AdminMenuBar = () => {
  return (
    <div className='border w-80 min-h-screen bg-sky-700 flex flex-col items-center'>
        <Link to="/Admin">
            <h1 className="font-bold text-3xl my-2 text-slate-50">
                portfolio
            </h1>
        </Link>
        <Link to="/AdminAddPort">
            <h2 className="text-xl my-2 bg-blue-50 hover:bg-zinc-400 hover:text-slate-50 w-52 flex items-center justify-center rounded duration-200">
                add
            </h2>
        </Link>
        <Link to="/AdminDelPort">
            <h2 className="text-xl my-2 bg-blue-50 hover:bg-zinc-400 hover:text-slate-50 w-52 flex items-center justify-center rounded duration-200">
                delete
            </h2>
        </Link>

    </div>
  )
}

export default AdminMenuBar
