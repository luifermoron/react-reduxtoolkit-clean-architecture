import axios from 'axios';

export const getCall = async <T>(url: string): Promise<T> => {
    const response = await axios.get<T>(url);
    return response.data;
};