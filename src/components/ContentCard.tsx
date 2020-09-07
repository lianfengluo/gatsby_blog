import React from 'react';
import { ContentCardWrapper, P, H2 } from 'src/wrappers';
import { Button } from 'src/components';
import { Link } from 'gatsby';

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
      <Link to={slug} className="content-title">
        <H2
          textAlign="center"
          margin="0 0 1rem 0"
          color={'rgba(26.1%, 56.6%, 99.7%, 80%)'}
        >
          {title}
        </H2>
      </Link>
      <P size="xs" textAlign="center" margin="0 0 0.5rem 0" color="dark3">
        {date}
      </P>
      <P size="s" textAlign="center" margin="0 0 1.5rem 0" color="dark2">
        {excerpt}
      </P>
      <Button href={slug}>Read More</Button>
    </ContentCardWrapper>
  );
};
