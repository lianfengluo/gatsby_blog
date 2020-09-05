import React from 'react';
import { ContentCardWrapper, P, H2 } from 'src/wrappers';
import { Button } from 'src/components';

interface PropsItf {
  date: string;
  title: string;
  excerpt: string;
  slug: string;
}

export const ContentCard: React.FC<PropsItf> = ({
  date,
  title,
  excerpt,
  slug,
}) => {
  return (
    <ContentCardWrapper>
      <P size="xs" textAlign="center" margin="0 0 0.5rem 0">
        {date}
      </P>
      <H2 textAlign="center" margin="0 0 1rem 0">
        {title}
      </H2>
      <P size="s" textAlign="center" margin="0 0 1.5rem 0">
        {excerpt}
      </P>
      <Button href={slug}>Read More</Button>
    </ContentCardWrapper>
  );
};
