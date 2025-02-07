import axiosInstance from '../../../axiosInestance';


export const GetAllSectionsLookups = async () => {
  try {
    const response = await axiosInstance.get('/Lookups/GetAllSectionsLookups');
    return response.data;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error);
  }
};
