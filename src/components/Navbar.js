import React from 'react'
import { Link } from 'react-router-dom'
import { MdAccountBalance } from "react-icons/md";
import { MdViewList } from "react-icons/md";

const Navbar = ({sideBar, setSideBar}) => {
  return (
    <>
        {sideBar && (
            <div className="sm:hidden absolute w-full h-full bg-zinc-300/50 z-40"
                onClick={() => setSideBar(false)}
            >
                
            </div>
        )}

        <div 
            className="sm:hidden absolute w-60 h-full ease-in duration-300 z-50 bg-white pt-20 flex flex-col items-center"
            style={{top: 0, left: sideBar ? 0 : -240}}
        >
            
            <Link to="/">
                <div className="font-sankr w-40 h-12 my-5 border border-orange-300 mx-2 flex items-center justify-center rounded-lg duration-200 hover:bg-blue-800/80 hover:text-slate-100 ">
                    <MdAccountBalance 
                        size='24'
                        color="rgb(253 186 116)"
                        className='mr-4'
                    />
                    <button
                        className='font-bold '
                    >
                        Home
                    </button>
                </div>
            </Link>
            <Link to="/Portfolio">
            <div className="font-sankr w-40 h-12 my-5 border border-orange-300 mx-2 flex items-center justify-center rounded-lg duration-200 hover:bg-blue-800/80 hover:text-slate-100 ">
                    <MdViewList 
                        size='24'
                        color="rgb(253 186 116)"
                        className='mr-4'
                    />
                    <button
                        className='font-bold '
                    >
                        Portfolio
                    </button>
                </div>
            </Link>
        </div>
    </>
  )
}

export default Navbar
