import React, { Fragment } from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ContentComponent = styled.p`
  font-size: 1em;
  margin: 16px 0;
`;

const Content = (props) => (
  <ContentComponent>
    {props.children}
  </ContentComponent>
);

export { Content };