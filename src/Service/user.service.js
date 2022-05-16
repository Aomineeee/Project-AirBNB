import AxiosServ from "./axios.service";

export const userService = {
  dangKy: (values) => {
    const uri = "api/auth/register";
    return AxiosServ.postMethod(uri, values);
  },

  dangNhap: (values) => {
    const uri = "api/auth/login";
    return AxiosServ.postMethod(uri, values);
  },

  avatar: (values) => {
    const uri = "api/users/upload-avatar";
    return AxiosServ.postMethod(uri, values);
  },
};
