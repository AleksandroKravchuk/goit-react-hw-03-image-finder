import axios from "axios";
import { Notify } from 'notiflix';


export default class ApiService {
    constructor() {
      this.searchQuery = '';
      this.page = 1;
      this.per_page = 12;
    }
 async fetchImages() {
    const API_KEY = `27518443-a5857259e188e1fcb2dbeb9ca`;
    const options =  new URLSearchParams({
        key: API_KEY,
        image_type: "photo",
        q: this.searchQuery,
        orientation: "horizontal",
        per_page: this.per_page,
        page:  this.page,
    })
  
   try {
     const { data } = await axios.get(`https://pixabay.com/api/?${options}`);
      return data; }
      catch{Notify.failure("Ooooops somthing went wrong");}        
  };
    get query() {
      return  this.searchQuery;
    };
    set query(newQuery) {
        this.searchQuery = newQuery;
  };
  setAddNewPage(newPage) {
        this.page = newPage;
  };
  getPer_page() {
    return this.per_page;
  }
}