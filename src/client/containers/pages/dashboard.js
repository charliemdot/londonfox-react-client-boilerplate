import React, { Fragment } from 'react'
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { Title } from '../../components/title'
import { Content } from '../../components/content'

const PROPERTIES = gql`
  {
    properties{
      title
      city
      propertyId
      availability {
        date
        price
      }
    }
  }
`;

const formatProperties = ({ properties }) => {
  return properties.map(({title}) => (
    <div>{title}</div>
  ));
};

export const Dashboard = () => {
  const { loading, error, data } = useQuery(PROPERTIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Fragment>
      <Title>
        Dashboard Title
      </Title>
      <Content>
        {formatProperties(data)}
      </Content>
    </Fragment>
  );
}
