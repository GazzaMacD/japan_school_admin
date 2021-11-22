/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import * as colors from '@/styles/colors';
import * as mq from '@/styles/media-queries';

const inputStyles = {
  border: '1px solid #f1f1f4',
  background: '#f1f2f7',
  padding: '8px 12px',
  ':focus': {
    outline: 'none',
    border: `1px solid ${colors.green}`,
    boxShadow: `0 0 5px ${colors.green}`,
  },
};

const Input = styled.input({ borderRadius: '3px' }, inputStyles);
const TextArea = styled.textarea(inputStyles);
const FormGroup = styled.div({
  marginBottom: '20px',
  display: 'flex',
  flexDirection: 'column',
});

export { Input, TextArea, FormGroup };
