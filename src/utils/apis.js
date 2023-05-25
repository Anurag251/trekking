import axios from 'axios';

function createAPI() {
  const api = axios.create({
    // baseURL: "https://stnepal.com.np/trekking/api/v1",
    baseURL: "https://mountaingotrekking.com/trekking/api/v1",
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      // Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  });

  return api;
}

export const apis = createAPI();

// export const apis = axios.create({
//   baseURL: "https://admin.book4clean.com/api/v1",
// });
