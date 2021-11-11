/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Logo } from '@/components/elements/Logo';

const brandGreen = '#b0e600';
const oliveGreen = '#79990f';
const mq = {
  small: '@media (min-width: 576px)',
};

const Button = styled.button({
  backgroundColor: brandGreen,
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  cursor: 'pointer',
  '&:hover ': {
    backgroundColor: oliveGreen,
  },
});

const Home: NextPage = () => {
  const handleAlert = () => alert('hi');
  return (
    <div>
      <Head>
        <title>XLingual Admin</title>
        <meta name="description" content="Manage all content here." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        css={{
          backgroundColor: brandGreen,
          [mq.small]: {
            backgroundColor: 'green',
          },
        }}
      >
        <Logo />
      </main>
      <p css={{ color: oliveGreen }}>Some Text</p>
      <Button>I am a button</Button>
    </div>
  );
};

export default Home;
