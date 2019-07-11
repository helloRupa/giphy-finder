import React from 'react';

import { GiphysIndexItem } from './giphys_index_item';

export const GiphysIndex = ({ results }) => {
  return (
    <ul>
      { Object.keys(results).map((key, idx) => (
        <li key={ idx } className="giphy-li">
          <GiphysIndexItem url={ results[key].images.downsized.url }/>
        </li>
      )) }
    </ul>
  );
};