import axios from 'axios'

/* Setting the base URL for the API. */
export const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

/* Setting the parameters for the API call. */
const options = {
  params: {
    maxResults: 50,
  },
  Headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
}

/**
 * It takes a URL as a parameter, and returns the data from the URL.
 * @param url - The URL to fetch from.
 * @returns The data object from the axios response.
 */
export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options)

  return data
}
