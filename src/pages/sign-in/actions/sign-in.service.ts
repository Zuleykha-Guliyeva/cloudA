import { API } from 'core/configs/api.config';
import axiosInstance from 'core/configs/axios.config';
import JWT from 'expo-jwt';

export const getSignInService = (credentials) => {
  const { email, password } = credentials;
  return axiosInstance.get(API.users).then((res) => {
    const users: any[] = res.data;
    const authUser = users.find(
      (user: any) =>
        (user.email === email || user.username === email) &&
        user.password === password
    );
    if (authUser) {
      const secretKey: string = 'your_secret_key';
      const token = JWT.encode({ authUser }, secretKey);
      return Promise.resolve({ token, user: authUser, secretKey });
    } else {
      throw new Error('Istifadəçi adı və ya parol yalnışdır!');
    }
  });
};
