import React from 'react';

import './About.scss';
import 'tachyons';

export default function About() {

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
                                <img alt="logo" className="devicons m-1" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain-wordmark.svg" />
                                <img alt="logo" className="devicons m-1" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-plain-wordmark.svg" />
                                <img alt="logo" className="devicons m-1" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-line.svg" />
                                <br /><br />
                                <img alt="logo" className="devicons m-1" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" />
                                <img alt="logo" className="devicons m-1" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" />
                                <img alt="logo" className="devicons m-1" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
                                <img alt="logo" className="devicons m-1" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
                                <br /><br />
                                <img alt="logo" className="devicons m-1 dark:invert" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
                                <img alt="logo" className="devicons m-1" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" />
                                <img alt="logo" className="devicons m-1" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" />
                                <br /><br />
                            </div>
                            <div className="col-lg-6">
                                <br /><br />
                                <img alt="logo" className="devicons m-1" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg" />
                                <img alt="logo" className="devicons m-1" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain-wordmark.svg" />
                                <img alt="logo" className="devicons m-1" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg" />
                                <img alt="logo" className="devicons m-1 dark:invert" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original-wordmark.svg" />
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
                        <div className="col-lg-6">
                            <div className="d-flex">
                                <div className="tc">
                                    <h5>CBSE National Science Exhibition 2019</h5>
                                    <p className="">First Prize - National Level</p>
                                </div>
                            </div>
                            <br />

                            <div className="d-flex">
                                <div className="tc">
                                    <h5>CBSE School Topper - Computer Science</h5>
                                    <p className="">Jubilee Hills Public School</p>
                                </div>
                            </div>
                            <br />

                            <div className="d-flex">
                                <div className="tc">
                                    <h5>Best Student of the Year</h5>
                                    <p className="">Jubilee Hills Public School</p>
                                </div>
                            </div>
                            <br />
                        </div>

                        <div className="col-lg-6">
                            <div className="d-flex">
                                <div className="tc">
                                    <h5>Virtual Experience Program</h5>
                                    <p className="">JP Morgan & Chase</p>
                                </div>
                            </div>
                            <br />

                            <div className="d-flex">
                                <div className="tc">
                                    <h5>Student Expert</h5>
                                    <p className="">Postman</p>
                                </div>
                            </div>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}