import React from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import {NavLink} from 'react-router-dom';

import classes from './SideBar.module.css';
import {useSelector} from "react-redux";

const Sidebar = () => {
    const role = useSelector(state => state.user.role);

    return (
        <div style={{display: 'flex', height: '100vh', overflow: 'scroll initial', position: 'sticky', top: 0}}>
            <CDBSidebar textColor="var(--color--grey)" backgroundColor="var(--color--darkGrey)">
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                    <a href="/" className="text-decoration-none" style={{color: 'inherit'}}>
                        {role === 'none' ? '' : role}
                    </a>
                </CDBSidebarHeader>
                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        {role !== 'none' ?
                            (
                                <div>


                                    <NavLink to={'/calendar'}
                                             className={({isActive}) => (isActive ? classes.activeClicked : '')}>
                                        <CDBSidebarMenuItem icon="calendar" className={classes.sidebarElement}>
                                            Мероприятия
                                        </CDBSidebarMenuItem>
                                    </NavLink>
                                    {
                                        role === 'sportsman' ?
                                            <NavLink to={'/achievements'}
                                                     className={({isActive}) => (isActive ? classes.activeClicked : '')}>
                                                <CDBSidebarMenuItem icon="chart-line"
                                                                    className={classes.sidebarElement}>
                                                    Достижения
                                                </CDBSidebarMenuItem>
                                            </NavLink> :
                                            <></>
                                    }
                                    {
                                        role === 'representative' ?
                                            <NavLink to={'/approve'}
                                                     className={({isActive}) => (isActive ? classes.activeClicked : '')}>
                                                <CDBSidebarMenuItem icon="plus"
                                                                    className={classes.sidebarElement}>
                                                    Доабавить спортсмена
                                                </CDBSidebarMenuItem>
                                            </NavLink> :
                                            <></>
                                    }
                                    {
                                        role === 'administrator' ?
                                            <NavLink to={'/approve'}
                                                     className={({isActive}) => (isActive ? classes.activeClicked : '')}>
                                                <CDBSidebarMenuItem icon="plus"
                                                                    className={classes.sidebarElement}>
                                                    Доабавить представителя
                                                </CDBSidebarMenuItem>
                                            </NavLink> :
                                            <></>
                                    }
                                    <NavLink to={'/FAQ'}
                                             className={({isActive}) => (isActive ? classes.activeClicked : '')}>
                                        <CDBSidebarMenuItem icon="question" className={classes.sidebarElement}>
                                            FAQ
                                        </CDBSidebarMenuItem>
                                    </NavLink>

                                </div>
                            ) :
                            <>
                            </>
                        }

                    </CDBSidebarMenu>
                </CDBSidebarContent>

                {/* <CDBSidebarFooter style={{ textAlign: 'center' }}> */}
                {/*    <div */}
                {/*        style={{ */}
                {/*            padding: '20px 5px', */}
                {/*        }} */}
                {/*    > */}
                {/*        Sidebar Footer */}
                {/*    </div> */}
                {/* </CDBSidebarFooter> */}
            </CDBSidebar>
        </div>
    );
};

export default Sidebar;
