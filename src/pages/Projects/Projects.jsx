import React from 'react';

import Card from '../../components/Card';

import windproject from '../../images/windproject.png';
import bestboycertificate from '../../images/bestboycertificate.png';
import aimbulance from '../../images/aimbulance.jpg';
import waviour from '../../images/waviour.jpg';
import intlspaceapiproj from '../../images/intlspaceapiproj.png';
import smartbrainsproj from '../../images/smartbrainsproj.png';
import robofriendsproj from '../../images/robofriendsproj.png';
import spotifyrecomproj from '../../images/spotifyrecomproj.png';

export default function Projects() {
    return (
        <div>
            {/* Spotify-Postman Project Card */}
            <Card 
            name={"Spotify API App using Postman!"}
            description={`A spotify API based recommendation app that gives you recommendations based 
            on the artists you have given as input`}
            imgLoc={spotifyrecomproj}
            url={'https://heathered-climbing-ravioli.glitch.me/'}
            repo={'https://glitch.com/edit/#!/heathered-climbing-ravioli'}
            />
            {/* Smartbrains Project Card */}
            <Card 
            name={"Smartbrains!"}
            description={`A react based app that uses machine learning and image recognition 
            to identify faces in a picture and also store your profile details 
            using Postgres SQL, Node-js and other APIs`}
            imgLoc={smartbrainsproj}
            url={'https://smartbrains75281.herokuapp.com/'}
            repo={'https://github.com/Divyateja04/smartbrains'}
            />
            {/* RoboFriends Project Card */}
            <Card 
            name={"RoboFriends!"}
            description={`A react based app that uses APIs to get data from a remote server abd filters
            robots based on text given`}
            imgLoc={robofriendsproj}
            url={'https://divyateja04.github.io/robofriends/'}
            repo={'https://github.com/Divyateja04/robofriends'}
            />
            {/* ISS API Card */}
            <Card 
            name={"ISS-API-APP"}
            description={`A react based API app to get the exact latitude and longitude 
            of the International Space Station`}
            imgLoc={intlspaceapiproj}
            url={'https://divyateja04.github.io/iss-api-app/'}
            repo={'https://github.com/Divyateja04/iss-api-app'}
            />
            {/* Waviour Card */}
            <Card 
            name={"Waviour"}
            description={"A device that saves people from drowning in the ocean"}
            imgLoc={waviour}
            awards={
                <div>
                    <li>1st Prize in CBSE National Science Exhibition</li>
                    <li>1st Prize in CBSE Regional Science Exhibition</li>
                    <li>1st Prize in NIRD Rural Innovator's Startup Conclave 2018</li>
                </div>
            }
            />
            {/* Aimbulance Card */}
            <Card 
            name={"AiMBULANCE"}
            description={`An Automatic Ambulance system that uses drones and security camera systems 
            to automatically identify accidents and report them to the nearest hospital and also fill
             out forms for them`}
            imgLoc={aimbulance}
            awards={
                <div>
                    <li>Special Recognition in NIRD Rural Innovator's Startup Conclave 2019</li>
                </div>
            }
            />
            {/* Wind Power System Card */}
            <Card 
            name={"Prototype for an wind-driven power system"}
            description={`I had also taken part in my school's internal Science Exhibition 
            and secured the first prize for a more efficient prototype for windmills`}
            imgLoc={windproject}
            awards={
                <div>
                    <li>School's Internal Science Exhibition 2015</li>
                </div>
            }
            />
            {/* Best Student Card */}
            <Card 
            name={"Jubilee Hills Public School's Best Student of the Year Award"}
            description={`I was also awarded the best student of the school for the academic year 
            2018-19. The best student of the school was decided on a bunch of factors. Some of them 
            included Grades, External Achievements, and Disciplinary History and previous Leadership 
            Positions held at school. We also had to qualify for an interview that was conducted by 
            the board of the school.`}
            imgLoc={bestboycertificate}
            />

        </div>
    )
}
