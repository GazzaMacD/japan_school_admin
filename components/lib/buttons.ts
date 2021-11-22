/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import * as colors from '@/styles/colors';
import * as mq from '@/styles/media-queries';
//Types
type TVariants = 'primary' | 'secondary';
type TButtonVariants = Record<
  TVariants,
  Record<string, string | Record<string, string>>
>;

const buttonVariants: TButtonVariants = {
  primary: {
    background: colors.green,
    color: colors.base,
    ':hover': {
      background: colors.greenLighter,
    },
  },
  secondary: {
    background: colors.gray,
    color: colors.text,
  },
};
const Button = styled.button(
  {
    padding: '10px 15px',
    border: '0',
    lineHeight: '1',
    borderRadius: '3px',
    cursor: 'pointer',
  },
  ({ variant = 'primary' }: { variant?: TVariants }) => buttonVariants[variant]
);

export { Button };
