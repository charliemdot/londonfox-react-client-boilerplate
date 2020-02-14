import React, { Fragment } from 'react'
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { Title } from '../components/title'
import { Content } from '../components/content'

const CURRENT_USER_QUERY = gql`
  query CurrentUser {
    me {
      firstName
      lastName
    }
  }
`;

export const Dashboard = () => {
  const { loading, error, data } = useQuery(CURRENT_USER_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Fragment>
      <Title>
        Dashboard Title
      </Title>
      <Content>
        <p>User Details</p>
        <ul>
          <li>
            First Name -
            {data.me.firstName}
          </li>
          <li>
            Last Name -
            {data.me.lastName}
          </li>
        </ul>
      </Content>
    </Fragment>
  );
}
