import { API } from "core/configs/api.config"
import axiosInstance from "core/configs/axios.config"

export const getNewsSingleService = (news_id) => {
    return axiosInstance.get(API.news + `/${news_id}`).then((res)=>{
        return res.data
    })
}
