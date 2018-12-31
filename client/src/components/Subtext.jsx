import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const Subtext = () => (
  <StaticQuery
    query={
      graphql`
        query SubtextQuery {
          hql {
            feed {
              links {
                id
                description
                url
                votes {
                  id
                }
              }
            }
          }
        }
    `} 
    render={data => (
      <>
        <td colSpan='2'></td>
        <td class="subtext">
          <span class="score" id="score_18794545">166 points </span>
            by <a href="user?id=bladecatcher" className="hnuser">bladecatcher</a> 
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
    )}
  />
);

export default Subtext;