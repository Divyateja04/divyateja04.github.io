import React from 'react'
import 'tachyons';

export default function Card({ name, imgLoc, description, awards, url, repo }) {
    return (
        <div className="tc dib br3 pa3 ma2 grow bw2 shadow-5 card">
            <img src= {imgLoc} alt="Project"></img>
            <div>
                <h2>{name}</h2>
                <p>{description}</p>
                {url && <a href={url || '#!'} className="noTextDecorationHome"><button type="button" className="btn mybtn-outline" >View the Project</button></a>}
                {repo && <a href={repo || '#!'} className="noTextDecorationHome"><button type="button" className="btn mybtn-outline" >Repository</button></a>}
                <hr />
                <ol className="tl">{awards}</ol>
            </div>
        </div>
    )
}
