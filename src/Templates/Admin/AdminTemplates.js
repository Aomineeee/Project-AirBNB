import { Route } from "react-router-dom";
import { Layout, Menu } from "antd";
import { UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logOutUserAction } from "../../reduxStore/userAction";
const { Content, Sider } = Layout;

function AdminTemplates(props) {
  let { Component, ...restProps } = props;
  let dispatch = useDispatch();
  const user = useSelector((state) => {
    return state.userSlice.userInfor;
  });
  const handleLogout = () => {
    console.log(logOutUserAction());
    dispatch(logOutUserAction());
  };
  return (
    <Route
      {...restProps}
      render={(matchProps) => {
        return (
          <Fragment>
            <div className="overflow-x-hidden h-20 bg-black w-full flex justify-between items-center">
              <div>
                <h1 className="text-white text-4xl font-bold pl-5">
                  DashBoard
                </h1>
              </div>
              <div className="btn-group pr-5">
                <button
                  type="button"
                  className="dropdown-toggle focus:outline-non outline-none border-0 py-2 px-3 bg-white rounded-full w-max flex items-center justify-center"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fa fa-bars mr-3" />
                  {user && user.user.avatar ? (
                    <img
                      src={user.user.avatar}
                      alt="avatar"
                      className="rounded-full w-8 h-8 object-cover"
                    />
                  ) : (
                    <i className="fa fa-user-alt"></i>
                  )}
                </button>
                <div className="dropdown-menu dropdown-menu-right mt-8 py-3 px-5 rounded-2xl overflow-hidden shadow-md">
                  {!user ? (
                    <>
                      <NavLink
                        className="dropdown-item font-semibold"
                        type="button"
                        to="/signup"
                      >
                        ????ng k??
                      </NavLink>
                      <NavLink
                        className="dropdown-item pb-4"
                        type="button"
                        to="/signin"
                      >
                        ????ng nh???p
                      </NavLink>
                      <button className="dropdown-item pt-4" type="button">
                        Cho thu?? nh??
                      </button>
                      <button className="dropdown-item" type="button">
                        T??? ch???c tr???i nghi???m
                      </button>
                      <button className="dropdown-item" type="button">
                        Tr??? gi??p
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="dropdown-item font-semibold"
                        type="button"
                      >
                        Tin nh???n
                      </button>
                      <button
                        className="dropdown-item font-semibold"
                        type="button"
                      >
                        Th??ng b??o
                      </button>
                      <button
                        className="dropdown-item font-semibold"
                        type="button"
                      >
                        Chuy???n ??i
                      </button>

                      <button
                        className="dropdown-item font-semibold"
                        type="button"
                      >
                        Danh s??ch y??u th??ch
                      </button>

                      <button
                        className="dropdown-item"
                        type="button"
                        style={{ borderTop: "1px solid #ddd" }}
                      >
                        Cho thu?? nh??
                      </button>
                      <button className="dropdown-item" type="button">
                        T??? ch???c tr???i nghi???m
                      </button>
                      <NavLink to="/profile">
                        <button className="dropdown-item" type="button">
                          T??i kho???n
                        </button>
                      </NavLink>
                      <button
                        className="dropdown-item"
                        type="button"
                        style={{ borderTop: "1px solid #ddd" }}
                      >
                        Tr??? gi??p
                      </button>
                      <button
                        className="dropdown-item"
                        type="button"
                        onClick={handleLogout}
                      >
                        ????ng xu???t
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>

            <Layout className="h-full">
              <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                  // console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                  // console.log(collapsed, type);
                }}
              >
                <Menu theme="dark" mode="inline">
                  <Menu.Item key="1" icon={<UserOutlined />}>
                    <Link to="/admin/users">Qu???n l?? ng?????i d??ng</Link>
                  </Menu.Item>
                  <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                    <Link to="/admin/locations">Qu???n l?? th??ng tin v??? tr??</Link>
                  </Menu.Item>
                </Menu>
              </Sider>
              <Content style={{ margin: "24px 16px 0" }}>
                <Component {...matchProps} />
              </Content>
            </Layout>
          </Fragment>
        );
      }}
    />
  );
}
export default AdminTemplates;
