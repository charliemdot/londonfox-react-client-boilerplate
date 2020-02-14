import React, { Fragment, useState, useEffect } from 'react'
import styled from 'styled-components';
import { useLazyQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { useHistory } from 'react-router-dom';

import { AUTH_TOKEN } from '../utils/constants';
import { Title } from '../components/title'
import { Content } from '../components/content'

const LOGIN_QUERY = gql`
  query Login ($email: String!, $password: String!) {
    login (email: $email, password: $password) {
      token
    }
  }
`;

export const Login = () => {
  // Hooks
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const history = useHistory();

  useEffect(() => {
    if (email.trim() && password.trim()) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [email, password]);

  // GraphQL
  const [getUser, { loading, error, data }] = useLazyQuery(LOGIN_QUERY, {
    onCompleted: (data) => handleLoginSuccess(data),
    onError: () => handleLoginError(),
  });

  // Functions
  const handleLoginSuccess = (data) => {
    if (data && data.login && data.login.token) {
      const { token } = data.login;

      setFormError(false);

      localStorage.setItem(AUTH_TOKEN, token);
      history.push('/');
      location.reload();
    }
  };

  const handleLoginError = () => {
    setFormError(true);
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13 || e.which === 13) {
      isButtonDisabled || handleLogin();
    }
  };

  // Render
  return (
    <Fragment>
      <Title>
        Login to App
      </Title>
      <Content>
        <div>
          {formError &&
            <span>Invalid Credentials!</span>
          }
        </div>
        <div>
          <label for='fname'>First name</label>
          <input
            id='email'
            type='text'
            label='Email'
            placeholder='Email'
            required
            onChange={(e)=>setEmail(e.target.value)}
            onKeyPress={(e)=>handleKeyPress(e)}
          />
        </div>

        <div>
          <label for='fname'>Password</label>
          <input
            id='password'
            type='password'
            label='Password'
            placeholder='Password'
            onChange={(e)=>setPassword(e.target.value)}
            onKeyPress={(e)=>handleKeyPress(e)}
          />
        </div>

        <div>
          <button
            type='button'
            onClick={() => getUser({
              variables: {
                email,
                password,
              }
            })}>
            Sign In
          </button>
        </div>
      </Content>
    </Fragment>
  );
}
