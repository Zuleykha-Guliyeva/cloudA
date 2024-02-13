import { useQuery } from 'react-query';
import { getAboutService } from './about.service';

export const useAbout = () => {
  return useQuery('products', () => {
    return getAboutService();
  });
};
