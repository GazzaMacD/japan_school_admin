/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { ReactElement } from 'react';
import { BaseLayout } from '@/components/layouts/BaseLayout';
import { AdminLayout } from '@/components/layouts/AdminLayout';
import Head from 'next/head';
import * as colors from '@/styles/colors';

const Button = styled.button({
  backgroundColor: colors.green,
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  cursor: 'pointer',
  '&:hover ': {
    backgroundColor: colors.darkGreen,
  },
});

const Home = () => {
  return (
    <div>
      <Head>
        <title>XLingual Admin</title>
        <meta name="description" content="Manage all content here." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div></div>
      <p css={{ color: colors.green }}>Some Text</p>
      <Button>I am a button</Button>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
      <AdminLayout>{page}</AdminLayout>
    </BaseLayout>
  );
};

export default Home;
