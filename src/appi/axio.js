import axios from "axios";

const apiInstanc = axios.create({
    baseURL: "https://dummyjson.com/products"
})


export default apiInstanc