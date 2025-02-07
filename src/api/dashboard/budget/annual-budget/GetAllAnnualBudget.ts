import axiosInstance from '../../../axiosInestance';
import { GetAllAnnualBudgetQueryParams } from './types';

export const GetAllAnnualBudget = async (params: GetAllAnnualBudgetQueryParams) => {
  try {
    const response = await axiosInstance.get('/Budget/GetAllAnnualBudget', {
      params,
    });
    return response.data;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error);
  }
};
