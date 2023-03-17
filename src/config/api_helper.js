import axios from "axios";
import { toast } from "react-toastify";

//pass new generated access token here
// const token = ACCESS_TOKEN();
const Token=localStorage.getItem('token');
//apply base url for axios
const API_URL = "https://projectvethomes.pythonanywhere.com/superadmin";

const axiosApi = axios.create({
  baseURL: API_URL,
});

if (localStorage.getItem("accessToken")) {
  axiosApi.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
}

axiosApi.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
);

const CheckToken = () => {
  if (axiosApi.defaults.headers.common["Authorization"] === undefined || axiosApi.defaults.headers.common["Authorization"] === null) {
    axiosApi.defaults.headers.common["Authorization"] =  `Bearer ${localStorage.getItem("token")}`;
  }
};

export async function get(url, config = {}) {
  CheckToken();
  return await axiosApi.get(url, { ...config }).then(response => {
    // console.log("response.data", response.data)
    return response.data
  }).catch(err => {
    console.log("ErrList", err);
    if (err.response !== undefined) {
      const Data = err.response.data;
      if (Data.errors) {
        const ErrList = Object.keys(Data.errors);
        ErrList.map((e) => toast.error(Data.errors[e][0]));
      } else {
        toast.error(Data.message);
      }
    } else {
      toast.error(err.message);
    }
  });
}

export async function post(url, data, config = {}) {
  CheckToken();
  return axiosApi
    .post(url, data, { ...config })
    .then(response => response.data)
    .catch(err => {
      console.log("ErrList", err);
      if (err.response !== undefined && err.response.data !== undefined) {
        const Data = err.response.data;
        if (Data.errors) {
          const ErrList = Object.keys(Data.errors);
          ErrList.map((e) => toast.error(Data.errors[e][0]));
        } else {
          toast.error(Data.message);
        }
      } else {
        toast.error(err.message);
      }
    })
}

export async function put(url, data, config = {}) {
  CheckToken();
  return axiosApi
    .put(url, data, config)
    .then(response => response.data).catch(err => {
      console.log("ErrList", err);
      if (err.response !== undefined) {
        const Data = err.response.data;
        if (Data.errors) {
          const ErrList = Object.keys(Data.errors);
          ErrList.map((e) => toast.error(Data.errors[e][0]));
        } else {
          toast.error(Data.message);
        }
      } else {
        toast.error(err.message);
      }
    });
}

export async function del(url, config = {}) {
  CheckToken();
  return await axiosApi
    .delete(url, { ...config })
    .then(response => response.data).catch(err => {
      console.log("ErrList", err);
      if (err.response !== undefined) {
        const Data = err.response.data;
        if (Data.errors) {
          const ErrList = Object.keys(Data.errors);
          ErrList.map((e) => toast.error(Data.errors[e][0]));
        } else {
          toast.error(Data.message);
        }
      } else {
        toast.error(err.message);
      }
    });
}
