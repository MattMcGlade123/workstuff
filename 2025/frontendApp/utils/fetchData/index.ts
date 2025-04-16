export const fetchData = async (url: string) => {
  let finalData;
  let error;

  try {
    const response = await fetch(url);
    const dataResponse = await response.json();

    console.log('dataResponse', dataResponse);
    finalData = dataResponse
  } catch (err) {
    error = err
  }

  return {
    finalData,
    error
  }
}