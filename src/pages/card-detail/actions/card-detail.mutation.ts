import { useMutation, useQueryClient } from 'react-query';
import { cardDetailService } from './card-detail.service';
import { ICardDetail } from '../card-detail';
import { errorToast, successToast } from 'core/shared/toast/toast';
import { useNavigate } from 'react-router-dom';
import { Routes } from 'router/routes';

export const useCardDetail = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (cardDetails: ICardDetail) => {
      return cardDetailService(cardDetails);
    },
    onSuccess: () => {
      queryClient.invalidateQueries('cards');
      successToast;
      navigate(`${Routes.signin}`);
    },
    onError: (error: Error) => {
      errorToast(error.message);
    },
  });
};
