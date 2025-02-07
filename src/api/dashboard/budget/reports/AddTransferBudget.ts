import axiosInstance from '../../../axiosInestance';
import { TransferBudgetDataRequest } from './types';

export const AddNewTransferBudget = async (body: TransferBudgetDataRequest) => {
  try {
    const response = await axiosInstance.post('/Budget/AddTransferBudget', 
      {...body},
    );
    return response.data;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error);
  }
};
