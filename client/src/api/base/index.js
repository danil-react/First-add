import axios from 'axios';

const baseConfig = {
  headers: {
    'Accept': 'application/json',
    'Authorization': localStorage.getItem('token'),
  }
}
const api = `http://localhost:5000/api/`;
const ApiService = {
  init() {
    axios.interceptors.request.use(async (config) => {
      const token = localStorage.getItem('token');
      console.log(token)
      config.headers = {
        Accept: 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InF3ZUBxd2UucXdlIiwidXNlcklkIjoiNWZiY2FjMDFhODA1NmUwZjNjNWU4NGZmIiwiaWF0IjoxNjA2MjE5ODc4LCJleHAiOjE2MDYyMjM0Nzh9.wYDmcJhqftb8vIIqg_-ESsiDjzilPJKtdstT8nWUhA4'
      };
      return config;
    });
  },


  get({resource, params}) {
    return axios.get(`${api}${resource}`, baseConfig);
  },

  post({resource, params}) {
    return axios.post(`${api}${resource}`,params, baseConfig);
  },

  put({resource, params}) {
    return axios.put(`${api}${resource}`,params, baseConfig);
  },

  delete({resource, params}) {
    return axios.delete(`${api}${resource}`, baseConfig);
  },
};

export default ApiService;