/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as React from 'react';
import * as colors from '@/styles/colors';
import Head from 'next/head';
import { TChildrenProps } from '@/common/types';
import { Footer } from '@/components/modules/Footer';

const LoginLayout = ({ children }: TChildrenProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>Login | Xlingual Admin</title>
      </Head>
      <div
        css={{
          height: '100vh',
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: `linear-gradient(90deg, ${colors.darkGreen} 0%, ${colors.green} 30%, ${colors.green} 100%)`,
        }}
      >
        <main>{children}</main>
      </div>
    </>
  );
};

export { LoginLayout };
