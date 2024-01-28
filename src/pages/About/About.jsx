import React from 'react';

import './About.scss';
import { useDarkMode } from "../../components/Theme/useDarkMode";
import 'tachyons';

export default function About() {
    const [theme, themeToggler] = useDarkMode();

    const achievementsData = [
        {
            "title": "National Finalist",
            "subtitle": "IRIS National Fair"
        },
        {
            "title": "Best Student Award 2018-19",
            "subtitle": "Issued by Jubilee Hills Public School"
        },
        {
            "title": "CBSE School Topper - Computer Science",
            "subtitle": "Issued by Jubilee Hills Public School"
        },
        {
            "title": "JNNSMEE Exhibition Nationalist",
            "subtitle": "Issued by NCERT · Oct 2019"
        },
        {
            "title": "NIRD RISC 2019 - Special Recognition Award",
            "subtitle": "Issued by National Institute of Rural Development and Panchayati Raj (NIRDPR) · Sep 2019"
        },
        {
            "title": "UCO National Ranker",
            "subtitle": "Issued by Unified Council · Feb 2019"
        },
        {
            "title": "CBSE National Science Exhibition - 1st Prize",
            "subtitle": "Issued by Central Board of Secondary Education · Feb 2019"
        },
        {
            "title": "NIRD RISC 2018 - 1st Prize",
            "subtitle": "Issued by National Institute of Rural Development and Panchayati Raj (NIRDPR) · Aug 2018"
        }
    ];

    return (
        <div>
            <div className="about">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-6">
                            <h1 className="font-weight-light">About</h1>
                            <hr></hr>
                            <p>
                                I'm an avid techie and a full stack developer from Hyderabad, India.
                                I am a student from India and am deeply passionate about Computer Science and
                                wish to pursue a career in it. From my very childhood, I used to be passionate
                                about computers, how they work, and how we can program them to make our lives better.
                            </p>
                            <br />

                            <h1 className="font-weight-light">Education</h1>

                            <hr></hr>
                            <div className="d-flex">
                                <div className="tc m-2">
                                    <h5>BITS Pilani Hyderabad Campus | 2025</h5>
                                    <p><i>CSE Junior</i></p>
                                </div>
                            </div>

                            <div className="d-flex">
                                <div className="tc m-2">
                                    <h5>FIITJEE Junior College | 2021</h5>
                                    <p><i>Higher Secondary Certificate | 98.1%</i></p>
                                </div>
                            </div>

                            <div className="d-flex">
                                <div className="tc m-2">
                                    <h5>Jubilee Hills Public School | 2019</h5>
                                    <p><i>Secondary School Certificate | 95.6%</i></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <h1 className="font-weight-light">Experience</h1>
                            <hr></hr>
                            <div >
                                <div className="tc p-4 w-full">
                                    <h5 className="m-0">Summer Intern (May 2023 - Jul 2023)</h5>
                                    <p className="m-0">Indian Institute of Remote Sensing, ISRO</p>
                                </div>
                            </div>
                            <div >
                                <div className="tc p-4 w-full">
                                    <h5 className="m-0">Web Developer (Aug 2022 - Sep 2022)</h5>
                                    <p className="m-0">Acoustic Sensing and Imaging Lab, UiT</p>
                                </div>
                            </div>
                            <div >
                                <div className="tc p-4 w-full">
                                    <h5 className="m-0">Technical Team Lead (Jul 2022 - PRESENT)</h5>
                                    <p className="m-0">Student Welfare Division, BITS Pilani, Hyderabad Campus</p>
                                </div>
                            </div>
                            <div>
                                <div className="tc p-4 w-full">
                                    <h5 className="m-0">Joint Secretary (Jul 2022 - Jul 2023)</h5>
                                    <p className="m-0">Automation and Robotics Club, BITS Pilani, Hyderabad Campus</p>
                                </div>
                            </div>
                            <div>
                                <div className="tc p-4 w-full">
                                    <h5 className="m-0">Full Stack Developer (Dec 2021 - June 2022)</h5>
                                    <p className="m-0">Teenage Concerns, a Mental Health Non Profit Organization</p>
                                </div>
                            </div>

                            <br />
                        </div>
                    </div>

                    <h1 className="font-weight-light">Skills</h1>
                    <hr />
                    <div className="container">
                        <div className="row ">
                            <div className="col-lg-6">
                                <br /><br />
                                <img alt="logo" className="devicons m-1" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-plain.svg" />
                                <img alt="logo" className="devicons m-1" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-line.svg" />
                                <img alt="logo" className="devicons m-1" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain-wordmark.svg" />
                                <img alt="logo" className="devicons m-1" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-plain-wordmark.svg" />
                                <br /><br />
                                <img alt="logo" className="devicons m-1" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" />
                                <img alt="logo" className="devicons m-1" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" />
                                <img alt="logo" className="devicons m-1" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
                                <img alt="logo" className="devicons m-1" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
                                <br /><br />
                                <img alt="logo" className={`devicons m-1 ${theme == "dark" ? 'invert' : ''}`} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
                                <img alt="logo" className="devicons m-1" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" />
                                <img alt="logo" className="devicons m-1" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" />
                                <br /><br />
                            </div>
                            <div className="col-lg-6">
                                <br /><br />
                                <img alt="logo" className="devicons m-1" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg" />
                                <img alt="logo" className={`devicons m-1 ${theme == "dark" ? 'invert' : ''}`} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain-wordmark.svg" />
                                <img alt="logo" className="devicons m-1" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg" />
                                <img alt="logo" className={`devicons m-1 ${theme == "dark" ? 'invert' : ''}`} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original-wordmark.svg" />
                                <br /><br />
                                <img alt="logo" className="devicons m-1" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg" />
                                <img alt="logo" className="devicons m-1" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" />
                                <img alt="logo" className="devicons m-1" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg" />
                                <img alt="logo" className="devicons m-1" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg" />
                                <br /><br />
                                <img alt="logo" className="devicons m-1" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-plain.svg" />
                                <img alt="logo" className="devicons m-1" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-plain-wordmark.svg" />
                                <img alt="logo" className="devicons m-1" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" />
                            </div>
                        </div>
                    </div>

                    <h1 className="font-weight-light">Achievements<br /> and Certifications</h1>
                    <hr></hr>
                    <div className="row">
                        <div className="col-lg-12">
                            {achievementsData.map((achievement, index) => (
                                <div key={index}>
                                    <div className="d-flex">
                                        <div className="tc">
                                            <h5>{achievement.title}</h5>
                                            <p className="">{achievement.subtitle}</p>
                                        </div>
                                    </div>
                                    <br />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}