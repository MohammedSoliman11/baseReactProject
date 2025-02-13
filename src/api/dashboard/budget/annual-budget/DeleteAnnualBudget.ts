import axiosInstance from '../../../axiosInestance';

export const DeleteAnnualBudget = async (id: number) => {
  try {
    const response = await axiosInstance.delete(`/Budget/DeleteAnnualBudget/${id}`);
    return response.data;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error);
  }
};
