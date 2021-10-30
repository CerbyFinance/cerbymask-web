import React from 'react';
import { css } from '@emotion/react';
import { ReactComponent as GithubIcon } from '../assets/github.svg';
import ReactGA from 'react-ga';

const footerStyle = css`
  padding: 40px 16px;
  & > nav {
    margin: 0 auto;
    max-width: 1280px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
      width: 2rem;
      height: 2rem;
    }
  }
`;

function onClick(type) {
  let msg = ""

  if (type == 1)
    msg = "Opened Github Repository"

  ReactGA.event({
    category: 'User',
    action: msg
  });
}

const Footer = () => {
  return (
    <footer css={[footerStyle]}>
      <nav>
        <div>{new Date().getFullYear()} &copy; CerbyMask Team</div>
        <div>
          <a onClick={() => onClick(1)} target="_blank" href="https://github.com/x-wf2/cerbymask" rel="noopener noreferrer">
            <GithubIcon className="github" />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
