import axios from "axios";

let url = "https://www.googleapis.com/books/v1/volumes?q=";
let apiKey = "&AIzaSyC8KSnkuC8bH6lSFKZ9bZ30__Wnrtm-KVQ";

export default {
    getBooks:function(query){
        return axios.get(url + query + apiKey);
    },
    saveBook: function(){
        return axios.post("http://localhost:5000/api/books",{});
    },
    getSavedBooks: function(){
        return axios.get("http://localhost:5000/api/books");
    },
    getBookById: function(id){
        return axios.get(url + id + apiKey );
    }
};

