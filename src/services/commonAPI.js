import axios from "axios";

export const commonAPI = async ({ method, url, reqBody = "" }) => {
  const reqConfig = {
    method,
    url,
    headers: {
      "Content-Type": "application/json",
    },
    data: reqBody,
  };

  try {
    return await axios(reqConfig);
  } catch (err) {
    return err;
  }
};
