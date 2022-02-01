import React from 'react';

import { Link, withRouter } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../Theme/globalStyles";
import { lightTheme, darkTheme } from "../Theme/Theme";
import { useDarkMode } from "../Theme/useDarkMode";
import Toggle from "../Theme/Toggler"

import './Navigation.scss';

const Navigation = (props) => {

    const [theme, themeToggler] = useDarkMode();

    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    return (

        <ThemeProvider theme={themeMode}>
            <>
            <GlobalStyles />
                <div>
                    <nav className="topbar">
                        <div className="wrapper">
                            <div className="left">
                                <Link className="link active"  to="/">Divyateja Pasupuleti</Link>
                            </div>

                            <div className="right">
                                <ul>
                                <li className="link">
                                    <Link
                                        className={`link ${
                                        props.location.pathname === "/" ? "active" : ""
                                        }`} to="/"
                                    >
                                        Home
                                        <span className="sr-only">(current)</span>
                                    </Link>
                                </li>
                                <li className="link">
                                    <Link
                                        className={`link ${
                                        props.location.pathname === "/about" ? "active" : ""
                                        }`} to="/about"
                                    >
                                        About
                                    </Link>
                                </li>
                                <li className="link">
                                    <Link
                                        className={`link ${
                                        props.location.pathname === "/projects" ? "active" : ""
                                        }`} to="/projects"
                                    >
                                        Projects
                                    </Link>
                                </li>
                                <li className="link">
                                    <Link
                                        className={`link ${
                                        props.location.pathname === "/contact" ? "active" : ""
                                        }`} to="/contact"
                                    >
                                        Contact
                                    </Link>
                                </li>
                                {/* <li className="link">
                                    <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                                        <FaBars />
                                    </a>
                                </li> */}
                                <li className="link">
                                    <Toggle theme={theme} toggleTheme={themeToggler} />
                                </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </>
    </ThemeProvider>
    )
}

export default withRouter(Navigation);