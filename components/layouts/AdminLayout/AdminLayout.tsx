import Head from 'next/head';
import { Logo } from '@/components/elements/Logo';
import { TChildrenProps } from '@/common/types';

const AdminLayout = ({ children }: TChildrenProps): JSX.Element => {
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
    </>
  );
};

export { AdminLayout };
