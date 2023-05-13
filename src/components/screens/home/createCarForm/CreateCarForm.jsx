/* eslint-disable react/prop-types */
import { useMutation, useQueryClient } from '@tanstack/react-query'
import styles from './CreateCarForm.module.css'
import { useForm } from 'react-hook-form'
import { CarService } from '../../../../services/car.service'

const CreateCarForm = () => {
    const { register, reset, handleSubmit } = useForm({
        mode: 'onChange'
    })

    const queryClient = useQueryClient()

    const { mutate } = useMutation(['create car'], data => CarService.create(data), {
        onSuccess: () => {
            queryClient.invalidateQueries('cars')
            reset()
        }
    })

    const createCar = data => {
        console.log(data)
        mutate(data)
    }

    return <form className={styles.form} onSubmit={handleSubmit(createCar)}>
        <input
            {...register('title', { required: true })}
            placeholder='Name'
        />
        <input
            {...register('price', { required: true })}
            placeholder='Price'
        />
        <input
            {...register('image', { required: true })}
            placeholder='Image'
        />
        <button>Create</button>
    </form>
}

export default CreateCarForm