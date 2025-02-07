import axiosInstance from '../../../axiosInestance';
import { AddProposedBudgetRequest } from './types';

export const AddNewProposedBudget = async (body: AddProposedBudgetRequest) => {
  try {
    const response = await axiosInstance.post('/Budget/AddProposedBudget', {
      ...body
    });
    return response.data;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error);
  }
};
