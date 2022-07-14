import axios from "axios";

axios.defaults.baseURL='https://pixabay.com/api/';

export const addFoto = () => {

const KEY = '27518443-a5857259e188e1fcb2dbeb9ca';
    axios.get(`?q=cat&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
        .then(({ data }) => {
          return data.hits;   
        }
       )
        .catch((error) => error.message)
}
