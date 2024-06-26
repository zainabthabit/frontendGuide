import axios from 'axios';
import { useUserStore } from '../store/user';

const useRequest = () => {
  const token = useUserStore((state) => state.token);

  const axiosInstance = axios.create({
    baseURL: 'http://localhost:8001/',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return axiosInstance;
};

export default useRequest;
