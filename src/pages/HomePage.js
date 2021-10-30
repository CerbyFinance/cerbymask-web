import React, { useRef } from 'react';
import { css } from '@emotion/react';

import { ReactComponent as Logo } from "../assets/cerbymask-logo-128.svg"
import { ReactComponent as Monitor } from "../assets/Monitor.svg"
import Preview2 from "../assets/latest_wallet_preview_cropped.gif"
import Radix from "../assets/radixdlt_transparent_bg.png"
import DownloadChromeWebstore from "../assets/available_on_chrome.png"
import { ChevronDoubleDown } from "@styled-icons/bootstrap"
import ReactGA from 'react-ga';

const VERSION = "v1.2"

const HomePageStyle = css`
  h1 {
    font-size: 5rem;
    font-weight: 600;
    text-align: center;
  }
`;

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
    <div style={{ width: "100%" }} css={[HomePageStyle]}>
      <div className="viewport-main">
        <div className="w-100 m-t-3 d-flex justify-content-center">
          <Logo className="logo-main" width="200px" />
        </div>
        <div className="w-100 m-t-4 d-flex flex-wrap justify-content-center">
          <div className="w-100 d-flex justify-content-center overflow-hide">
            <Monitor className="monitor" />
            <img src={Preview2} className="preview" alt="CerbyMask Preview" />
          </div>
        </div>
        <div className="w-100 text-align-center d-flex-column flex-wrap justify-content-center">
          <h2 className="title-2 m-t-4">Powering the <img src={Radix} className="radix-small" /> Network</h2>
          <div className="m-t-3">
            <a onClick={() => onClick(1)} target="_blank" href="https://chrome.google.com/webstore/detail/cerbymask/jjmgklicacbmnjlefkjmggcomejjpclk" className="small-text gray-1">Get CerbyMask {VERSION}</a>
          </div>
          {/* <img className="m-t-3" width="180px" src={DownloadChromeWebstore}/> */}
        </div>
      </div>
    </div >
  );
};

export default HomePage;
