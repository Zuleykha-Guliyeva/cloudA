import { useQuery } from 'react-query';
import { getNewsService } from './news.service';
import { API } from 'core/configs/api.config';

export const useNews = () => {
  return useQuery(API.news, () => {
    return getNewsService();
  });
};
