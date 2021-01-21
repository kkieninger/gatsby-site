import React, { FC } from 'react';
import { useTheme } from '@emotion/react';

import GitHubIcon from '../components/icons/GitHubIcon';
import LinkedInIcon from '../components/icons/LinkedInIcon';
import TwitterIcon from '../components/icons/TwitterIcon';

const Footer: FC = () => {
  const theme = useTheme();

  return (
    <footer css={{
      textAlign: 'center',
      margin: `${theme.spacing.xl} 0 ${theme.spacing.sm}`,
      position: 'relative',
      padding: theme.spacing.nm,
      '&:before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: 1,
        width: '6rem',
        margin: '0 auto',
        backgroundColor: theme.colors.darkGray,
      }
    }}>
      <span css={{ fontWeight: theme.fonts.weight.light }}>kevin kieninger | {new Date().getFullYear()}</span>
      <nav css={{ margin: `${theme.spacing.nm} 0` }}>
        <a
          href="//github.com/kkieninger"
          target="_blank"
          rel="noopener"
          css={{ margin: `0 ${theme.spacing.sm}` }}
        >
          <GitHubIcon />
          <span css={{ fontSize: 0 }}>Link to GitHub</span>
        </a>
        <a
          href="//linkedin.com/in/kkieninger"
          target="_blank"
          rel="noopener"
          css={{ margin: `0 ${theme.spacing.sm}` }}
        >
          <LinkedInIcon />
          <span css={{ fontSize: 0 }}>Link to LinkedIn</span>
        </a>
        <a
          href="//twitter.com/kevinkieninger"
          target="_blank"
          rel="noopener"
          css={{ margin: `0 ${theme.spacing.sm}` }}
        >
          <TwitterIcon />
          <span css={{ fontSize: 0 }}>Link to Twitter</span>
        </a>
      </nav>
    </footer>
  );
};

export default Footer;