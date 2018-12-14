import http from "axios";

http.interceptors.request.use(
  config => {
    console.log("success");
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

const apiEndPoint = "http://ec2-54-89-116-114.compute-1.amazonaws.com:8000";

export async function getAssets() {
  const { data } = await http.get(apiEndPoint + "/assets");
  return data.assets;
}
export async function getAssetHistory(id) {
  const { data } = await http.get(apiEndPoint + "/assetHistory/" + id);
  if (data && data.history) return data.history;
  return [];
}
