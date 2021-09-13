import React from 'react';

import './About.scss';

import 'tachyons';

import { RiMedalFill } from 'react-icons/ri';

export default function About() {

    return (
        <div>
            <div className="about">
                <div className="container">
                    <div className="row align-items-center">
                    <div className="col-lg-6">
                        <h1 className="font-weight-light">About</h1>
                        <hr></hr>
                        <p>
                            I'm an avid techie and a full stack developer from Hyderabad, India. 
                            I am a student in 12th Grade from India and am deeply passionate about 
                            Computer Science and wish to pursue a career in it. From my very childhood, 
                            I used to be passionate about computers, how they work, and how we can 
                            program them to make our lives better.
                            <br></br><br></br>
                            My Skills Inlude:
                            <br />
                            <img alt="logo" className="devicons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-plain.svg" />
                            <img alt="logo" className="devicons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain-wordmark.svg" />
                            <img alt="logo" className="devicons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-plain-wordmark.svg" />
                            <img alt="logo" className="devicons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" />
                            <img alt="logo" className="devicons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" />
                            <img alt="logo" className="devicons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
                            <img alt="logo" className="devicons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
                            <br />
                            And have experience working with:
                            <br />
                            <img alt="logo" className="devicons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg" />
                            <img alt="logo" className="devicons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain-wordmark.svg" />
                            <img alt="logo" className="devicons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg" />
                            <br />
                            And also some basic knowledge about:
                            <br />
                            <img alt="logo" className="devicons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-line.svg" />
                            <img alt="logo" className="devicons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg" />
                            <img alt="logo" className="devicons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg" />
                            <img alt="logo" className="devicons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg" />
                            <br />
                            <a href="https://docs.google.com" className="noTextDecorationHome"><button type="button" className="btn mybtn-outline" >Resume</button></a>
                                
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <h1 className="font-weight-light">Education</h1>
                        
                        <hr></hr>

                        <div className="d-flex">
                            <div className="pa4 tc">
                                <RiMedalFill className="br-100 h3 w3 dib"/> 
                            </div>
                            <div className="tc">
                                <p className="mb-0">2025</p>
                                <h4>College Name</h4>
                                <p className="mb-0">CSE Freshman</p>
                            </div>
                        </div>

                        <div className="d-flex">
                            <div className="pa4 tc">
                                <RiMedalFill className="br-100 h3 w3 dib"/> 
                            </div>
                            <div className="tc">
                                <p className="mb-0">2021</p>
                                <h4>FIITJEE Junior College</h4>
                                <p className="mb-0">Higher Secondary Certificate | 98.1%</p>
                            </div>
                        </div>

                        <div className="d-flex">
                            <div className="pa4 tc">
                                <RiMedalFill className="br-100 h3 w3 dib"/> 
                            </div>
                            <div className="tc">
                                <p className="mb-0">2019</p>
                                <h4>Jubilee Hills Public School</h4>
                                <p className="mb-0">Secondary School Certificate | 95.6%</p>
                            </div>
                        </div>

                    </div>
                    </div>
                </div>
            </div>   
        </div>
    )
}
