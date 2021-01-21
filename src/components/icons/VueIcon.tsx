import React, { FC } from 'react';
import { useTheme } from '@emotion/react';

import TechIconWrap from './TechIconWrap';

const VueIcon: FC = () => {
  const theme = useTheme();

  return (
    <TechIconWrap title="vue.js">
      <svg
        css={{
          fill: theme.colors.darkGray,
          // fill: '#4FC08D',
        }}
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
      >
        <title>Vue.js Icon</title>
        <path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"/>
      </svg>
    </TechIconWrap>
  );
};

export default VueIcon;
