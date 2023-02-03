import React, { useEffect, useState } from 'react'
import AdminMenuBar from '../components/AdminMenuBar'
import axios from 'axios';

const AdminDelPort = () => {
  const [data, setData] = useState([])

  const getData = async() => {
    try {
      const res = await axios.get('/api/portfolio/del-port-list/')

      if(res.data.success === false) {
          alert('불러오기 실패')
          return;
      }
      setData(res.data.data)
  
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getData()
  }, [])




  return (
    <div className='bg-white w-full min-h-screen flex'>
        <AdminMenuBar />
        <div className="w-full flex flex-col items-center ">
            <div className="pl-3 w-full h-20 flex items-center border-b border-gray-200 ">
              <h1 className='font-bold'>
                포트폴리오 삭제
              </h1> 
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 place-items-center">
              {data.length > 0 && data.map(itm => (
                <PortItem 
                  key={itm.id}
                  id={itm.id}
                  title={itm.title}
                  titleImg={itm.title_img}
                  getData={getData}
                />
              ))}
            </div>






        </div>

    </div>
  )
}



const PortItem = ({id, title, titleImg, getData}) => {
  const [check, setCheck] = useState(false)

  const validCheck = () => {
    setCheck(true)
  }

  const delItm = async() => {
    try {
      const res = await axios.delete(`/api/portfolio/del-port-itm/${id}`)

      if(res.data.success === false) {
          alert('실패')
          return;
      }
      getData()
      setCheck(false)
  
    } catch (e) {
      console.log(e)
    }
  }

  return(
  <>
    <div className='flex flex-col items-center  my-2 border w-48 border-gray-200'>
        <img
          className='w-40 h-40'
          src={`http://localhost:8000/media/titleimgs/${titleImg}`}
        />
        <h2>{title}</h2>
        <button
          onClick={validCheck}
          className="text-xl bg-blue-50 hover:bg-zinc-400 hover:text-slate-50 w-40 h-8 flex items-center justify-center rounded duration-200"
        >
          삭제하기
        </button>
    </div>
    {check && (
      <CheckModal 
        setCheck={setCheck}
        delItm={delItm}
      />
    )}
  </>
  )
}

const CheckModal = ({setCheck, delItm}) => {

  return(
    <div className='box-border fixed inset-0 z-999 overflow-auto outline-0 bg-slate-500/50'>
      <div className='w-[700px] h-60 z-1000 bg-white rounded-2xl mx-auto mt-48 flex flex-col items-center justify-center'>
        <h1
          className='mb-10 font-bold text-2xl'
        >
          정말 삭제 하시겠습니까?
        </h1>
        <div className='flex '>
          <button
            className="mx-4 text-xl bg-blue-50 hover:bg-zinc-400 hover:text-slate-50 w-40 h-8 flex items-center justify-center rounded duration-200"
            onClick={() => delItm()}
          >
            네
          </button>
          <button
            className="mx-4 text-xl bg-blue-50 hover:bg-zinc-400 hover:text-slate-50 w-40 h-8 flex items-center justify-center rounded duration-200"
            onClick={() => setCheck(false)}
          >
            아니요
          </button>
        </div>
      </div>
    </div>
  )
}

export default AdminDelPort
