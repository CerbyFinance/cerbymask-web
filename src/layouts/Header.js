import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { css } from '@emotion/react';

import media from '../styles/media';
import { useThemeContext } from '../contexts/ThemeContext';
import { ReactComponent as Logo } from "../assets/cerbymask-logo-128.svg"
import { Menu } from "@styled-icons/evaicons-solid"
import ReactGA from 'react-ga';

const headerStyle = (isLight) => css`
  height: 60px;
  ${media.medium} {
    height: 50px;
  }

  & > nav {
    height: 100%;
    display: flex;
    padding: 0 12px;
    margin: 0 auto;
    max-width: 1280px;
    align-items: center;
    justify-content: space-between;
    .logo a {
      display: flex;
      align-items: center;
      font-size: 2rem;
      font-weight: bold;
      text-decoration: none;
      font-family: "IBM Plex Sans", sans-serif;

      svg {
        width: 2rem;
        height: 2rem;
        margin-right: 0.5rem;
      }
    }

    svg.theme {
      cursor: pointer;
      display: flex;
      user-select: none;
    }
  }
`;

const Header = () => {
  const { pathname } = useLocation();
  const { isLight, toggleTheme } = useThemeContext();
  let [opened, setOpened] = useState(false)

  function onExpand() {
    setOpened(!opened)
  }

  function onClick(type) {
    let msg = ""

    if (type == 1)
      msg = "Opened Docs"
    else if (type == 2)
      msg = "Opened Changelog"
    else if (type == 3)
      msg = "Opened Google Web Store Download Page"

    ReactGA.event({
      category: 'User',
      action: msg
    });
  }
  return (
    <header css={[headerStyle(isLight)]}>
      <nav>
        <div className="logo">
          <Link to="/" replace={pathname === '/'}>
            <Logo />
            CerbyMask
          </Link>
        </div>
        <div className={`actions display-flex-column-xs hide-on-xs bg-xs-dark ${opened?'show':''}`}>
          <a className="p-y-1" onClick={() => onClick(1)} target="_blank" href="https://docs.cerbymask.io">Docs</a>
          <Link to="/changelog" className="p-y-1" onClick={() => onClick(2)}>Changelog</Link>
          <a className="green-background p-y-1" onClick={() => onClick(3)} target="_blank" href="https://chrome.google.com/webstore/detail/cerbymask/jjmgklicacbmnjlefkjmggcomejjpclk">Download</a>
        </div>
        <Menu onClick={() => onExpand()} className="hide-on-md" width="24px" color="white"/>
      </nav>
    </header>
  );
};

export default Header;
