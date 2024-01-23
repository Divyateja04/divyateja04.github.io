import React from 'react';

import { AiOutlineMedium, AiOutlineLinkedin, AiOutlineTwitter, AiOutlineGithub } from 'react-icons/ai';

import 'tachyons';
import './Contact.scss';

export default function Contact() {
    return (
        <div>
            <div className="contact">
                <div className="container">
                    <div className="row align-items-center my-5">
                        <div className="col-lg-12">
                            <h1 className="font-weight-light">Contact Me!</h1>
                            <hr></hr>
                            <p>
                                Programming has always been interesting for me. It always helps
                                me think from a different perspective. Even though I’m busy studying,
                                I always ensure that I have time to have fun with programming and other
                                electronics. No matter what the situation is, or how many exams I have
                                coming up, I never cease to have fun with them.
                            </p>
                            <br></br>
                            <p>
                                So, If you would like to contact me you can reach out to me through the following platforms:
                                <br></br>
                                I would love to collaborate and work on some exciting projects with you!
                                <br />
                                <br />
                                <a href={"https://www.linkedin.com/in/divyateja-pasupuleti"}><AiOutlineLinkedin className="h3 w3 dib noTextDecoration linkedin" /></a>
                                <a href={"https://twitter.com/thenicecat_"}><AiOutlineTwitter className="h3 w3 dib noTextDecoration twitter" /></a>
                                <a href={"https://github.com/Divyateja04"}><AiOutlineGithub className="h3 w3 dib noTextDecoration github" /></a>
                                <a href={"https://medium.com/@divyateja"}><AiOutlineMedium className="h3 w3 dib noTextDecoration medium" /></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
