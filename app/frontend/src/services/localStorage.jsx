export function addIdToLocalSto(obj, localStoKey) {
  const arrID = localStorage.getItem(localStoKey);
  const idsFavorites = arrID ? [...JSON.parse(arrID), obj] : [obj];
  return localStorage.setItem(localStoKey, JSON.stringify(idsFavorites));
}

export function deleteIdFromLocalSto(id, localStoKey) {
  const arrID = localStorage.getItem(localStoKey);
  const idsFavorites = arrID
    ? [...JSON.parse(arrID)].filter((deleteCar) => deleteCar.carId !== id) : [];

  return localStorage.setItem(localStoKey, JSON.stringify(idsFavorites));
}

export function getLocalStorageInfo(localStoKey) {
  const idArr = localStorage.getItem(localStoKey);
  console.log(idArr)
  if (idArr) {
    return JSON.parse(idArr);
  }
}