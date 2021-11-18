import React, { useRef } from 'react';
import { css } from '@emotion/react';

import Logo from "../assets/cerby.png"
import { ReactComponent as Monitor } from "../assets/Monitor.svg"
import Preview2 from "../assets/latest_wallet_preview_cropped.gif"
import Radix from "../assets/radixdlt_transparent_bg.png"
import ReactGA from 'react-ga';

const VERSION = "v1.3"

const HomePage = () => {
    const firstElement = useRef(null)

    function onClick(type) {
        let msg = ""

        if (type == 1)
            msg = `Opened Main Page Get CerbyMask ${VERSION}`

        ReactGA.event({
            category: 'User',
            action: msg
        });
    }

    return (
        <div style={{ width: "100%", height: "100%" }} className="d-flex align-items-center justify-content-center">
            <div className="d-flex display-flex-column-xs w-75 h-100">
                <div className="w-s-100 h-100 d-flex-column align-items-center justify-content-center m-s-t-4">
                    <div className="d-flex-column">
                        <img src={Logo} className="logo-main" width="100px" height="100px" style={{ marginLeft: "50px" }} />
                        <h2 className="title-2 text-align-center">Powering the <img src={Radix} className="radix-small" /> Network</h2>
                        <div className="p-1 w-75 w-s-100 d-flex">
                            <a className="red-background w-s-100 p-x-3 p-y-2 upper-case bold download-button-1" style={{borderRadius:"10px"}} target="_blank" href="https://chrome.google.com/webstore/detail/cerbymask/jjmgklicacbmnjlefkjmggcomejjpclk">Install CerbyMask</a></div>
                        <p className="title-3 m-t-1">
                            - Lightweight Browser Extension - Chrome and FireFox<br/>
                            - Full seed phrase backup/recovery system<br/>
                            - Complete token asset management<br/>
                            - Multiple public addresses management<br/>
                            - Realtime stake and balnce in USD <br/>
                        </p>
                    </div>
                </div>
                <div className="w-s-100 w-m-50">

                </div>
            </div>
        </div >
    );
};

export default HomePage;
