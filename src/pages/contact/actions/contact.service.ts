import { API } from 'core/configs/api.config';
import axiosInstance from 'core/configs/axios.config';

export const getContactService = () => {
  return axiosInstance(API.contact).then((res) => {
    return res.data.record;
  });
};
