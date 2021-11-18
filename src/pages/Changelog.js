import React, { useEffect, useRef, useState } from 'react';
import { css } from '@emotion/react';

import Logo from "../assets/cerby.png"
import ReactGA from 'react-ga';
import { PuffLoader } from "react-spinners"

const HomePageStyle = css`
  h1 {
    font-size: 5rem;
    font-weight: 600;
    text-align: center;
  }
`;

const Changelog = (props) => {

  let [changelog, setChangelog] = useState({})

  useEffect(() => {
    fetch("https://api.npoint.io/a4148cc09bd95c5aed16").then(async (response) => {
      let json = await response.json()
      setChangelog(json)
    })
  })
  return (
    <div style={{ width: "100%" }} css={[HomePageStyle]}>
      <div className="viewport-main">
        <div className="w-100 m-t-3 margin-bottom d-flex justify-content-center m-t-4">
          <img src={Logo} className="logo-main" width="70px" />
        </div>
        <div className="d-flex-column text-align-center justify-content-center m-t-3 m-b-3">
          <h2 style={{ "height": "32px", fontSize: "28px" }}>Changelog</h2>
          <div className="overflow-hide">
            {(!changelog || Object.keys(changelog).length == 0) &&
              <div className="m-t-4 d-flex justify-content-center" style={{ "height": "70px" }} >
                <PuffLoader width="30px" className="m-t-4" color="#D85050" />
              </div>
            }
            {changelog && Object.keys(changelog).reverse().map((version, index) => {
              return (
                <div className="m-t-4" key={index}>
                  <h2 style={{ "height": "32px", fontSize: "22px" }}>{version}</h2>
                  <ul>
                    {changelog[version].map((item, index2) => {
                      return (
                        <li className={index2 > 0 ? "m-t-3" : "m-t-2"} key={index2}>
                          {item}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )
            })
            }
          </div>
        </div>
      </div>
    </div >
  );
};

export default Changelog;
