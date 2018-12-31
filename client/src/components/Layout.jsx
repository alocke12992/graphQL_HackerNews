import React from 'react';
import { css } from '@emotion/core';
import Navbar from './Navbar';
import { rhythm } from '../utils/typography';

const Layout = ({ children }) => (
  <div
  css={css`
    margin: 0 auto;
    max-width: 700px;
    padding: ${rhythm(2)};
    padding-top: ${rhythm(1.5)};
  `}
  >
    <Navbar />
    {children}
  </div>
);

export default Layout;
