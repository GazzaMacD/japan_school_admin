/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as React from 'react';
import Head from 'next/head';
import { Logo } from '@/components/elements/Logo';

type TLayoutProps = {
  children: React.ReactNode;
};

const BaseLayout = ({ children }: TLayoutProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>XLingual Admin</title>
      </Head>
      <header>
        <Logo />
      </header>
      <aside>Side nav</aside>
      <main>{children}</main>
      <footer></footer>
    </>
  );
};

export { BaseLayout };
