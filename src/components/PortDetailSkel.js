import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const PortDetailSkel = () => {
  return (
    <div className="flex flex-col items-center">
        <div className='h-12'></div>
        <Skeleton height={50} width={500} />
        <div className='h-12'></div>
        <Skeleton height={1000} width={500} />
        <div className='h-12'></div>
    </div>
  )
}

export default PortDetailSkel
