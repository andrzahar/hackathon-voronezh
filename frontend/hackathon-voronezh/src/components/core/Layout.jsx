import React from "react";
import { connect } from "react-redux";

import { getAuthUser } from "../../store/selectors/authSelector";
import Sidebar from "../sidebar/Sidebar";

const LayoutWithoutStore = ({ user, children }) => {
  if (user.token) {
    return (
      <div className="App">
        <Sidebar />
        {children}
      </div>
    );
  }

  return <>{children}</>;
};

const mapStateToProps = (state) => ({
  user: getAuthUser(state),
});

export const Layout = connect(mapStateToProps)(LayoutWithoutStore);
