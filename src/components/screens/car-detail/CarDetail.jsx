import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { CarService } from "../../../services/car.service"
import CarItem from "../home/car-item/CarItem"
import { withAuth } from "../../withAuth"

const CarDetail = () => {
  const { id } = useParams()
  const [car, setCar] = useState({})

  useEffect(() => {
    if (!id) return

    const fetchData = async () => {
      const data = await CarService.getById(id)

      setCar(data)
    }

    fetchData()
  }, [id])

  if (!car?.title) return <p>loading...</p>

  return (
    <div>
      <Link to='/'>back</Link>
      <CarItem car={car} />
    </div>
  )
}

export default withAuth(CarDetail)