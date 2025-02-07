import axiosInstance from '../../../axiosInestance';

export const DeleteReinforcementBudget = async (id: number) => {
  try {
    const response = await axiosInstance.delete(`/Budget/DeleteReinforcementBudget/${id}`);
    return response.data;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error);
  }
};
