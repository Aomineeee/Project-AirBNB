import { Route } from "react-router-dom";
import { Fragment } from "react";
import TopNavBar from "../../Components/TopNavBar/TopNavBar";
import Footer from "../../Components/Footer/Footer";


function UserTemplates(props) {
    let { Component, ...restProps } = props;
    return <Route {...restProps} render={(matchProps) => {
        return (
            <Fragment>
                <TopNavBar />
                <Component {...matchProps} />
                <Footer />
            </Fragment>
        )
    }}
    />
}
export default UserTemplates;