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
                            <br />
                            <a href={"https://www.linkedin.com/in/divyateja-pasupuleti"}><AiOutlineLinkedin className="h3 w3 dib noTextDecoration linkedin" /></a>
                            <a href={"https://twitter.com/thedonutcat"}><AiOutlineTwitter className="h3 w3 dib noTextDecoration twitter" /></a>
                            <a href={"https://github.com/Divyateja04"}><AiOutlineGithub className="h3 w3 dib noTextDecoration github" /></a>
                            <a href={"https://medium.com/@divyateja"}><AiOutlineMedium className="h3 w3 dib noTextDecoration medium" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
