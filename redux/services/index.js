export function GetDataFromServer(apiPath, reqMethod) {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  return fetch(apiPath, { method: reqMethod, headers: myHeaders });
}

export function PostDataToServer(apiPath, reqMethod, formBody) {
  let myHeaders = new Headers();
  //application/x-www-form-urlencoded;charset=UTF-8
  myHeaders.append("Content-Type", "application/json");
  // myHeaders.append(
  //   "Content-Type",
  //   "application/x-www-form-urlencoded;charset=UTF-8"
  // );

  if (formBody) {
    let fetchData = {
      // method: "POST",
      // body: JSON.stringify(formBody),
      // headers: myHeaders,
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(formBody),
    };
    return fetch(apiPath, fetchData);
  }
}
