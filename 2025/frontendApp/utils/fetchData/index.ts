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
  } : defaultOptions;

  try {
    const response = await fetch(url, finalOptions);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData?.error || 'Unknown error');
    }

    const dataResponse = await response.json();
    finalData = dataResponse;
  } catch (err) {
    error = err;
  }


  return {
    finalData,
    error
  }
}