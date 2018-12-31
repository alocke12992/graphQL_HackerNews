import React from 'react';
import { css } from '@emotion/core';

const Link = ({ link, rank }) => {
  return (
    <>
      <td
        className="title"
        css={css`
          align: right;
          valign: top;
        `}>
        <span className="rank">{rank + 1}</span>
      </td>
      <td valign="top" className="votelinks">
        <center>
          <a id="up_18794545" href="vote?id=18794545&amp;how=up&amp;goto=news">
            <div className="votearrow" title="upvote" />
          </a>
        </center>
      </td>
      <td className="title">
        <a className="storyLink" href={link.url}>
          {link.description}
        </a>
        <span className="sitestr">
          (<span>SHORT URL</span>)
        </span>
      </td>
    </>
  );
};

export default Link;
