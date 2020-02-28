import { AxiosError } from 'axios';
import toastr from 'toastr';
import 'toastr/build/toastr.css';

export const handleError = (error: AxiosError) => {
  if (error.message === 'Network Error' && !error.response) {
    return toastr.error('Network error!');
  }
  if (error.response) {
    const { status }: { status: number } = error.response;
    if (status === 404) {
      return toastr.error('Resources not available!');
    }
    if (status === 403 || status === 401) {
      return toastr.error('Authentication error!');
    }
    if (status === 400) {
      return toastr.error('Bad request!');
    }
  }
};

export const handleSuccess = (message: string) => toastr.success(message);
