import axios, { AxiosRequestConfig } from 'axios';
import AuthUserContext, {
  AuthUserContextType,
} from 'global_shared/contexts/AuthUserContext';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router';

const useCommand = <T>() => {
  const [data, setData] = useState<T | null>(null);
  const [headers, setHeaders] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const { clearAuthUserData } = useContext(
    AuthUserContext
  ) as AuthUserContextType;
  const navigate = useNavigate();

  const executeCommand = (
    url: string,
    body?: any,
    options?: AxiosRequestConfig<object | null> | undefined
  ) => {
    setLoading(true);
    axios
      .post(url, body, options)
      .then((response) => {
        setStatus(response.data.Status);
        if (response.data.Status === 'success') {
          setMessage(response.data.Message);
          var responseData: T;
          try {
            responseData = JSON.parse(response.data.Data);
          } catch (error) {
            responseData = response.data.Data;
          }

          setData(responseData);
          setHeaders(response.headers);
        } else {
          setMessage(response.data.Message);
          setError(response.data.Message);
          if (response?.data?.Message?.includes('denied')) {
            clearAuthUserData();
            navigate('/');
          }
        }
      })
      .catch((exception) => {
        setMessage(exception.message);
        setStatus('failed');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    data,
    setData,
    message,
    status,
    setStatus,
    setMessage,
    headers,
    loading,
    error,
    setError,
    executeCommand,
  };
};

export default useCommand;
