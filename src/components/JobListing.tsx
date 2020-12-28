import React, { FC } from 'react';
import { Job } from '../types/jobs';
import { useTheme } from '@emotion/react';

export const JobListing: FC<Job> = ({ company, title, years, description }) => {
  const theme = useTheme();

  return (
    <article css={{
      marginBottom: theme.spacing.lg,
    }}>
      <div css={{
        marginBottom: theme.spacing.sm,
      }}>
        <p css={{
          marginBottom: 0,
          fontSize: '1.1rem',
          color: theme.colors.orange,
          fontWeight: theme.fonts.weight.bold,
        }}>{title}.</p>
        <p css={{
          marginBottom: 0,
          fontSize: '1.1rem',
        }}>
          {company} <span css={{ fontSize: theme.fonts.size.scale1, fontWeight: theme.fonts.weight.light }}>{years}</span>
        </p>
      </div>
      <p css={{
        fontSize: theme.fonts.size.scale1,
        marginBottom: 0,
      }}>{description}</p>
    </article>
  );
};