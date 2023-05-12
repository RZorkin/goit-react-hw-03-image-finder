import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const KEY = '32938330-25a7d9530d370aeaa9b179f57';
const PER_PAGE = 12;

async function fetchPhotosWithQuery(searchQuery, page) {
  if (searchQuery) {
    const response = await axios.get(
      `${URL}?q=${searchQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`
    );
    if (!response.status) {
      throw new Error(response.status);
    }
    return response.data;
  }
}

export default fetchPhotosWithQuery;
