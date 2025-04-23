interface QueryResult<T> {
  finalData: T | null;
  error: any;
}

export const fetchData = async <T = { [key: string]: any }>(url: string): Promise<QueryResult<T>> => {
  let finalData;
  let error;

  try {
    const response = await fetch(url);
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