import React from 'react'
import 'tachyons';

export default function Card({ name, imgLoc, description, awards }) {
    return (
        <div className="tc dib br3 pa3 ma2 grow bw2 shadow-5 card" style={{"width": "600px"}}>
            <img src= {imgLoc} alt="Project" style={{"width": "400px"}}></img>
            <div>
                <h2>{name}</h2>
                <p>{description}</p>
                <hr />
                <ol className="tl">{awards}</ol>
            </div>
        </div>
    )
}
