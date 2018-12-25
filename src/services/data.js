import http from "axios";

http.interceptors.request.use(
  config => {
    if (!config.url.includes("login")) {
      if (localStorage.getItem("labId")) {
        config.headers["X-Access-Token"] = localStorage.getItem("labId");
      } else {
        window.location = "/login";
      }
    }
    return config;
  },
  error => Promise.reject(error)
);

http.interceptors.response.use(null, error => {
  if (
    error.response &&
    error.response.status >= 400 &&
    error.response.status <= 500
  ) {
    return Promise.reject(error);
  }
});

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

export async function recentTransactions() {
  const { data } = await http.get(apiEndPoint + "/recentTransactions/");

  if (data && data.history) return data.history;
  return [];
}

export async function signIn(credentials) {
  const { data } = await http.post(apiEndPoint + "/login/", credentials);
  if (data) return data;
  return [];
}
