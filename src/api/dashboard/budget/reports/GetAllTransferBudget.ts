import axiosInstance from '../../../axiosInestance';
import { GetAllTransferBudgetQueryParams } from './types';

export const GetAllTransferBudget = async (params: GetAllTransferBudgetQueryParams) => {
  try {
    const response = await axiosInstance.get('/Budget/GetAllTransferBudget', {
      params,
    });
    return response.data;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error);
  }
};
