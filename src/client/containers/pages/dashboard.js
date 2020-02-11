import React, { Fragment } from 'react'
import styled from 'styled-components';

const Header = styled.div`
  backgroundcolor:#ccc;
`;

export const Dashboard = () => (
  <Fragment>
    <Header>
      Dashboard
    </Header>
    <p>
      Dashboard content here.
    </p>
  </Fragment>
);
