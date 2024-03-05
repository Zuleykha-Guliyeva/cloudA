import { useQuery } from 'react-query';
import { getCertificatesService, getClientsService, getPartnersService } from './home.service';

export const useClients = () => {
  return useQuery('clients', () => {
    return getClientsService();
  });
};

export const usePartners = () => {
  return useQuery('partners', () => {
    return getPartnersService();
  })
};

export const useCertificates = () => {
  return useQuery('certificates', () => {
    return getCertificatesService();
  });
}
