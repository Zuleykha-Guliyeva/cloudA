import { useMutation, useQueryClient } from 'react-query';
import { signUpService } from './sign-up.service';
import { ISignUpMutateValues } from '../sign-up';
import { errorToast, successToast } from 'core/shared/toast/toast';
import { Routes } from 'router/routes';
import { useNavigate } from 'react-router-dom';

export const useSignUp = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (user: ISignUpMutateValues) => {
      return signUpService(user);
    },
    onSuccess: () => {
      queryClient.invalidateQueries('users');
      successToast;
      navigate(`${Routes.addcard}`);
    },
    onError: (error: Error) => {
      errorToast(error.message);
      console.log('gelir bura');
      navigate(`${Routes.signup}`);
    },
  });
};
