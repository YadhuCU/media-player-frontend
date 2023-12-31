import { SERVER_URL } from "./serverURL";
import { commonAPI } from "./commonAPI";

// Upload a new video
export const addNewVideoAPI = async (video) => {
  return await commonAPI({
    method: "POST",
    url: `${SERVER_URL}/allVideos`,
    reqBody: video,
  });
};
// Get all Videos
export const getAllVideoAPI = async () => {
  return await commonAPI({
    method: "GET",
    url: `${SERVER_URL}/allVideos`,
  });
};
// Delete video
export const deleteVideoAPI = async (id) => {
  return await commonAPI({
    method: "DELETE",
    url: `${SERVER_URL}/allVideos/${id}`,
    reqBody: {},
  });
};
// Add video to history
export const addToHistoryAPI = async (video) => {
  return await commonAPI({
    method: "POST",
    url: `${SERVER_URL}/history/`,
    reqBody: video,
  });
};
// Get Video from history
export const getFromHistoryAPI = async () => {
  return await commonAPI({
    method: "GET",
    url: `${SERVER_URL}/history/`,
  });
};
// Remove from history
export const removeFromHistoryAPI = async (id) => {
  return await commonAPI({
    method: "DELETE",
    url: `${SERVER_URL}/history/${id}`,
    reqBody: {},
  });
};
// Add category
export const addCategoryAPI = async (category) => {
  return await commonAPI({
    method: "POST",
    url: `${SERVER_URL}/categories/`,
    reqBody: category,
  });
};
// Get categories
export const getAllCategoryAPI = async () => {
  return await commonAPI({
    method: "GET",
    url: `${SERVER_URL}/categories/`,
  });
};
// Remove Category
export const removeCategoryAPI = async (id) => {
  return await commonAPI({
    method: "DELETE",
    url: `${SERVER_URL}/categories/${id}`,
    reqBody: {},
  });
};
// Updata Category
export const updateCategoryAPI = async (id, categoryDetail) => {
  return await commonAPI({
    method: "PUT",
    url: `${SERVER_URL}/categories/${id}`,
    reqBody: categoryDetail,
  });
};
// Get a single Videos
export const getVideoAPI = async (id) => {
  return await commonAPI({
    method: "GET",
    url: `${SERVER_URL}/allVideos/${id}`,
  });
};
