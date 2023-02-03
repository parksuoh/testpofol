
const Footer = () => {
  return (
    <div className="w-full min-h-[350px] bg-black">
      <div className="w-full min-h-[150px] border-b border-white flex justify-center items-center sm:flex-row flex-col">
        <img 
          src={`${process.env.PUBLIC_URL}/82096c37a7211.png`}
          className='w-28 sm:w-52 sm:mx-4 my-2 sm:my-0'
        />
        <img 
          src={`${process.env.PUBLIC_URL}/150cef9d12b97.png`}
          className='w-28 sm:w-52 sm:mx-4 my-2 sm:my-0'
        />
        <img 
          src={`${process.env.PUBLIC_URL}/a366d7eef7a28.png`}
          className='w-28 sm:w-36 sm:mx-4 my-2 sm:my-0'
        />
        <img 
          src={`${process.env.PUBLIC_URL}/74396d6eeba07.png`}
          className='w-28 sm:w-60 sm:mx-4 my-2 sm:my-0'
        />
        <img 
          src={`${process.env.PUBLIC_URL}/87dcb28db239e.png`}
          className='w-28 sm:w-32 sm:mx-4 my-2 sm:my-0'
        />
      </div>
      <div className="w-full h-[200px] flex justify-center items-center">
        <img 
            src={`${process.env.PUBLIC_URL}/FPrankX_Y.png`}
            className='w-32 sm:w-40'
        />
        <div className="ml-4">
          <h1 className="text-white text-lg font-sankr">
            프랭크엑스 주식회사(Fprank X INC)
          </h1>
          <div className="flex sm:flex-row flex-col">
            <p className="text-slate-300 text-xs ml-2 sm:ml-0 font-sankr">대표자</p>
            <p className="text-white text-xs ml-2 font-sankr">이진욱</p>
            <p className="text-slate-300 text-xs ml-2 font-sankr">주소</p>
            <p className="text-white text-xs ml-2 font-sankr">서울특별시 마포구 동교로 17안길 10, 2층 (서교동,옥산빌딩)</p>
            <p className="text-slate-300 text-xs ml-2 font-sankr">사업자등록번호</p>
            <p className="text-white text-xs ml-2 font-sankr">353-87-02261</p>
            <p className="text-slate-300 text-xs ml-2 font-sankr">개인정보관리책임자</p>
            <p className="text-white text-xs ml-2 font-sankr">이진욱 </p>
            <p className="text-slate-300 text-xs ml-2 font-sankr">통신판매신고번호</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
