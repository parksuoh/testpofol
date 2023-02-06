import { Link } from "react-router-dom"

const PortItems = ({data}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 place-items-center">
        {data.length > 0 && data.map(itm => (
        <div className="sm:relative group">
          <Link key={itm.id} to={`/PortfolioDetail/${itm.id}`}>
            <img
              className='w-80 h-80 sm:group-hover:scale-110 duration-1000 sm:group-hover:opacity-10'
              src={`http://localhost:8000/media/titleimgs/${itm.title_img}`}
            />
          <h1 className="block sm:hidden group-hover:block sm:absolute sm:top-1/2 sm:left-1/2 sm:translate-x-[-50%] sm:translate-y-[-50%] text-lg font-sankr font-bold">
            {itm.title}
          </h1>
          </Link>
        </div>
        ))}

    </div>
  )
}

export default PortItems
