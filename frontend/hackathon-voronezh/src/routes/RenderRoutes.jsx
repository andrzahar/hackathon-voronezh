import { useMemo } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { getRoutesByAuth } from "./common/getRoutesByAuth";
import { ROUTE_AUTH, ROUTE_MAIN_CONTAINER } from "./routes.js";
import { getAuthUser } from "../store/selectors/authSelector.js";
import { connect } from "react-redux";

const RenderRoutesWithoutStore = ({ user }) => {
    // TODO: поправить юзера
    const routesByAuth = useMemo(
        () => getRoutesByAuth(user), [user],
    );

    const baseRoute = useMemo(
        () => (!!user ?  ROUTE_MAIN_CONTAINER : ROUTE_AUTH),
        [user],
    );

    return (
      <Routes>
          {routesByAuth.map(item => (
            <Route key={item.path} path={item.path} element={<item.Element />} />
          ))}
          <Route path="*" element={<Navigate to={baseRoute} replace />} />
      </Routes>
    );
};

const mapStateToProps = (state) => ({
    user: getAuthUser(state),
});

export const RenderRoutes = connect(mapStateToProps)(RenderRoutesWithoutStore);