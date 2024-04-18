import { useMutation, useQueryClient } from 'react-query';
import { newPasswordService } from './new-password.service';
import { useNavigate } from 'react-router-dom';
import { Routes } from 'router/routes';
import { errorToast, successToast } from 'core/shared/toast/toast';

export const useNewPassword = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async ({
      userId,
      newPass,
    }: {
      userId: number;
      newPass: string;
    }) => {
      const response = await newPasswordService(userId, newPass);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries('users');
      successToast;
      navigate(`${Routes.personal}`);
    },
    onError: (error: Error) => {
      errorToast(error.message);
    },
  });
};
