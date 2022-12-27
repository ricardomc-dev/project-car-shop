import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3001",
});

export const setToken = (token) => {
  api.defaults.headers.common.Authorization = token;
};

export const requestLogin = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export const requestData = async (endpoint, headers) => {
  const { data } = await api.get(endpoint, headers);
  return data;
};

export const createData = async (endpoint, body, headers) => {
  const { data } = await api.post(endpoint, body, headers);
  return data;
};

export const updateData = async (endpoint, body, headers) => {
  const { data } = await api.put(endpoint, body, headers);
  return data;
};

export const deleteData = async (endpoint, headers) => {
  const { data } = await api.delete(endpoint, headers);
  return data;
};

export default api;
