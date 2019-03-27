import http from "axios";
import { toast } from "react-toastify";

http.interceptors.request.use(
  config => {
    config.headers["X-Access-Token"] = localStorage.getItem("labId");
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
const apiEndPoint = "http://ec2-54-89-116-114.compute-1.amazonaws.com:";

export function getToken() {
  if (localStorage.getItem("labId")) {
    return localStorage.getItem("labId");
  }
  return null;
}

export function isLoggedIn() {
  if (localStorage.getItem("labId")) {
    return true;
  }
}

export async function login(credentials) {
  const result = await http.post(apiEndPoint + "8080/login/", credentials);

  if (result.data) {
    localStorage.setItem("username", credentials.username);
    localStorage.setItem("labId", result.data.token.toString());
    return true;
  }
  return false;
}

export async function getAssets() {
  try {
    const { data } = await http.get(apiEndPoint + "8080/assets");
    return data.assets;
  } catch (ex) {
    return ex;
  }
}

export async function getbatchAssetHistory(id) {
  try {
    const { data } = await http.get(
      apiEndPoint + "8080/batchAssetQuantityHistory/" + id
    );
    return data.qtyHistory;
  } catch (ex) {
    return ex;
  }
}

export async function updateAsset(id, asset, amount) {
  const assets = assetUpdateParameterGenrator(id, asset, amount);
  const i = 0;
  try {
    return await assetUpdater([], i, assets);
  } catch (ex) {
    return ex;
  }
}

export async function editLabelsTransaction(obj) {
  // try {
  //   const {data}= await http.post(
  //     apiEndPoint + "80/api/AssetEditLabelsTransaction/",
  //     obj
  //   );
  //   return data;
  // } catch (ex) {
  //   return ex;
  // }

  return await http.post(
    apiEndPoint + "80/api/AssetEditLabelsTransaction/",
    obj
  );
}

async function assetUpdater(arr, i, assets) {
  while (i < assets.length) {
    try {
      let res = await http.post(assets[i].url, assets[i].body);
      arr.push(res);
      toast.success(
        assets[i].field.toUpperCase() + "  was updated successfully."
      );
    } catch (ex) {
      toast.error("Unable update " + assets[i].property + ".Pleasd try again.");
    }
    i++;
  }
  toast.info("Updating transaction history");

  return arr;
}

function assetUpdateParameterGenrator(id, newAsset, oldAmount) {
  const arr = [];
  Object.keys(newAsset).map(key => {
    let property = "Edit" + key[0].toUpperCase() + key.slice(1);
    let objKey = "new" + key[0].toUpperCase() + key.slice(1);
    let url = "";

    if (key === "status") {
      property = "Move";
      objKey = "newLocation";
    } else if (key === "quantity") {
      if (newAsset[key] - oldAmount > 0) {
        property = "Addition";
        objKey = "amount";
      } else {
        property = "Subtraction";
        objKey = "amount";
      }
      newAsset[key] = Math.abs(newAsset[key] - oldAmount);
    }
    url = `${apiEndPoint}80/api/Asset${property}Transaction`;
    arr.push({
      body: { asset: id, [objKey]: newAsset[key] },
      url,
      property,
      field: key
    });
  });
  return arr;
}

export async function getAsset(id) {
  try {
    const { data } = await http.get(apiEndPoint + "80/api/LabAsset/" + id);

    if (data) return data;
    return [];
  } catch (ex) {
    return ex;
  }
}

export async function getAssetHistory(id) {
  try {
    const res = await http.get(apiEndPoint + "8080/assetHistory/" + id);
    const { data } = res;

    if (data && data.history) return data.history;
    return [];
  } catch (ex) {
    return ex;
  }
}

export async function recentTransactions() {
  try {
    const { data } = await http.get(apiEndPoint + "8080/recentTransactions/");

    if (data && data.history) return data.history;
    return [];
  } catch (ex) {
    return ex;
  }
}
