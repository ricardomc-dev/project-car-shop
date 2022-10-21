import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

export const setToken = (token) => {
  api.defaults.headers.common.Authorization = token;
};

export const requestLogin = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export const requestData = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
};

export const createData = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export const updateData = async (endpoint, body) => {
  const { data } = await api.put(endpoint, body);
  return data;
};

export const deleteData = async (endpoint) => {
  const { data } = await api.delete(endpoint);
  return data;
};

export default api;
