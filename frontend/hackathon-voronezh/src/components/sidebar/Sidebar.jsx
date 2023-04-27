import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

import classes from "./SideBar.module.css";

const Sidebar = () => {
  return (
    <div
      style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
    >
      <CDBSidebar
        textColor="var(--color--grey)"
        backgroundColor="var(--color--darkGrey)"
      >
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            sportsman/admin..
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink to={"/calendar"} activeClassName={classes.activeClicked}>
              <CDBSidebarMenuItem
                icon="calendar"
                className={classes.sidebarElement}
              >
                Мероприятия
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              to={"/achievements"}
              activeClassName={classes.activeClicked}
            >
              <CDBSidebarMenuItem
                icon="chart-line"
                className={classes.sidebarElement}
              >
                Достижения
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "20px 5px",
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
