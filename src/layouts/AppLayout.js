import React from 'react';
import { Global, css } from '@emotion/react';

import Header from './Header';
import Footer from './Footer';

import colorMap from '../styles/palette';
import { useThemeContext } from '../contexts/ThemeContext';
import ReactGA from 'react-ga';

export class AppLayout extends React.Component {

  constructor(props) {
    super(props)
    ReactGA.pageview(window.location.pathname)
  }

  render() {
    return (
      <div className="d-flex-column w-100" style={{ height: "100%" }}>
        <Header />
        <main className="w-100" style={{ flex: 1 }}>
          {React.cloneElement(this.props.children, { ...this.props })}
        </main>
        <Footer />
      </div >
    )
  }
};

export default AppLayout;
