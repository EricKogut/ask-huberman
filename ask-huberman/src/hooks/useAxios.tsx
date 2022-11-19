import { useState, useEffect } from 'react';

import axios from 'axios';

declare type operation = 'get' | 'put' | 'delete' | 'post';
export interface Props {
  type?: operation;
  endpoint?: string;
  body?: object;
  supressErrors?: boolean;
  errorFunction?: any;
  skip?: boolean;
}

export const useAxios = ({
  type = 'get',
  endpoint = '',
  body,
  supressErrors = false,
  errorFunction,
  skip = false,
}: Props) => {
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(null);
  const [data, setData] = useState(null);

  async function fetchData() {
    try {
      setData(null);
      setLoading(true);
      setErrors(null);

      const res = await axios[type](
        `${process.env.NEXT_PUBLIC_REACT_APP_ENDPOINT}/${endpoint}`,
        body
      );

      setData(res.data);
    } catch (error: any) {
      if (!supressErrors) {
        setErrors(error);
      }

      if (errorFunction) {
        errorFunction(error);
      }

      const axiosProps = {
        type,
        endpoint,
        body,
        supressErrors,
      };
    } finally {
      setLoading(false);
    }
  }

  function refetch() {
    fetchData();
  }

  useEffect(() => {
    if (!skip) {
      fetchData();
    } else {
      setLoading(false);
    }
  }, [body, endpoint, supressErrors, type, skip]);

  return { loading, errors, data, refetch };
};
