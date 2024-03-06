import { API } from "core/configs/api.config"
import axiosInstance from "core/configs/axios.config"

export const getClientsService = () => {
    return axiosInstance.get(API.clients).then(res => {
        return res.data;
    })
};
export const getPartnersService = () => {
  return axiosInstance.get(API.partners).then((res) => {
    return res.data;
  });
};
export const getCertificatesService = () => {
  return axiosInstance.get(API.certificates).then((res) => {
    return res.data;
  })
};
