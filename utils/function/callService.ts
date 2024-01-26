/* eslint-disable no-console */
import axios from "axios";

interface PropsService {
  method: string;
  url: string;
  data?: object;
  headers?: string;
}

export default async function callService(method, url, data, headers) {
  const response = await axios({
    method,
    headers,
    url,
    data,
  })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      if (error.response.status === 500) {
        return "server error";
      }
      if (error.response) {
        if (
          error.response.data.error === undefined ||
          error.response.data.error === "" ||
          error.response.data.error === null
        ) {
          return "server error";
        }

        return error.response.data.error;
      }
      if (error.request) {
        return "request error";
      }

      return "has something error";
    });

  return response;
}
