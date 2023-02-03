import { Link } from "react-router-dom"
import { MdDehaze } from "react-icons/md";

const Header = ({sideBar, setSideBar}) => {
    
    

  return (
    <div className="w-full h-16 sm:h-24 bg-white flex justify-between items-center px-5 sm:px-20 border-b border-slate-300">
        <div 
            className="sm:hidden left-2 cursor-pointer" 
            onClick={() => setSideBar(!sideBar)}
        >
            <MdDehaze size="24" />
        </div>
        <Link to="/">
            <img 
                src={`${process.env.PUBLIC_URL}/FPrankX_Y.png`}
                className='w-32 sm:w-40'
            />
        </Link>
        <div className="hidden sm:flex">
            <Link to="/">
                <button className="w-40 h-10 font-sankr mx-4 hover:border-b-4 hover:border-blue-800 duration-700">
                    Home
                </button>
            </Link>
            <Link to="/Portfolio">
                <button className="w-40 h-10 font-sankr mx-4 hover:border-b-4 hover:border-blue-800 duration-700">
                    Portfolio
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Header
