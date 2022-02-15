import React from 'react'
import './Footer.scss';
import {BsFillHeartFill} from 'react-icons/bs'

export default function Footer() {
    return (
        <div>
            <div className="bottombar">
                    <p style={{ color: 'black'}}>
                        Made with <BsFillHeartFill /> by Divyateja Pasupuleti
                    </p>
            </div>
        </div>
    )
}
