import axios from 'axios';

const baseURL = 'http://apisokol.gulidovalexandr.ru/api/'

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';


export const api = {
  login: async (email, password) => {
    try {
      const response = await axios.get(`${baseURL}User/login`, {
        params: {
          mail: email,
          password
        }
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
  register: async (fio, email, password) => {
    try {
      const response = await axios.get(`${baseURL}User/registration`, {
        params: {
          fio: fio,
          mail: email,
          password: password
        }
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
  getServices: async () => {
    try {
      const response = await axios.get(`${baseURL}Product/all`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
  sendOrder: async (data) => {
    try {
      const response = await axios.post(`${baseURL}Order`, data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

};