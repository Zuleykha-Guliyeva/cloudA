import { API } from 'core/configs/api.config';
import axiosInstance from 'core/configs/axios.config';
import { ISignUpFormValues } from '../sign-up';

export const signUpService = async (
  user: ISignUpFormValues
): Promise<{ user: ISignUpFormValues }> => {
  const { email, phone } = user;
  console.log(email, phone);
  const response = await axiosInstance.get(API.users);
  const users: any = response.data;
  console.log(users);
  const authUser = users.find(
    (user: any) => user.email === email || user.phone === phone
  );
  if (authUser) {
    throw new Error('Bu istifadəçi artıq mövcuddur!');
  }
  const res = await axiosInstance.post(API.users, user);
  return res.data;
};
