import axios from 'axios';
import $ from 'jquery'; 

let BASE_URL = $('input[name="BS_URL_ASSET"]').val();
let API_BASE_URL = BASE_URL+'api/';  
let TOKEN = (!!localStorage.getItem('token'))? localStorage.getItem('token'):null;

axios.defaults.headers.common['Authorization'] = TOKEN; 
const CRUD = {
    GET(URL_POSTFIX,DATA = {}) {  
        let URL = API_BASE_URL+URL_POSTFIX; 
        return new Promise(function (resolve, reject) {
            axios.get(URL)
            .then((response) => {
                return resolve(response.data);
            })
            .catch((error) => {
                return reject(error.response); 
            }); 
        });
    }, 
    POST(URL_POSTFIX,DATA = {}) { 
        let URL = API_BASE_URL+URL_POSTFIX; 
        return new Promise(function (resolve, reject) {
            axios.defaults.headers.common['Content-Type'] = `multipart/form-data`;
            axios.post(URL,data)
            .then((response) => {
                return resolve(response.data);
            })
            .catch((error) => {
                return reject(error.response); 
            }); 
        });

    },
    PUT(URL_POSTFIX,DATA = {}) { 
        let URL = API_BASE_URL+URL_POSTFIX; 
        return new Promise(function (resolve, reject) {
            axios.defaults.headers.common['Content-Type'] = `multipart/form-data`;
            axios.post(URL,data)
            .then((response) => {
                return resolve(response.data);
            })
            .catch((error) => {
                return reject(error.response); 
            }); 
        });

    },
    DELETE(URL_POSTFIX) { 
        let URL = API_BASE_URL+URL_POSTFIX; 
        return new Promise(function(resolve, reject) {
            axios
                .delete(URL)
                .then(function(response) {
                    return resolve(response.data)
                })
                .catch(function(error) {
                    return reject(error.response);
                });
        }); 
    } 
}

export default CRUD