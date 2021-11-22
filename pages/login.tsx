/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { ReactElement } from 'react';
import { BaseLayout } from '@/components/layouts/BaseLayout';
import { LoginLayout } from '@/components/layouts/LoginLayout';
import { Logo } from '@/components/elements/Logo';
import Head from 'next/head';
import { FormGroup, Button, Input } from '@/components/lib';
import * as colors from '@/styles/colors';

const Login = () => {
  function handleSubmit(event) {
    event.preventDefault;
  }
  return (
    <>
      <Head>
        <title>Login | XLingual Admin</title>
      </Head>
      <div
        css={{
          padding: '0',
          borderRadius: '10px',
          minWidth: '70%',
          maxWidth: '96%',
          display: 'flex',
          alignItems: 'stretch',
          boxShadow: `0 0 3px ${colors.lightGreen}`,
        }}
      >
        <section
          css={{
            flexGrow: '2',
          }}
        >
          background image here
        </section>
        <section
          css={{
            backgroundColor: 'white',
            borderRadius: '0 10px 10px 0',
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div
            css={{
              width: '100px',
            }}
          >
            <Logo />
            <h1>Login</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <label>email</label>
              <Input type="email" />
            </FormGroup>
            <FormGroup>
              <label>password</label>
              <Input type="password" />
            </FormGroup>
            <Button type="submit">Login</Button>
          </form>
        </section>
      </div>
    </>
  );
};

Login.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
      <LoginLayout>{page}</LoginLayout>
    </BaseLayout>
  );
};

export default Login;
