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
                                <Link className="link active" to="/">Divyateja Pasupuleti</Link>
                            </div>

                            <div className="right">
                                <ul>
                                    <li className="link">
                                        <a
                                            className={`link ${props.location.pathname === "/" ? "active" : ""
                                                }`} href="#"
                                        >
                                            Home
                                            <span className="sr-only">(current)</span>
                                        </a>
                                    </li>
                                    <li className="link">
                                        <a
                                            className={`link ${props.location.pathname === "/about" ? "active" : ""
                                                }`} href="#about"
                                        >
                                            About
                                        </a>
                                    </li>
                                    <li className="link">
                                        <a
                                            className={`link ${props.location.pathname === "/projects" ? "active" : ""
                                                }`} href="#projects"
                                        >
                                            Projects
                                        </a>
                                    </li>
                                    <li className="link">
                                        <a
                                            className={`link ${props.location.pathname === "/contact" ? "active" : ""
                                                }`} href="#contact"
                                        >
                                            Contact
                                        </a>
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