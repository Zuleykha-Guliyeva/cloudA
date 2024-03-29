import { API } from "core/configs/api.config"
import axiosInstance from "core/configs/axios.config"

export const getProductsService = () => {
    return axiosInstance.get(API.products).then(res => {
        return res.data
    })
}