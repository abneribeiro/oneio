import axios from 'axios';
// import Cookies from 'js-cookie';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api/v1/",
//   withCredentials: true, // se backend envia cookies
//   timeout: 10000,
});

// api.interceptors.request.use(config => {
//   const token = Cookies.get('token');
//   if (token) config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });

api.interceptors.response.use(
  res => res,
  err => {
    if (err.response?.status === 401) {
      // redirecionar para login, limpar cookie, etc.
    }
    return Promise.reject(err);
  }
);

export default api;
