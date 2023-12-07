import React from 'react';
import { init } from 'ityped';

import './Home.scss';
import mypic1 from '../../images/pic01.png';

import 'tachyons';

class Home extends React.Component {

    componentDidMount() {
        const intro = document.querySelector('#introityped')
        init(intro, { showCursor: true, strings: ['Web Developer!', 'App Developer!', 'Innovator!', 'Inventor!'] })
    }

    render() {
        return (
            <div style={{ "margin": "50px 50px 0px 0px" }} className="pa4">
                <div>
                    <div className="container">
                        <div className="row align-items-center">
                            {/* <div className="col-lg-6 col-sm-12">
                                <img className="br-100 pa1 ba b--yellow-10" src={mypic1} alt="Me" />
                            </div> */}
                            <div className="col-lg-12 col-sm-12">
                                <div className="wrapperh">
                                    <h2 className="f3"><span>Hey there, I'm</span></h2>
                                    <h1 className="nametag">Divyateja Pasupuleti</h1>
                                    <br />
                                    <h3 className="f3"><span id="introityped"></span></h3>
                                </div>

                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Home;