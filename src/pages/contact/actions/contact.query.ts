import { useQuery } from 'react-query';
import { getContactService } from './contact.service';

export const useContact = () => {
  return useQuery('contact', () => {
    return getContactService();
  });
};
