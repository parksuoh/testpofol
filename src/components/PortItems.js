import { Link } from "react-router-dom"

const PortItems = ({data}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 place-items-center">
        {data.length > 0 && data.map(itm => (
          <Link key={itm.id} to={`/PortfolioDetail/${itm.id}`}>
            <img
              className='w-80 h-80 hover:scale-110 duration-1000'
              src={`http://localhost:8000/media/titleimgs/${itm.title_img}`}
            />
          </Link>
        ))}

    </div>
  )
}

export default PortItems
