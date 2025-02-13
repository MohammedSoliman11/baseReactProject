import axiosInstance from '../../../axiosInestance';
import { ReinforcementBudgetDataRequest } from './types';

export const AddNewReinforcementBudget = async (body: ReinforcementBudgetDataRequest ) => {
  try {
    const response = await axiosInstance.post('/Budget/AddReinforcementBudget', 
      {...body},
    );
    return response.data;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error);
  }
};
