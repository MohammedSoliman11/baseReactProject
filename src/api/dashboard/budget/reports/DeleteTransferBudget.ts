import axiosInstance from '../../../axiosInestance';

export const DeleteTransferBudget = async (id: number) => {
  try {
    const response = await axiosInstance.delete(`/Budget/DeleteTransferBudget/${id}`);
    return response.data;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error);
  }
};
