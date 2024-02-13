import { API } from "core/configs/api.config"
import axiosInstance from "core/configs/axios.config"

export const getLeadsService = () => {
    return axiosInstance.get(API.leads).then(res => {
        return res.data.record;
    })
}