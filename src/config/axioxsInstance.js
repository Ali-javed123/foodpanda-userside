import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
    (config) => {
      // Add custom headers
      config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  axiosInstance.interceptors.response.use(
    (response) => {
console.log("intercepters",response);
      return response;
  },
    (error) => {
      // Handle HTTP errors
      if (error.response) {
        switch (error.response.status) {
          case 400:
            console.log("resposnse deletes","Bad Request");
            break;
          case 401:
            console.log("resposnse deletes","Unauthorized");
            break;
          case 404:
            console.log("resposnse deletes","Not Found");
            break;
          default:
            console.log("deletes","Server Error");
            break;
        }
      }
      return Promise.reject(error);
    }
  );
//   axiosInstance.get("https://api.example.com/data")
//   .then(response => console.log(response.data))
//   .catch(error => console.log(error));

// // POST request
// axiosInstance.post("https://api.example.com/data", { name: "John Doe" })
//   .then(response => console.log(response.data))
//   .catch(error => console.log(error));

// // DELETE request
// axiosInstance.delete("https://api.example.com/data/123")
//   .then(response => console.log(response.data))
//   .catch(error => console.log(error));

// // PATCH request
// axiosInstance.patch("https://api.example.com/data/123", { name: "Jane Doe" })
//   .then(response => console.log(response.data))
//   .catch(error => console.log(error));
  export default axiosInstance;
