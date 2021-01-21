import React, { FC } from 'react';
import { Link } from 'gatsby';
import { jsx, css, useTheme } from '@emotion/react';
import { nodeModuleNameResolver } from 'typescript';

interface Props {
  links: {
    path: string;
    label: string;
  }[];
}

const Header: FC<Props> = ({ links }) => {
  const theme = useTheme();

  return (
    <header css={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: theme.spacing.lg,
    }}>
      <Link
        to="/"
        css={{
          textDecoration: 'none',
        }}
      >
        <span
          css={{
            color: theme.colors.orange,
            fontWeight: theme.fonts.weight.bold,
            fontSize: theme.fonts.size.scale2,
          }}
        >
          kevin kieninger.
        </span>
      </Link>

      <nav>
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            css={{
              marginLeft: theme.spacing.nm,
              textDecoration: 'none',
              color: theme.colors.darkGray,
              '&:hover': {
                textDecoration: 'underline',
                color: theme.colors.orange,
              },
            }}
          >{link.label}</Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;