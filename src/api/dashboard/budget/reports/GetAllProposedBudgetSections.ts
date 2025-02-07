import axiosInstance from '../../../axiosInestance';

export const GetAllProposedBudgetSections = async () => {
  try {
    const response = await axiosInstance.get('/Budget/GetAllProposedBudgetSections');
    return response.data;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error);
  }
};
