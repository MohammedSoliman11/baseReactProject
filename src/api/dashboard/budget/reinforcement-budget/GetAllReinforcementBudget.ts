import axiosInstance from '../../../axiosInestance';
import { GetAllReinforcementBudgetQueryParams } from './types';

export const GetAllReinforcementBudget = async (params: GetAllReinforcementBudgetQueryParams) => {
  try {
    const response = await axiosInstance.get('/Budget/GetAllReinforcementBudget', {
      params,
    });
    return response.data;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error);
  }
};
