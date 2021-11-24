/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { ReactElement } from 'react';
import { BaseLayout } from '@/components/layouts/BaseLayout';
import { LoginLayout } from '@/components/layouts/LoginLayout';
import { Logo } from '@/components/elements/Logo';
import Head from 'next/head';
import Image from 'next/image';
import { FormGroup, Label, Button, Input } from '@/components/lib';
import * as colors from '@/styles/colors';
import { client } from '@/common/utils/apiUtils';

const Login = () => {
  async function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value;
    const password = target.password.value;
    try {
      const data = await client('auth/login/', { data: { email, password } });
    } catch (error) {
      console.error(error);
    }
    target.email.value = '';
    target.password.value = '';
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
          border: `solid 1px ${colors.greenLighter}`,
          boxShadow: `0 0 20px ${colors.lightGreen}`,
        }}
      >
        <section
          css={{
            width: '400px',
            position: 'relative',
          }}
        >
          <Image
            src="/images/green_girl.jpg"
            alt="green girl"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
            css={{
              borderRadius: '10px 0 0 10px',
            }}
          />
        </section>
        <section
          css={{
            backgroundColor: 'white',
            borderRadius: '0 10px 10px 0',
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minWidth: '300px',
          }}
        >
          <div
            css={{
              width: '150px',
            }}
          >
            <Logo />
          </div>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="email">email</Label>
              <Input type="email" name="email" id="email" />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">password</Label>
              <Input type="password" name="password" id="password" />
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
