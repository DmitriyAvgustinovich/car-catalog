import axios from "axios";

export const CarService = {
    async getAll() {
        const response = await axios.get("https://fakestoreapi.com/products");
        return response.data;
    },

    async getById(id) {
        const response = await axios.get(
            `https://fakestoreapi.com/products?id=${id}`
        );
        return response.data[0];
    },

    async create(data) {
        const hardcodeData = {
            ...data,
            description: "This is an example car",
            category: "Cars",
        };
        return axios.post("https://fakestoreapi.com/products", hardcodeData);
    }
};
