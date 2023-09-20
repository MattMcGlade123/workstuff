export const getData = async (number = 1) => {
  const res = await fetch(`https://dummyjson.com/products/${number}`)


  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}