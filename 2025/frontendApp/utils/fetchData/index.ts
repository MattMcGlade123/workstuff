import { OptionsInt } from "@/custom-type";

interface QueryResult<T> {
  finalData: T | null;
  error: any;
}

export const fetchData = async <T = { [key: string]: any }>(url: string, options?: OptionsInt): Promise<QueryResult<T>> => {
  let finalData;
  let error;

  const defaultOptions = {
    method: "GET",
    headers: {
      'Content-Type': 'application/json'
    },
  }

  const finalOptions = options ? {
    ...options,
    headers: {
      'Content-Type': 'application/json'
    },
  } : defaultOptions;

  try {
    const response = await fetch(url, finalOptions);
    const dataResponse = await response.json();

    finalData = dataResponse
  } catch (err) {
    error = err
  }

  return {
    finalData,
    error
  }
}