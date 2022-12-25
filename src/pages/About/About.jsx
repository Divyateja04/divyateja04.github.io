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
                            <a href="https://docs.google.com/document/d/1eip_mkC91UNcfOs2IGFC7Fx0trhtL18XzPjNDx5ar6g/edit?usp=sharing" className="noTextDecorationHome"><button type="button" className="btn homemybtn-outline" style={{ "width": "80%" }}>View My Resume</button></a>

                            <h1 className="font-weight-light">Education</h1>

                            <hr></hr>
                            <div className="d-flex">
                                <div className="pa4 tc">
                                    <RiMedalFill className="br-100 h3 w3 dib" />
                                </div>
                                <div className="tc">
                                    <p className="mb-0">Present</p>
                                    <h5>BITS Pilani, Hyderabad Campus</h5>
                                    <p className="mb-0">CSE Sophomore</p>
                                </div>
                            </div>

                            <div className="d-flex">
                                <div className="pa4 tc">
                                    <RiMedalFill className="br-100 h3 w3 dib" />
                                </div>
                                <div className="tc">
                                    <p className="mb-0">2021</p>
                                    <h5>FIITJEE Junior College</h5>
                                    <p className="mb-0">Higher Secondary Certificate | 98.1%</p>
                                </div>
                            </div>

                            <div className="d-flex">
                                <div className="pa4 tc">
                                    <RiMedalFill className="br-100 h3 w3 dib" />
                                </div>
                                <div className="tc">
                                    <p className="mb-0">2019</p>
                                    <h5>Jubilee Hills Public School</h5>
                                    <p className="mb-0">Secondary School Certificate | 95.6%</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <h1 className="font-weight-light">Experience</h1>
                            <hr></hr>
                            <div className="justify-between flex flex-row m-0 w-full grid-cols-2">
                                <div className="p-2 tc align-middle mt-5">
                                    <BsBriefcase className="p-2 h3 w3 dib" />
                                </div>
                                <div className="tc p-4 m-3">
                                    <p className="m-0">Jul 2022 - PRESENT</p>
                                    <h5 className="underline m-0">Technical Team</h5>
                                    <p className="m-0">Student Welfare Division, BITS Pilani, Hyderabad Campus</p>
                                </div>
                            </div>
                            <div className="justify-between flex flex-row m-0 w-full grid-cols-2">
                                <div className="p-2 tc align-middle mt-5">
                                    <BsBriefcase className="p-2 h3 w3 dib" />
                                </div>
                                <div className="tc p-4 m-3">
                                    <p className="m-0">Jul 2022 - PRESENT</p>
                                    <h5 className="underline m-0">Joint Secretary</h5>
                                    <p className="m-0">Automation and Robotics Club, BITS Pilani, Hyderabad Campus</p>
                                </div>
                            </div>
                            <div className="justify-between flex flex-row m-0 w-full grid-cols-2">
                                <div className="p-2 tc align-middle mt-5">
                                    <BsBriefcase className="p-2 h3 w3 dib" />
                                </div>
                                <div className="tc p-4 m-3 w-full">
                                    <p className="m-0">Dec 2021 - June 2022</p>
                                    <h5 className="underline m-0">Frontend and Backend Developer</h5>
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
                                <div className="pa2 tc">
                                    <IoBookmarks className="h3 w3 dib" />
                                </div>
                                <div className="tc">
                                    <h5>CBSE National Science Exhibition 2019</h5>
                                    <p className="mb-0">First Prize - National Level</p>
                                </div>
                            </div>
                            <br />

                            <div className="d-flex">
                                <div className="pa2 tc">
                                    <IoBookmarks className="h3 w3 dib" />
                                </div>
                                <div className="tc">
                                    <h5>CBSE School Topper - Computer Science</h5>
                                    <p className="mb-0">Jubilee Hills Public School</p>
                                </div>
                            </div>
                            <br />

                            <div className="d-flex">
                                <div className="pa2 tc">
                                    <IoBookmarks className="h3 w3 dib" />
                                </div>
                                <div className="tc">
                                    <h5>Best Student of the Year</h5>
                                    <p className="mb-0">Jubilee Hills Public School</p>
                                </div>
                            </div>
                            <br />
                        </div>

                        <div className="col-lg-6">
                            <div className="d-flex">
                                <div className="pa2 tc">
                                    <IoBookmarks className="h3 w3 dib" />
                                </div>
                                <div className="tc">
                                    <h5>Virtual Experience Program</h5>
                                    <p className="mb-0">JP Morgan & Chase</p>
                                </div>
                            </div>
                            <br />

                            <div className="d-flex">
                                <div className="pa2 tc">
                                    <IoBookmarks className="h3 w3 dib" />
                                </div>
                                <div className="tc">
                                    <h5>Student Expert</h5>
                                    <p className="mb-0">Postman</p>
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