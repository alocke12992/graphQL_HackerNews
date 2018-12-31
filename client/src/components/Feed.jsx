import React, {Fragment} from 'react';
import Link from './Link.jsx';
import Subtext from './Subtext.jsx';
import { css } from '@emotion/core';

const Feed = ({links}) => {
  console.log(links)
  return (
    <table css={css`
      border: 0;
      cell-padding: 0;
      cell-spacing: 0;
    `}>
      <tbody>
        {
        links.map((link, index) => {
        return (
          <Fragment key={link.id}>
            <tr>
              <Link link={link} rank={index} />
            </tr>
            <tr>
              <Subtext link={link} />
            </tr>
          </Fragment>
        )
        })}
      </tbody>
  </table>
  )
};

export default Feed;