import React from 'react';
import { useStaticQuery, Link, graphql } from 'gatsby';
import { NavWrapper } from 'src/wrappers';

export const Nav: React.FC<{}> = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.svg" }) {
        publicURL
      }
    }
  `);
  return (
    <NavWrapper>
      <Link to="/">
        <img src={data.logo.publicURL} alt="My logo" />
      </Link>
    </NavWrapper>
  );
};
