import axiosInstance from '../../../axiosInestance';
import { SuggestedBudgetQueryParams } from './types';

export const getAllProposedBudget = async (params: SuggestedBudgetQueryParams) => {
  try {
    const response = await axiosInstance.get('/Budget/GetAllProposedBudget', {
      params,
    });
    return response.data;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error);
  }
};
