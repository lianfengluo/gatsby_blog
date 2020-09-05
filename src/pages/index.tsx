import React from 'react';

import { Container, FeatureImage, ContentCard, Content } from 'src/components';

const Index: React.FC<{}> = () => {
  return (
    <Container>
      <FeatureImage />
      <Content>
        <ContentCard
          date={'123124124'}
          title={'testest'}
          excerpt={'testest'}
          slug={'/test'}
        />
      </Content>
    </Container>
  );
};

export default Index;
