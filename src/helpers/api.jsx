import axios from 'axios';

const per_page = 12;
// let totalPages = 0;

export default async function fetchImages(query, page, totalPages) {
  const API_KEY = '35367804-7020ab364021c8257af086cad';
  const params = new URLSearchParams({
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: per_page,
  });
  const response = await axios.get(
    `https://pixabay.com/api/?${params}&q=${query}&page=${page}`
  );
  totalPages = response.data.totalHits / per_page;
  return response.data;
}
