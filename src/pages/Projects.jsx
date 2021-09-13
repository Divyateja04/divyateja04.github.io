import React from 'react';

import Card from '../components/Card';

import windproject from '../images/windproject.png';
import bestboycertificate from '../images/bestboycertificate.png';
import aimbulance from '../images/aimbulance.jpg';
import waviour from '../images/waviour.jpg';


export default function Projects() {
    return (
        <div>
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
