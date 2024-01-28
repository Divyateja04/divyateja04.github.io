import React from 'react';

import windproject from '../../images/windproject.png';
import aimbulance from '../../images/aimbulance.jpg';
import waviour from '../../images/waviour.jpg';
import quizapp from '../../images/quizapp.png';
import teenageconcerns from '../../images/teenageconcerns.png';
import umoasi from '../../images/umoasi.png';
import arcbphc from '../../images/arcbphc.png';
import leap from '../../images/leap.png';
import trackie from '../../images/trackie.png';
import vmwebsite from '../../images/vmwebsite.png';
import donutbot from '../../images/donutbot.png';
import handouts from '../../images/handouts.png';
import oopsie from '../../images/oopsie.png';

export default function Projects() {
    const projectsData = [
        {
            title: 'Quiz App.',
            imageSrc: quizapp, // Replace with the actual path
            description: 'A secure and user-friendly quiz app interface that detects malpractices and auto-submits the user\'s response. It can detect tab changes and window changes as well.',
            link: 'https://quizapp-ten-swart.vercel.app/',
        },
        {
            title: 'Handouts For You.',
            imageSrc: handouts, // Replace with the actual path
            description: 'Handouts search engine for BITS Pilani Hyderabad Campus',
            link: 'https://handoutsforyou.vercel.app',
        },
        {
            title: 'Oopsie',
            imageSrc: oopsie,// Replace with the actual path
            description: 'A ready-to-scale, web application that supported placing orders, order status, inventory management, Admin, Manager, and User functionality using and authentication using Spring Secure',
            link: 'https://github.com/Divyateja04/Oopsie_BITS_CSF213',
        },
        {
            title: 'Trackie',
            imageSrc: trackie, // Replace with the actual path
            description: 'An Expense and Eval Tracker',
            link: 'https://github.com/Divyateja04/Trackie',
        },
        {
            title: 'Teenage Concerns',
            imageSrc: teenageconcerns, // Replace with the actual path
            description: 'This project lets anonymous users register and get a mentor assigned to them with whom they can talk about anything they want, say life issues, depression, etc.',
            link: 'https://github.com/Divyateja04/TeenageConcerns-API-GraphQL',
        },
        {
            title: 'UMO ASI Website',
            imageSrc: umoasi,// Replace with the actual path
            description: 'Website made for UMO ASI - The Arctic University of Norway',
            link: 'https://www.asilab.eu/',
        },
        {
            title: 'ARC Website',
            imageSrc: arcbphc, // Replace with the actual path
            description: 'A blog website, made using NextJS + Tailwind and hosted on Vercel at ARC-BPHC',
            link: 'https://arcbphc.vercel.app/',
        },
        {
            title: 'Verbamaximus Website 2022/23',
            imageSrc: vmwebsite, // Replace with the actual path
            description: 'Website for a literary fest of BPHC',
            link: 'https://verbamaximus23.vercel.app/',
        },
        {
            title: 'Donut Discord Bot',
            imageSrc: donutbot, // Replace with the actual path
            description: 'A bot made to help managing discord servers during the covid period',
            link: '', // Replace with the actual link
        },
    ];

    const roboticsProjects = [
        {
            title: 'Aimbulance',
            imageSrc: aimbulance, // Replace with the actual path
            description: 'An Automatic Ambulance system that uses drones and security camera systems to automatically identify accidents and report them to the nearest hospital and also fill out forms for them',
        },
        {
            title: 'Waviour',
            imageSrc: waviour, // Replace with the actual path
            description: 'A device that saves people from drowning in the ocean',
        },
        {
            title: 'Prototype for a Wind-driven Power System',
            imageSrc: windproject, // Replace with the actual path
            description: 'In-house science exhibition winner :)',
        },
        {
            title: 'Haar Cascade-Based Driving Analysis and Scoring System',
            imageSrc: leap, // Replace with the actual path
            description: 'A Simple Analysis System that judges you based on your driving skills and helps you drive safer',
        },
        {
            title: 'Leap Motion Controller Based Robot',
            imageSrc: leap, // Replace with the actual path
            description: 'Innovative RC car-esque robot which is controlled with the motions of one’s hand alone',
        },
    ];

    return (
        <>
            <h1 className="font-weight-light">Projects</h1>
            <div className="container">
                <h2 class="f3 fw4 pa2 mv0 m-3">Development Projects</h2>

                <hr />
                <div className="cf flex flex-wrap justify-center">
                    {projectsData.map((project, index) => (
                        <div key={index} className="fl w-100-m w-40-l pa2">
                            <img src={project.imageSrc} className="w-100 db outline black-10" alt={`Project ${index + 1}`} />
                            {project.link ? <a href={project.link}>
                                <dl className="mt2 f6 lh-copy">
                                    <dt className="clip">Title</dt>
                                    <dd className="ml0 w-100">{project.title}</dd>
                                    <dt className="clip">Description</dt>
                                    <dd className="ml0 gray w-100">{project.description}</dd>
                                </dl>
                            </a> : <a href={project.link}>
                                <dl className="mt2 f6 lh-copy">
                                    <dt className="clip">Title</dt>
                                    <dd className="ml0 w-100">{project.title}</dd>
                                    <dt className="clip">Description</dt>
                                    <dd className="ml0 gray w-100">{project.description}</dd>
                                </dl>
                            </a>}
                        </div>
                    ))}
                </div>
            </div>
            {/* ================================================================================================= */}
            <div className="container">
                <h2 class="f3 fw4 pa3 mv0">Robotics Projects</h2>
                <hr />
                <div class="cf flex flex-wrap justify-center">
                    {roboticsProjects.map((project, index) => (
                        <div key={index} className="fl w-100-m w-40-l pa2">
                            <img src={project.imageSrc} className="w-100 db outline black-10" alt={`Project ${index + 1}`} />
                            {project.link ? <a href={project.link}>
                                <dl className="mt2 f6 lh-copy">
                                    <dt className="clip">Title</dt>
                                    <dd className="ml0 w-100">{project.title}</dd>
                                    <dt className="clip">Description</dt>
                                    <dd className="ml0 gray w-100">{project.description}</dd>
                                </dl>
                            </a> : <a href={project.link}>
                                <dl className="mt2 f6 lh-copy">
                                    <dt className="clip">Title</dt>
                                    <dd className="ml0 w-100">{project.title}</dd>
                                    <dt className="clip">Description</dt>
                                    <dd className="ml0 gray w-100">{project.description}</dd>
                                </dl>
                            </a>}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
