import { useMutation, useQueryClient } from 'react-query';
import { getSignInService } from './sign-in.service';
import { ISignInFormValues } from '../sign-in';
import { setToken } from 'core/helpers/get-token';
import { store } from 'store/store.config';
import { setUser } from 'store/store.reducer';
import { useNavigate } from 'react-router-dom';
import { Routes } from 'router/routes';
import { errorToast } from 'core/shared/toast/toast';

export const useSignIn = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (user:ISignInFormValues) => {
      return getSignInService(user)
    },
    onSuccess: (response) => {
      const {user, token, secretKey} = response;
      setToken(token);
      store.dispatch(setUser({ token, user, secretKey }));
      queryClient.invalidateQueries('users');
      navigate(Routes.personal);

    },
    onError: () => {
        errorToast('Istifadəçi adı və ya parol yalnış');
    }
  });
};
