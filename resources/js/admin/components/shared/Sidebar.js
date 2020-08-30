import React, { Component } from "react";
import { NavLink ,Link } from "react-router-dom";

class Sidebar extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="gd_fav_sidebar">
                    <div className="gd_fav_sidebar_heading float_left"> 
                        <Link to="/admin/dashboard" href="javascript:void(0);" className="in_logoo">
                            React Blog
                        </Link>
                        <div className="gd_fev_toggle d-none d-sm-none d-md-none d-lg-block d-xl-block">
                            <div className="bar1"></div>
                            <div className="bar2"></div>
                            <div className="bar3"></div>
                        </div>
                    </div>
                    <div className="gd_fav_sidebar_nav float_left">
                        <ul>
                            <li>
                                <NavLink exact={true} activeClassName='nav_active'
                                  to="/admin/dashboard" href="javascript:void(0);">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                    >
                                        <defs>
                                            <clipPath id="clip-path">
                                                <rect
                                                    width="20"
                                                    height="20"
                                                    fill="none"
                                                />
                                            </clipPath>
                                        </defs>
                                        <g
                                            id="Dashboard"
                                            clipPath="url(#clip-path)"
                                        >
                                            <path
                                                id="Path_435"
                                                data-name="Path 435"
                                                d="M3,8.491,12,2l9,6.491v10.2a1.931,1.931,0,0,1-2,1.855H5a1.931,1.931,0,0,1-2-1.855Z"
                                                transform="translate(-2 -1.073)"
                                                fill="none"
                                                stroke="#fff"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                            />
                                            <path
                                                id="Path_436"
                                                data-name="Path 436"
                                                d="M9,21.273V12h6v9.273"
                                                transform="translate(-2 -1.8)"
                                                fill="none"
                                                stroke="#fff"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                            />
                                        </g>
                                    </svg>
                                    <span>Dashboard</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink exact={true} activeClassName='nav_active' 
                                to="/admin/authors" href="javascript:void(0);">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                    >
                                        <defs>
                                            <clipPath id="clip-path">
                                                <rect
                                                    width="18"
                                                    height="18"
                                                    fill="none"
                                                />
                                            </clipPath>
                                        </defs>
                                        <g
                                            id="Inspectors"
                                            clipPath="url(#clip-path)"
                                        >
                                            <path
                                                id="Path_444"
                                                data-name="Path 444"
                                                d="M20,20.564V18.709A3.863,3.863,0,0,0,16,15H8a3.863,3.863,0,0,0-4,3.709v1.855"
                                                transform="translate(-3 -2.945)"
                                                fill="none"
                                                stroke="#fff"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                            />
                                            <ellipse
                                                id="Ellipse_340"
                                                data-name="Ellipse 340"
                                                cx="4"
                                                cy="3.5"
                                                rx="4"
                                                ry="3.5"
                                                transform="translate(5 1)"
                                                fill="none"
                                                stroke="#fff"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                            />
                                        </g>
                                    </svg>
                                    <span>Authors</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink exact={true} activeClassName='nav_active'
                                 to="/admin/users" href="javascript:void(0);">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                    >
                                        <defs>
                                            <clipPath id="clip-path">
                                                <rect
                                                    width="18"
                                                    height="18"
                                                    fill="none"
                                                />
                                            </clipPath>
                                        </defs>
                                        <g
                                            id="Inspectors"
                                            clipPath="url(#clip-path)"
                                        >
                                            <path
                                                id="Path_444"
                                                data-name="Path 444"
                                                d="M20,20.564V18.709A3.863,3.863,0,0,0,16,15H8a3.863,3.863,0,0,0-4,3.709v1.855"
                                                transform="translate(-3 -2.945)"
                                                fill="none"
                                                stroke="#fff"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                            />
                                            <ellipse
                                                id="Ellipse_340"
                                                data-name="Ellipse 340"
                                                cx="4"
                                                cy="3.5"
                                                rx="4"
                                                ry="3.5"
                                                transform="translate(5 1)"
                                                fill="none"
                                                stroke="#fff"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                            />
                                        </g>
                                    </svg>{" "}
                                    <span>Users</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink exact={true} activeClassName='nav_active'
                                    to="/admin/blogs"
                                    href="javascript:void(0);"
                                    className=""
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="19.5"
                                        height="16.333"
                                        viewBox="0 0 19.5 16.333"
                                    >
                                        <defs></defs>
                                        <g transform="translate(0.25 -42.416)">
                                            <g transform="translate(0 42.666)">
                                                <path
                                                    fill="#fff"
                                                    stroke="#fff"
                                                    d="M17.417,45.041H13.458v-.792a1.585,1.585,0,0,0-1.583-1.583H7.125a1.585,1.585,0,0,0-1.583,1.583v.792H1.583A1.585,1.585,0,0,0,0,46.624V56.916A1.585,1.585,0,0,0,1.583,58.5H17.417A1.585,1.585,0,0,0,19,56.916V46.624A1.585,1.585,0,0,0,17.417,45.041ZM6.333,44.249a.793.793,0,0,1,.792-.792h4.75a.793.793,0,0,1,.792.792v.792H6.333ZM18.208,56.916a.793.793,0,0,1-.792.792H1.583a.793.793,0,0,1-.792-.792V51.154a1.565,1.565,0,0,0,.792.22H7.917v1.187a.4.4,0,0,0,.4.4h2.375a.4.4,0,0,0,.4-.4V51.374h6.333a1.565,1.565,0,0,0,.792-.22v5.762Zm-9.5-4.75V50.583h1.583v1.583Zm9.5-2.375a.793.793,0,0,1-.792.792H11.083v-.4a.4.4,0,0,0-.4-.4H8.312a.4.4,0,0,0-.4.4v.4H1.583a.793.793,0,0,1-.792-.792V46.624a.793.793,0,0,1,.792-.792H17.417a.793.793,0,0,1,.792.792Z"
                                                    transform="translate(0 -42.666)"
                                                />
                                            </g>
                                        </g>
                                    </svg>{" "}
                                    <span>Blogs</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink exact={true} activeClassName='nav_active'
                                 href="javascript:void(0);" to="/admin/blog-categories">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="14"
                                        height="16"
                                        viewBox="0 0 14 16"
                                    >
                                        <defs>
                                            <clipPath id="clip-path">
                                                <rect
                                                    width="14"
                                                    height="16"
                                                    fill="none"
                                                />
                                            </clipPath>
                                        </defs>
                                        <g
                                            id="Applications"
                                            clipPath="url(#clip-path)"
                                        >
                                            <line
                                                id="Line_1"
                                                data-name="Line 1"
                                                y1="10"
                                                transform="translate(13 6)"
                                                fill="none"
                                                stroke="#fff"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                            />
                                            <line
                                                id="Line_2"
                                                data-name="Line 2"
                                                y1="15"
                                                transform="translate(7 1)"
                                                fill="none"
                                                stroke="#fff"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                            />
                                            <line
                                                id="Line_3"
                                                data-name="Line 3"
                                                y1="6"
                                                transform="translate(1 10)"
                                                fill="none"
                                                stroke="#fff"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                            />
                                        </g>
                                    </svg>{" "}
                                    <span>Blog Categories</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink exact={true} activeClassName='nav_active'
                                 to="/admin/blog-tags" href="javascript:void(0);">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18.417"
                                        height="17.1"
                                        viewBox="0 0 18.417 17.1"
                                    >
                                        <g
                                            id="Map"
                                            transform="translate(0.152 0.154)"
                                        >
                                            <g
                                                id="Group_202"
                                                data-name="Group 202"
                                            >
                                                <path
                                                    id="Path_1278"
                                                    data-name="Path 1278"
                                                    d="M17.772.061a.662.662,0,0,0-.554,0h0L.343,7.519a.555.555,0,0,0-.276.77A.616.616,0,0,0,.509,8.6L6.893,9.673l1.949,6.651.168.3.352.165a.651.651,0,0,0,.088.006A.625.625,0,0,0,10,16.478L18.048.83A.555.555,0,0,0,17.772.061ZM9.727,14.425,8.034,9.077a.6.6,0,0,0-.495-.459L2.557,7.776,16.11,1.857Z"
                                                    transform="translate(-0.001 0)"
                                                    fill="#fff"
                                                    stroke="#fff"
                                                    strokeWidth="0.3"
                                                />
                                            </g>
                                        </g>
                                    </svg>{" "}
                                    <span>Blog Tags</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Sidebar;
