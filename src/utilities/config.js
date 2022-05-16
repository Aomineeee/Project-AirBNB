import localStorageServ from "../Service/locaStorage.service";

export const BASE_URL = "https://airbnb.cybersoft.edu.vn";

// export const TOKEN_USER =_token ? _token : localStorageServ.accessToken.get();
export const TOKEN = localStorageServ.userInfor.get()
  ? localStorageServ.userInfor.get().token
  : "";

export const TOKEN_CB =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwMiIsIkhldEhhblN0cmluZyI6IjI0LzA4LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY2MTI5OTIwMDAwMCIsIm5iZiI6MTYzNzM0MTIwMCwiZXhwIjoxNjYxNDQ2ODAwfQ.Jyh-ALPYBzDojZwAY5mCMSzdNFvh1i-5lNzT3RhI0nU";

// export const TOKEN_ADMIN =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTdmNGQ3YzFkMjA5NjAwMWM1ZGY5M2QiLCJlbWFpbCI6InRodXlAZ21haWwuY29tIiwidHlwZSI6IkFETUlOIiwiaWF0IjoxNjQ5Nzc1MzAxfQ.bOxOGQnRqQCBnmLCMUpp-Of7YUk00403VCHy1RJ4Xqc";
