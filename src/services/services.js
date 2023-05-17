const axios = require("axios");

const apiClient = axios.create({
  baseURL: "https://notes-api-tau.vercel.app/api/v1/",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getData() {
    return apiClient.get("/notes");
  },
  getSingleData(id) {
    return apiClient.get("/notes/" + id);
  },
  postData(note) {
    return apiClient.post("/notes", note);
  },
  deleteData(id) {
    return apiClient.delete("/notes/" + id);
  },
  patchData(id, data) {
    return apiClient.patch(`/notes/${id}`, data);
  },
};
