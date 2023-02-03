import Footer from "../components/Footer"
import Header from "../components/Header"
import PortItems from "../components/PortItems"
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from "../components/Navbar";
import PortItemsSkel from "../components/PortItemsSkel";


const Portfolio = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [sideBar, setSideBar] = useState(false);

  const getData = async() => {
    setLoading(true)
    try {
      const res = await axios.get('/api/portfolio/port-list/')

      if(res.data.success === false) {
          alert('불러오기 실패')
          setLoading(false)
          return;
      }
      
      setData(res.data.data)
      setLoading(false)

    } catch (e) {
      console.log(e)
      setLoading(false)
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    getData()
  }, [])


  return (
    <div className="bg-slate-50 relative">
        <Navbar 
          sideBar={sideBar}
          setSideBar={setSideBar} 
        />
        <Header
          sideBar={sideBar}
          setSideBar={setSideBar} 
        />
        
        <div className="flex min-h-screen items-center flex-col mb-10">
            <h1
              className="my-10 font-bold text-2xl"
            >
              포트폴리오
            </h1>
            
            
            {!loading ? (
              <PortItems 
                data={data}
              /> 
            ): (
              <PortItemsSkel />
            )}
            
        </div>
        <Footer />
    </div>
  )
}

export default Portfolio
