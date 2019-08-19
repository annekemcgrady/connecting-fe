export const fetchData = async () => {
  try {
    const result = await fetch('http://localhost:3001')
    return result.json()
  }
  catch(error) {
    throw new Error(error.message)
  }
}