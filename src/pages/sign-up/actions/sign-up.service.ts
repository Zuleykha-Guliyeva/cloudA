import { API } from 'core/configs/api.config';
import axiosInstance from 'core/configs/axios.config';
import { ISignUpMutateValues } from '../sign-up';

export const signUpService = async (
  user: ISignUpMutateValues
): Promise<{ user: ISignUpMutateValues }> => {
  const { email, phone } = user;
  const response = await axiosInstance.get(API.users);
  const users: any = response.data;
  const authUser = users.find(
    (user: any) => user.email === email || user.phone === phone
  );
  if (authUser) {
    throw new Error('Bu istifadəçi artıq mövcuddur!');
  }
  const res = await axiosInstance.post(API.users, user);
  return res.data;
};
