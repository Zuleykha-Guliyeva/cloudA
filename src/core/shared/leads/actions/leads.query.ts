import { useQuery } from 'react-query';
import { getLeadsService } from './leads.service';
import LeadsModel from '../models/leads.model';

export const useLeads = () => {
  return useQuery<LeadsModel, Error>('leads', () => {
    return getLeadsService();
  });
};
