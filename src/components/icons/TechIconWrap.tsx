import React, { FC, PropsWithChildren } from 'react';
import { useTheme } from '@emotion/react';

interface Props {
  title: string;
}

const TechIconWrap: FC<PropsWithChildren<Props>> = ({ children, title }) => {
  const theme = useTheme();

  return (
    <span
      css={{
        display: 'inline-flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing.sm,
        flex: '0 1 33%',
        borderRadius: '3px',
        '@media(min-width: 500px)': {
          flex: '0 1 15%',
        },
      }}
    >
      {children}
      <span css={{
        fontSize: theme.fonts.size.scale0,
        marginTop: theme.spacing.xs,
      }}>
        {title}
      </span>
    </span>
  );
};

export default TechIconWrap;
