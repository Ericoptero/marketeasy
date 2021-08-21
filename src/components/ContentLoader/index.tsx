import React from 'react';
import ContentLoader, {Rect} from 'react-content-loader/native';

import {Container, Box, Icon} from './styles';

const ProductBox = () => (
  <Box>
    <ContentLoader foregroundColor="#fdbcce">
      <Rect x="0" y="10" rx="4" ry="4" width="60%" height="15" />
      <Rect x="0" y="35" rx="2" ry="2" width="80%" height="10" />
    </ContentLoader>
    <Icon name="angle-double-right" />
  </Box>
);

const Loader = () => (
  <Container>
    <ProductBox />
    <ProductBox />
    <ProductBox />
    <ProductBox />
    <ProductBox />
    <ProductBox />
    <ProductBox />
    <ProductBox />
    <ProductBox />
  </Container>
);

export default Loader;
