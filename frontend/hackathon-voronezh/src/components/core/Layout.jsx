import React from 'react';
import {getAuthUser} from "../../store/selectors/authSelector";
import {connect} from "react-redux";
import Sidebar from "../sidebar/Sidebar";

const LayoutWithoutStore = ({user, children}) => {
    console.log(user.token)
    if (user.token) {
        return (
            <div className="App">
                <Sidebar />
                {children}
            </div>
        );
    }

    return (
        <>
            {children}
        </>
    );
};


const mapStateToProps = (state) => ({
    user: getAuthUser(state),
});

export const Layout = connect(mapStateToProps)(LayoutWithoutStore);
