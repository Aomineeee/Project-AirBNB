import React from "react";
import { useSelector } from "react-redux";
import { Switch } from "react-router-dom";
import { Route, Redirect } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "rsuite/dist/rsuite.min.css";
import QuanLyNguoiDung from "./Pages/AdminPages/QuanLyNguoiDung/QuanLyNguoiDung";
import QuanLyViTri from "./Pages/AdminPages/QuanLyViTri/QuanLyViTri";
import HomePage from "./Pages/HomePage";
import SignInPage from "./Pages/SignInPage/SignInPage";
import SignUpPage from "./Pages/SignUpPage/SignUpPage";
import ThongTinCaNhanPage from "./Pages/ThongTinCaNhan/ThongTinCaNhanPage";
import ThongTinPhong from "./Pages/ThongTinPhong/ThongTinPhong";
import AdminTemplates from "./Templates/Admin/AdminTemplates";
import UserTemplates from "./Templates/User/UserTemplates";
import ListRoom from "./Components/ListRoom/ListRoom";
import ErrorPage from "./Pages/404Page/ErrorPage";
import Spinner from "./Components/Spinner/Spinner";
import ReviewRoom from "./Components/Booking/DetailStuffs/ReviewRoom";

export default function App() {
  const user = useSelector((state) => {
    return state.userSlice.isAdmin;
  });
  return (
    <div>
      <Spinner />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/test" exact component={ReviewRoom} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/signin" component={SignInPage} />
          <UserTemplates path="/profile" Component={ThongTinCaNhanPage} />
          <UserTemplates path="/booking/:id" exact Component={ThongTinPhong} />
          <UserTemplates path="/location/:id" exact Component={ListRoom} />
          <AdminTemplates
            path="/admin/locations"
            exact
            Component={QuanLyViTri}
          />
          <AdminTemplates
            path="/admin/users"
            exact
            Component={QuanLyNguoiDung}
          />
          <Route
            path="/admin"
            render={() =>
              !user ? <Redirect to="/error" /> : <Redirect to="/admin/users" />
            }
          />
          <Route path="*" component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
