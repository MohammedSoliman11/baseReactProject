import axiosInstance from '../../../axiosInestance';
import { AnnualBudgetDataRequest } from './types';

export const EditAnnualBudget = async (body: AnnualBudgetDataRequest) => {
  try {
    const response = await axiosInstance.put('/Budget/EditAnnualBudget', {
      ...body
    });
    return response.data;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error);
  }
};
