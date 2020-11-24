import axios from 'axios';

const api = `http://localhost:5000/api/`;
const ApiService = {
  init() {
    axios.interceptors.request.use(async (config) => {
      config.headers = {
        Accept: 'application/json',
      };
      return config;
    });
  },


  get({resource, params}) {
    return axios.get(`${api}${resource}`, params);
  },

  post({resource, params}) {
    return axios.post(`${api}${resource}`, params);
  },

  put({resource, params}) {
    return axios.put(`${api}${resource}`, params);
  },

  delete({resource, params}) {
    return axios.delete(`${api}${resource}`, params);
  },
};

export default ApiService;