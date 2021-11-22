/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as React from 'react';
import Head from 'next/head';
import { TChildrenProps } from '@/common/types';

const BaseLayout = ({ children }: TChildrenProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>XLingual Admin</title>
      </Head>
      <div>{children}</div>
    </>
  );
};

export { BaseLayout };
