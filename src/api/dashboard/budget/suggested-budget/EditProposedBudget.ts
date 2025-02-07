import axiosInstance from '../../../axiosInestance';
import { EditProposedBudgetRequest } from './types';

export const EditProposedBudget = async (body: EditProposedBudgetRequest) => {
  try {
    const response = await axiosInstance.put('/Budget/EditProposedBudget', {
      ...body,
    });
    return response.data;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error);
  }
};
