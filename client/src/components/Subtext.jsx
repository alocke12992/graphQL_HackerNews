import React from 'react';

const Subtext = ({link}) => {
  return (
    <>
      <td colSpan='2'></td>
      <td class="subtext">
      <span class="score" id="score_18794545">{link.voteCount} points </span>
        by <a  className="hnuser">"Name"</a> 
      <span className="age">
      {/* TODO, calculate hours since created */}
        <a href="item?id=18794545">4 hours ago</a>
      </span>
      <span id="unv_18794545">
      </span> 
      {/* TODO - Hide function */}
       | <a href="hide?id=18794545&amp;goto=news">hide</a> 
       {/* TODO Add Comments view */}
       | <a href="item?id=18794545">23&nbsp;comments</a>
      </td>
    </>
  );
};

export default Subtext;