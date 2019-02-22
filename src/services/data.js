import http from "axios";

http.defaults.headers.common["X-Access-Token"] = localStorage.getItem("labId");

http.interceptors.response.use(null, error => {
  // document.body.classList.add("loader-active");

  if (
    error.response &&
    error.response.status >= 400 &&
    error.response.status <= 500
  ) {
    return Promise.reject(error);
  }
});

const apiEndPoint = "http://ec2-54-89-116-114.compute-1.amazonaws.com:";

export async function login(credentials) {
  try {
    const { data } = await http.post(apiEndPoint + "8000/login/", credentials);

    if (data) {
      localStorage.setItem("labId", data.token.toString());
      return true;
    }
  } catch (ex) {
    if (ex.response && ex.response.status === 404) console.log("Error");
  }
}

export function isLoggedIn() {
  if (localStorage.getItem("labId")) {
    return true;
  }
}
export async function getAssets() {
  const { data } = await http.get(apiEndPoint + "8000/assets");
  return data.assets;
}

export async function getbatchAssetHistory(id) {
  const { data } = await http.get(
    apiEndPoint + "8000/batchAssetQuantityHistory/" + id
  );
  return data.qtyHistory;
}

export async function updateAsset(id, asset, amount) {
  const assets = assetUpdateParameterGenrator(id, asset, amount);
  const i = 0;
  return await assetUpdater([], i, assets);
}

async function assetUpdater(arr, i, assets) {
  while (i < assets.length) {
    let res = await http.post(assets[i].url, assets[i].body);
    arr.push(res);
    i++;
  }
  return arr;
}

function assetUpdateParameterGenrator(id, newAsset, oldAmount) {
  // Helper function to generate individual asset key which were edited

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
    url = `${apiEndPoint}3000/api/Asset${property}Transaction`;
    arr.push({ body: { asset: id, [objKey]: newAsset[key] }, url });
  });
  return arr;
}

export async function getAsset(id) {
  const { data } = await http.get(apiEndPoint + "3000/api/LabAsset/" + id);

  if (data) return data;
  return [];
}

export async function getAssetHistory(id) {
  const res = await http.get(apiEndPoint + "8000/assetHistory/" + id);
  const { data } = res;

  if (data && data.history) return data.history;
  return [];
}

export async function recentTransactions() {
  const { data } = await http.get(apiEndPoint + "8000/recentTransactions/");

  if (data && data.history) return data.history;
  return [];
}
