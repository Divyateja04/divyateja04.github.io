import React, { useState } from 'react'
import 'tachyons';


export default function Notes() {
    const [input, setInput] = useState("");
    const groupdata = [
        {
            name: "1-1 Resources - MeOW, EEE, M1, Chem, Workshop",
            link: "https://drive.google.com/drive/folders/1CnTsW7eex3adZY0TgLsTeNPRF2RTX4y4?usp=share_link"
        },
        
        {
            name: "1-2 Resources - CP, TRW, Bio, M2, PnS, EG",
            link: "https://drive.google.com/drive/folders/1bkFqiiPP1bN-w-ezvtQ5j5mSkyNTttaM?usp=share_link"
        },
        {
            name: "2-1 CS Resources - Logic, Disco, DD, M3, PoE, OOPL",
            link: "https://drive.google.com/drive/folders/1A1jvtyWRMzu14oq1wc6vFxeS-tKJrQEN?usp=sharing"
        },
    ];
    const coursewise = [
        {
            name: "Mathematics 1 - M1 Notes",
            link: "https://drive.google.com/file/d/1d-fdqKVl5kTf3Yx649teiAooxAxWMuiR/view?usp=share_link"
        },
        {
            name: "C Programming - CP Notes",
            link: "/notes/CP/cp.html"
        },
        {
            name: "Probability and Statistics - PnS Notes",
            link: "https://drive.google.com/file/d/1P4KFVTR-GlMEltfyAi4rg2laaJkcBJjh/view"
        },
        {
            name: "Mathematics 2 - M2 Notes",
            link: "https://drive.google.com/file/d/1Yjd1U4yDskDln5Sl_6h02hpRtNoqpl6g/view"
        },
        {
            name: "Technical Report Writing - TRW Notes",
            link: "/notes/TRW/trw.html"
        },
        {
            name: "Mathematics 3 - M3 Notes",
            link: "https://drive.google.com/file/d/19GvuOCJne0yfholKESraZ54HASAtTUFm/view?usp=share_link"
        },
        {
            name: "Object Oriented Programming - OOPL Notes",
            link: "/notes/OOP/oop.html"
        },
        {
            name: "Digital Design - DD Notes",
            link: "https://drive.google.com/file/d/1uDqE4AYudKAuAd5P5Fv61GNjwbI8cvnm/view?usp=share_link"
        },
        {
            name: "Principles of Economics - POE Notes",
            link: "/notes/POE/poe.html"
        },
        {
            name: "Computer Mediated Communications - CMC Notes",
            link: "/notes/CMC/cmc.html"
        },
        {
            name: "Linguistics Incomplete Notes",
            link: "/notes/Linguistics/Linguistics.html"
        },
        {
            name: "FoFa Incomplete Notes",
            link: "/notes/FoFa/FoFa.html"
        },
    ]

    return (
        <>
            <div className='w-1/2'>
                <h2 class="f3 fw4 pa3 mv0">Notes and Resources</h2>
                <div class="cf flex justify-center w-full">
                    <div className='w-full'>
                        <div class="input-group relative flex flex-wrap items-stretch w-full mb-4">
                            <input type="search" class="form-control relative min-w-0 block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon3" onChange={e => setInput(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div class="cf pa5 flex flex-column justify-center">
                    <div class="p-2">
                        <h1>BITS Combined Resources</h1>
                        <h3>(Contains PYQs and Solutions if available, textbooks, textbook solutions, slides and notes)</h3>
                        {
                            groupdata.filter(d => d.name.toLowerCase().includes(input.toLowerCase())).map(data => (
                                <a href={data.link}><h4 class="ml0 w-100">{data.name}</h4></a>
                            ))
                        }
                        <hr />
                    </div>

                    <div class="p-2">
                        <h1>Course Wise Notes</h1>
                        {
                            coursewise.filter(d => d.name.toLowerCase().includes(input.toLowerCase())).map(data => (
                                <a href={data.link}><h4 class="ml0 w-100">{data.name}</h4></a>
                            ))
                        }
                        <hr />
                    </div>

                </div>
            </div>
        </>
    )
}
