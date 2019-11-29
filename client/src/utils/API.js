import axios from "axios";

let apiKey = "AIzaSyC8KSnkuC8bH6lSFKZ9bZ30__Wnrtm-KVQ";

export default {
    getBooks:function(){
        return axios.get("https://www.googleapis.com/books/v1/volumes/" + apiKey);
    }
};

