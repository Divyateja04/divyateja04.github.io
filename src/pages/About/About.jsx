import React from 'react';

import './About.scss';
import 'tachyons';

import { RiMedalFill } from 'react-icons/ri';
import { BsBriefcase } from 'react-icons/bs';
import { IoBookmarks } from 'react-icons/io5';

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
                            <a href="https://drive.google.com/drive/folders/1j9LecEcO558K2Cf3HxV8X0IYYntAr8x_?usp=sharing" className="noTextDecorationHome"><button type="button" className="btn homemybtn-outline" style={{ "width": "80%" }}>View My Resume</button></a>

                            <h1 className="font-weight-light">Education</h1>

                            <hr></hr>
                            <div className="d-flex">
                                <div className="tc">
                                    <h5>BITS Pilani, Hyderabad Campus</h5>
                                    <p className="">CSE Junior</p>
                                </div>
                            </div>

                            <div className="d-flex">
                                <div className="tc">
                                    <h5>FIITJEE Junior College | 2021</h5>
                                    <p className="">Higher Secondary Certificate | 98.1%</p>
                                </div>
                            </div>

                            <div className="d-flex">
                                <div className="tc">
                                    <h5>Jubilee Hills Public School | 2019</h5>
                                    <p className="">Secondary School Certificate | 95.6%</p>
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
                    <hr></hr>
                    Programming:
                    <br />
                    <img alt="logo" className="devicons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-plain.svg" />
                    <img alt="logo" className="devicons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain-wordmark.svg" />
                    <img alt="logo" className="devicons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-plain-wordmark.svg" />
                    <img alt="logo" className="devicons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-line.svg" />
                    <br /><br />
                    <div class="bg-moon-gray br-pill h1 overflow-y-hidden mb4">
                        <div class="bg-green br-pill h1 shadow-1 w-70 progress-bar" ><p style={{ "font-size": "17px" }}>70%</p></div>
                    </div>

                    I love working with:
                    <br />
                    <img alt="logo" className="devicons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" />
                    <img alt="logo" className="devicons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" />
                    <img alt="logo" className="devicons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
                    <img alt="logo" className="devicons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
                    <img alt="logo" className="devicons invert" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
                    <img alt="logo" className="devicons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg" />
                    <img alt="logo" className="devicons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" />
                    <img alt="logo" className="devicons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg" />
                    <img alt="logo" className="devicons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" />
                    <img alt="logo" className="devicons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" />
                    <br /><br />
                    <div class="bg-moon-gray br-pill h1 overflow-y-hidden mb4">
                        <div class="bg-green br-pill h1 shadow-1 w-90 progress-bar inverse" ><p style={{ "font-size": "17px" }}>90%</p></div>
                    </div>

                    And have experience working with:
                    <br />
                    <img alt="logo" className="devicons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg" />
                    <img alt="logo" className="devicons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain-wordmark.svg" />
                    <img alt="logo" className="devicons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg" />
                    <img alt="logo" className="devicons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" />
                    <br /><br />
                    <div class="bg-moon-gray br-pill h1 overflow-y-hidden mb4">
                        <div class="bg-green br-pill h1 shadow-1 w-50 progress-bar" ><p style={{ "font-size": "17px" }}>50%</p></div>
                    </div>

                    And also some basic knowledge about:
                    <br />
                    <img alt="logo" className="devicons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-line.svg" />
                    <img alt="logo" className="devicons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg" />
                    <img alt="logo" className="devicons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg" />
                    <img alt="logo" className="devicons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg" />
                    <br /><br />
                    <div class="bg-moon-gray br-pill h1 overflow-y-hidden mb4">
                        <div class="bg-green br-pill h1 shadow-1 w-30 progress-bar" ><p style={{ "font-size": "17px" }}>30%</p></div>
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
        </div>
    )
}