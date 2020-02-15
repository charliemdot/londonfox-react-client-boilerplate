import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TitleComponent = styled.h1`
  font-size: 1.5em;
`;

const Title = (props) => (
  <TitleComponent>
    {props.children}
  </TitleComponent>
);

export { Title };
