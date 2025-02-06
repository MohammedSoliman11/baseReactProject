import axiosInstance from '../../../axiosInestance';

export const DeleteProposedBudget = async (id: number) => {
  try {
    const response = await axiosInstance.delete(`/Budget/DeleteProposedBudget/${id}`);
    return response.data;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error);
  }
};
