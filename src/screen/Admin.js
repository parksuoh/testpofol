import AdminMenuBar from '../components/AdminMenuBar'

const Admin = () => {
  return (
    <div className='bg-white w-full min-h-screen flex'>
        <AdminMenuBar />
        <div className="w-full flex flex-col items-center ">
            <div className="pl-3 w-full h-20 flex items-center border-b border-gray-200 ">
              <h1 className='font-bold'>
                홈
              </h1> 
            </div>
        </div>
    </div>
  )
}

export default Admin
