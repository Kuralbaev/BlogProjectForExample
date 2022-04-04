import axios, { Axios } from "axios";

export default (): Axios => {
  return axios.create({
    timeout: 10000,
    withCredentials: true,
  });
};
