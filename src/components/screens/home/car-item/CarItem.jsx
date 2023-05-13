/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import styles from '../Home.module.css'

function CarItem({ car }) {
    return (
        <div key={car.id} className={styles.item}>
            <div className={styles.item} key={car.id}>
                <div
                    className={styles.image}
                    style={{
                        backgroundImage: `url(${car.image})`
                    }}
                />

                <div className={styles.info}>
                    <h2>{car.title}</h2>

                    <p>{new Intl.NumberFormat('ru-RU', {
                        style: 'currency',
                        currency: 'USD'
                    }).format(car.price)}
                    </p>

                    <Link
                        className='btn'
                        to={`/car/${car.id}`}>
                        Read more
                    </Link>

                    <div>Line</div>
                </div>
            </div>
        </div>
    )
}

export default CarItem