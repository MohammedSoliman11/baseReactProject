import axiosInstance from '../../../axiosInestance';
import { TransferBudgetDataRequest } from './types';

export const EditTransferBudget = async (body: TransferBudgetDataRequest) => {
  try {
    const response = await axiosInstance.put('/Budget/EditPTransferBudget', {
      ...body
    });
    return response.data;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error);
  }
};
