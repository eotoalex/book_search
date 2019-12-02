import axios from "axios";

let url = "https://www.googleapis.com/books/v1/volumes?q=";
let apiKey = "&AIzaSyC8KSnkuC8bH6lSFKZ9bZ30__Wnrtm-KVQ";

export default {
    getBooks:function(query){
        return axios.get(url + query + apiKey);
    },
    saveBook: function(){
        return axios.post("https://blooming-hollows-91552.herokuapp.com/api/books",{});
    },
    getSavedBooks: function(){
        return axios.get("https://blooming-hollows-91552.herokuapp.com/api/books");
    },
    getBookById: function(id){
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + id + apiKey );
    }
};

