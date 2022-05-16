import React from "react";
import { Link } from "react-router-dom";
import "./css/ErrorPage.css";
function ErrorPage() {
  function renderPage() {
    return (
      <div>
        <div className="error">
          <div className="container-floud">
            <div className="col-xs-12 ground-color text-center">
              <div className="container-error-404">
                <div className="clip">
                  <div className="shadow">
                    <span className="digit thirdDigit" />
                  </div>
                </div>
                <div className="clip">
                  <div className="shadow">
                    <span className="digit secondDigit" />
                  </div>
                </div>
                <div className="clip">
                  <div className="shadow">
                    <span className="digit firstDigit" />
                  </div>
                </div>
                <div className="msg">
                  OH!
                  <span className="triangle" />
                </div>
              </div>
              <h2 className="h1">Sorry! Hông tìm thấy trang 😟😟</h2>
              <Link to="/" className="text-lg font-bold"> Trở về trang chủ</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <div>{renderPage()}</div>;
}
export default ErrorPage;
