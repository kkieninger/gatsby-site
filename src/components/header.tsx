import React, { FC } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { jsx, useTheme } from '@emotion/react';
import Image from 'gatsby-image';

const Header: FC = () => {
  const theme = useTheme();

  const data = useStaticQuery(graphql`
    query {
      logo: file(absolutePath: { regex: "/gatsby-icon.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const logo = data?.logo?.childImageSharp?.fixed;

  return (
    <header css={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '1.5rem',
    }}>
      <Link to="/">
        <Image
          fixed={logo}
          alt="logo"
          className="logo"
        />
      </Link>

      <nav>
        <Link
          css={{ marginLeft: theme.spacing.nm }}
          to="/"
        >home</Link>
        <Link
          css={{ marginLeft: theme.spacing.nm }}
          to="/writing"
        >writing</Link>
        <Link
          css={{ marginLeft: theme.spacing.nm }}
          to="/about"
        >about</Link>
      </nav>
    </header>
  );
};

export default Header;