import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer"
import Header from "../components/Header"
import axios from 'axios';
import Navbar from "../components/Navbar";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
import PortDetailSkel from "../components/PortDetailSkel";

const PortfolioDetail = () => {
  let { id } = useParams();
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  const [sideBar, setSideBar] = useState(false);

  const getData = async() => {
    setLoading(true)
    try {
      const res = await axios.get(`/api/portfolio/port-itm/${id}`)

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
        <div className="flex min-h-screen items-center flex-col">

          <div className="flex min-h-screen items-center flex-col">
            {(data && !loading) ? (
              <>
                <h1
                  className="my-10 font-bold text-2xl" 
                >
                  {data.title}
                </h1>
                <ReactQuill 
                  theme="bubble" 
                  readOnly
                  value={data.content} 
                  className="h-auto lg:min-w-[1000px] "
                />
              </>
            ): (
              <PortDetailSkel />
            )}
          </div>
        </div>
        
        <Footer />
    </div>
  )
}

export default PortfolioDetail
