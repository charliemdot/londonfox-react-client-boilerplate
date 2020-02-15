import React, { Fragment } from 'react';
import styled from 'styled-components';

import { Title } from '../components/title';
import { Content } from '../components/content';

export const Home = () => (
  <Fragment>
    <Title>
      Home Title
    </Title>
    <Content>
      Hello World!
    </Content>
  </Fragment>
);
