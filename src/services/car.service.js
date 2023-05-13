import axios from "axios"

export const CarService = {
    async getAll() {
        const response = await axios.get('https://fakestoreapi.com/products')
        return response.data
    },

    async getById(id) {
        const response = await axios.get(`https://fakestoreapi.com/products?id=${id}`)
        return response.data[0]
    },

    async create(data) {
        return axios.post('https://fakestoreapi.com/products', data)
    }
}