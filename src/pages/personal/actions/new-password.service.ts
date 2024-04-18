import { API } from 'core/configs/api.config';
import axiosInstance from 'core/configs/axios.config';

export const newPasswordService = async (
  userId: number,
  newPassword: string
) => {
    const response = await axiosInstance.patch(`${API.users}/${userId}`, {
      password: newPassword,
    });
    return response.data;
};
