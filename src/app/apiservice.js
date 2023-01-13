import axios from 'axios'
const cors = require('cors');

httpClient.use(cors());

export const httpClient = axios.create({
    baseURL: "http://projetosjdbc-production.up.railway.app:5974", withCredentials: true
})

    class ApiService{

        constructor(apiurl){
            this.apiurl = apiurl;
        }

        static registrarToken(token){
            if(token){
                httpClient.defaults.headers.common['Authorization'] = `Bearer ${token}`
            }
        }

        post(url, objeto){
            const  requestUrl = `${this.apiurl}${url}`
            return httpClient.post(requestUrl, objeto);
        }

        put(url, objeto){
            const  requestUrl = `${this.apiurl}${url}`
            return httpClient.put(requestUrl, objeto);
        }

        delete(url) {
            const  requestUrl = `${this.apiurl}${url}`
            return httpClient.delete(requestUrl)
        }

        get(url){
            const  requestUrl = `${this.apiurl}${url}`
            return httpClient.get(requestUrl)
        }
    }

export default ApiService;