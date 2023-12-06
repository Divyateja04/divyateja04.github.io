import React from 'react';

import windproject from '../../images/windproject.png';
import aimbulance from '../../images/aimbulance.jpg';
import waviour from '../../images/waviour.jpg';
import smartbrainsproj from '../../images/smartbrainsproj.png';
import robofriendsproj from '../../images/robofriendsproj.png';
import teenageconcerns from '../../images/teenageconcerns.png';
import umoasi from '../../images/umoasi.png';
import arcbphc from '../../images/arcbphc.png';
import leap from '../../images/leap.png';
import trackie from '../../images/trackie.png';
import vmwebsite from '../../images/vmwebsite.png';
import donutbot from '../../images/donutbot.png';
import handouts from '../../images/handouts.png';

export default function Projects() {
    return (
        <>
            <article>
                <h1 className="font-weight-light">Projects</h1>
                <h2 class="f3 fw4 pa2 mv0 m-3">Development Projects</h2>
                <div class="cf pa5 flex flex-wrap justify-center">
                    <div class="fl w-40 w-25-m w-30-l pa2">
                        <img src={handouts} class="w-100 db outline black-10" />
                        <a href="https://handoutsforyou.vercel.app">
                            <dl class="mt2 f6 lh-copy">
                                <dt class="clip">Title</dt>
                                <dd class="ml0 w-100">HandoutsForYou.</dd>
                                <dt class="clip">Description</dt>
                                <dd class="ml0 gray w-100">Handouts search engine for BITS Pilani Hyderabad Campus</dd>
                            </dl>
                        </a>
                    </div>
                    <div class="fl w-40 w-25-m w-30-l pa2">
                        <img src={trackie} class="w-100 db outline black-10" />
                        <a href="https://github.com/Divyateja04/Trackie">
                            <dl class="mt2 f6 lh-copy">
                                <dt class="clip">Title</dt>
                                <dd class="ml0 w-100">Trackie</dd>
                                <dt class="clip">Description</dt>
                                <dd class="ml0 gray w-100">An Expense and Eval Tracker</dd>
                            </dl>
                        </a>
                    </div>
                    <div class="fl w-40 w-25-m w-30-l pa2">
                        <img src={teenageconcerns} class="w-100 db outline black-10" />
                        <a href="https://github.com/Divyateja04/TeenageConcerns-API-GraphQL">
                            <dl class="mt2 f6 lh-copy">
                                <dt class="clip">Title</dt>
                                <dd class="ml0 w-100 ttu">Teenage Concerns</dd>
                                <dt class="clip">Description</dt>
                                <dd class="ml0 gray w-100">This project lets anonymous users register and get a mentor assigned to them with whom they can talk about anything they want, say life issues, depression, etc.</dd>
                            </dl>
                        </a>
                    </div>
                    <div class="fl w-40 w-25-m w-30-l pa2">
                        <img src={umoasi} class="w-100 db outline black-10" />
                        <a href="https://www.asilab.eu/"><dl class="mt2 f6 lh-copy">
                            <dt class="clip">Title</dt>
                            <dd class="ml0 w-100">UMO ASI Website</dd>
                            <dt class="clip">Desc</dt>
                            <dd class="ml0 gray w-100">Website made for UMO ASI - The Arctic University of Norway</dd>
                        </dl></a>
                    </div>
                    <div class="fl w-40 w-25-m w-30-l pa2">
                        <img src={arcbphc} class="w-100 db outline black-10" />
                        <a href="https://arcbphc.vercel.app/"><dl class="mt2 f6 lh-copy">
                            <dt class="clip">Title</dt>
                            <dd class="ml0 w-100">ARC Website</dd>
                            <dt class="clip">Description</dt>
                            <dd class="ml0 gray w-100">A blog website, made using NextJS + Tailwind and hosted on Vercel at ARC-BPHC</dd>
                        </dl></a>
                    </div>
                    <div class="fl w-40 w-25-m w-30-l pa2">
                        <img src={vmwebsite} class="w-100 db outline black-10" />
                        <a href="https://verbamaximus23.vercel.app/"><dl class="mt2 f6 lh-copy">
                            <dt class="clip">Title</dt>
                            <dd class="ml0 w-100">Verbamaximus Website 2022/23</dd>
                            <dt class="clip">Description</dt>
                            <dd class="ml0 gray w-100">Website for a literary fest of BPHC</dd>
                        </dl></a>
                    </div>
                    <div class="fl w-40 w-25-m w-30-l pa2">
                        <img src={donutbot} class="w-100 db outline black-10" />
                        <a href=""><dl class="mt2 f6 lh-copy">
                            <dt class="clip">Title</dt>
                            <dd class="ml0 w-100">Donut Discord Bot</dd>
                            <dt class="clip">Description</dt>
                            <dd class="ml0 gray w-100">A bot made to help managing discord servers during covid period</dd>
                        </dl></a>
                    </div>
                    <div class="fl w-40 w-25-m w-30-l pa2">
                        <img src={smartbrainsproj} class="w-100 db outline black-10" />
                        <a href="https://github.com/Divyateja04/smartbrains"><dl class="mt2 f6 lh-copy">
                            <dt class="clip">Title</dt>
                            <dd class="ml0 w-100">Smartbrains - Course Project</dd>
                            <dt class="clip">Description</dt>
                            <dd class="ml0 gray w-100">A web app made using node and react to identify faces in a picture</dd>
                        </dl></a>
                    </div>
                    <div class="fl w-40 w-25-m w-30-l pa2">
                        <img src={robofriendsproj} class="w-100 db outline black-10" />
                        <a href="https://github.com/Divyateja04/robofriends"><dl class="mt2 f6 lh-copy">
                            <dt class="clip">Title</dt>
                            <dd class="ml0 w-100">Robofriends - Course Project</dd>
                            <dt class="clip">Description</dt>
                            <dd class="ml0 gray w-100">Just a project made as part of udemy course</dd>
                        </dl></a>
                    </div>
                </div>
            </article>
            {/* ================================================================================================= */}
            <article>
                <h2 class="f3 fw4 pa3 mv0">Robotics Projects</h2>
                <div class="cf pa5 flex flex-wrap justify-center">
                    <div class="fl w-40 w-25-m w-30-l pa2">
                        <img src={aimbulance} class="w-100 db outline black-10" />
                        <dl class="mt2 f6 lh-copy">
                            <dt class="clip">Title</dt>
                            <dd class="ml0 w-100">Aimbulance</dd>
                            <dt class="clip">Desc</dt>
                            <dd class="ml0 gray w-100">An Automatic Ambulance system that uses drones and security camera systems
                                to automatically identify accidents and report them to the nearest hospital and also fill
                                out forms for them</dd>
                        </dl>
                    </div>
                    <div class="fl w-40 w-25-m w-30-l pa2">
                        <img src={waviour} class="w-100 db outline black-10" />
                        <dl class="mt2 f6 lh-copy">
                            <dt class="clip">Title</dt>
                            <dd class="ml0 w-100 ttu">Waviour</dd>
                            <dt class="clip">Description</dt>
                            <dd class="ml0 gray w-100">A device that saves people from drowning in the ocean</dd>
                        </dl>
                    </div>
                    <div class="fl w-40 w-25-m w-30-l pa2">
                        <img src={windproject} class="w-100 db outline black-10" />
                        <dl class="mt2 f6 lh-copy">
                            <dt class="clip">Title</dt>
                            <dd class="ml0 w-100">Prototype for an wind-driven power system</dd>
                            <dt class="clip">Description</dt>
                            <dd class="ml0 gray w-100">In house science exhibition winner :)</dd>
                        </dl>
                    </div>
                    <div class="fl w-40 w-25-m w-30-l pa2">
                        <img src={leap} class="w-100 db outline black-10" />
                        <dl class="mt2 f6 lh-copy">
                            <dt class="clip">Title</dt>
                            <dd class="ml0 w-100">Haar cascade-Based Driving Analysis and Scoring System</dd>
                            <dt class="clip">Description</dt>
                            <dd class="ml0 gray w-100">A Simple Analysis System that judges you based on your driving skills and helps you drive safer</dd>
                        </dl>
                    </div>
                    <div class="fl w-40 w-25-m w-30-l pa2">
                        <img src={leap} class="w-100 db outline black-10" />
                        <dl class="mt2 f6 lh-copy">
                            <dt class="clip">Title</dt>
                            <dd class="ml0 w-100">Leap Motion Controller Based Robot</dd>
                            <dt class="clip">Description</dt>
                            <dd class="ml0 gray w-100">Innovative RC car-esque robot which is controlled with the motions of one’s hand alone</dd>
                        </dl>
                    </div>
                </div>
            </article>
        </>
    )
}
