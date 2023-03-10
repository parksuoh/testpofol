
import React, { useState, useRef } from 'react'
import Footer from "../components/Footer"
import Header from "../components/Header"
import Navbar from "../components/Navbar";
import { MdPalette } from "react-icons/md";
import { MdMiscellaneousServices } from "react-icons/md";
import { MdEqualizer } from "react-icons/md";
import { Canvas, useFrame, useLoader, useThree } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


const Cube = () => {
  const gltf = useLoader(GLTFLoader, `${process.env.PUBLIC_URL}/organic/scene.gltf`)
  const meshRef = useRef(null);
  const { viewport } = useThree()

  useFrame(({ mouse }) => {
    if(!meshRef.current){
      return;
    }

    const x = (mouse.x * viewport.width) / 4
    const y = (mouse.y * viewport.height) / 4
    // meshRef.current.position.set(x, y, 0)
    // meshRef.current.rotation.set(-y, x, 0)
    meshRef.current.rotation.x -= y * 0.01;
    meshRef.current.rotation.y += x * 0.015;

  })

  return(
    <>
      <primitive
        ref={meshRef}
        object={gltf.scene}
        scale={0.8}
      />
    </>
  )

}



const Home = () => {
  const [sideBar, setSideBar] = useState(false);

  

  return (
    <div className="relative">
        <Navbar 
          sideBar={sideBar}
          setSideBar={setSideBar} 
        />
        <Header
          sideBar={sideBar}
          setSideBar={setSideBar} 
        />
        <div 
          className='z-0 w-full sm:w-19/20 h-[1090px] sm:h-[970px] absolute top-[609px] sm:top-[580px] left-1/2 translate-x-[-50%] translate-y-[-50%]' 
        >
          <Canvas>
            <ambientLight intensity={0.3} color="#FAEBD7" />
            <pointLight intensity={1.0} position={[10, 10, 10]} />
            <Cube  />
          </Canvas>
        </div>




        <div className="min-h-[936px] flex items-center flex-col justify-center mt-8 z-20">
        
          <img 
            src={`${process.env.PUBLIC_URL}/logo.png`}
            className='w-52 sm:mx-4 my-2 z-20'
          />
          <h1 className="text-xs sm:text-lg font-sankr font-bold z-20">
            ??????????????? ????????????(Fprank X INC)??? IT ?????????/?????? ?????? ??? ????????? ???????????? ?????????
          </h1>
          <h1 className="text-xs sm:text-lg font-sankr font-bold z-20">
            ??????????????????, ??? ???????????? ?????? ??? ?????????, ?????? ??????????????? ????????? ?????? ????????????.
          </h1>
          <div className="flex items-center justify-center flex-col sm:flex-row my-8 z-20">
            <div className="w-40 sm:w-28 h-28 border-2 border-orange-300 rounded-lg flex items-center flex-col justify-center m-4 hover:font-bold bg-blue-900">
              <MdPalette 
                size='24'
                color="rgb(241 245 249)"
                className="hover:mb-4 duration-700"
              />
              <h2 className="text-slate-100">?????????</h2>
            </div>
            <div className="w-40 sm:w-28 h-28 border-2 border-orange-300 rounded-lg flex items-center flex-col justify-center m-4 hover:font-bold bg-blue-900">
              <MdMiscellaneousServices 
                size='24'
                color="rgb(241 245 249)"
                className="hover:mb-4 duration-700"
              />
              <h2 className="text-slate-100">??????</h2>
            </div>
            <div className="w-40 sm:w-28 h-28 border-2 border-orange-300 rounded-lg flex items-center flex-col justify-center m-4 hover:font-bold bg-blue-900">
              <MdEqualizer 
                size='24'
                color="rgb(241 245 249)"
                className="hover:mb-4 duration-700"
              />
              <h2 className="text-slate-100">??????</h2>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col sm:flex-row my-8 z-20">
            <div className='relative group'>
              <img 
                src={`${process.env.PUBLIC_URL}/about1.png`}
                className='w-56 mx-4 hover:scale-110 duration-1000 hover:opacity-50'
              />
              <h1 className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-lg font-sankr font-bold hidden group-hover:block duration-1000'>
                ?????????
              </h1>
            </div>
            <div className='relative group'>
              <img 
                src={`${process.env.PUBLIC_URL}/about2.png`}
                className='w-48 mx-4 hover:scale-110 duration-1000 hover:opacity-50'
              />
              <h1 className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-lg font-sankr font-bold hidden group-hover:block duration-1000'>
                ?????????
              </h1>
            </div>

          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Home
