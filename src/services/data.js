import http from "axios";

const apiEndPoint = "http://ec2-54-89-116-114.compute-1.amazonaws.com:8000";

export async function getAssets() {
  const { data } = await http.get(apiEndPoint + "/assets");
  return data.assets;
}
export async function getAssetHistory(id) {
  const { data } = await http.get(apiEndPoint + "/assetHistory/" + id);
  return data.history;
}
