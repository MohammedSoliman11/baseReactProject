import axiosInstance from '../../../axiosInestance';
import { AnnualBudgetDataRequest } from './types';

export const AddNewAnnualBudget = async (body: AnnualBudgetDataRequest) => {
  try {
    const response = await axiosInstance.post('/Budget/AddAnnualBudget', 
      {...body},
    );
    return response.data;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error);
  }
};
