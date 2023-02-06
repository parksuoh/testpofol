import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const PortItemsSkel = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 place-items-center">
        <Skeleton height={250} width={250} />
        <Skeleton height={250} width={250} />
        <Skeleton height={250} width={250} />
        <Skeleton height={250} width={250} />
        <Skeleton height={250} width={250} />
        <Skeleton height={250} width={250} />

    </div>
  )
}

export default PortItemsSkel
