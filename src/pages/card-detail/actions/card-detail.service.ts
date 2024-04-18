import { API } from 'core/configs/api.config';
import axiosInstance from 'core/configs/axios.config';
import { ICardDetail } from '../card-detail';

export const cardDetailService = async (
  cardDetails: ICardDetail
): Promise<{ cardDetails: ICardDetail }> => {
  const { cardNo } = cardDetails;
  const response = await axiosInstance.get(API.cards);
  const cards: any = response.data;
  const oldCard = cards.find((card) => {
    card.cardNo === cardNo;
  });
  if (oldCard) {
    throw new Error('Bu kard artıq qeydiyyatdan keçib!');
  }
  const res = await axiosInstance.post(API.cards, cardDetails);
  return res.data;
};
