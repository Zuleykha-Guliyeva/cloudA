import { API } from "core/configs/api.config"
import axiosInstance from "core/configs/axios.config"

export const getNewsService = () => {
    return axiosInstance.get(API.news).then((res) => {
        return res.data;
    })
}