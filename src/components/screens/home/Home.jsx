/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from 'react'
import CarItem from './car-item/CarItem'
import CreateCarForm from './createCarForm/createCarForm'
import { CarService } from '../../../services/car.service'
import { AuthContext } from '../../../providers/AuthProvider'
import { useQuery } from '@tanstack/react-query'

function Home() {
    const { data, isLoading } = useQuery(['cars'], () => CarService.getAll())
    const { user, setUser } = useContext(AuthContext)

    if (isLoading) return <p>loading...</p>

    return (
        <div>
            <h1>Cars Catalog</h1>

            {user ? (
                <>
                    <h2>
                        Welcome, {user.name}!
                    </h2>
                    <button onClick={() => setUser(null)}>Logout</button>
                </>
            ) : (
                <button
                    onClick={() =>
                        setUser({
                            name: 'Dmitriy'
                        })
                    }
                >
                    Login
                </button>
            )}

            <CreateCarForm />

            <div>
                {data.length ? (
                    data.map(car => <CarItem key={car.id}
                        car={car} />)
                ) : (
                    <p>Empty</p>
                )}
            </div>
        </div>
    )
}

export default Home