/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { motion } from 'framer-motion';

const Path = (props) => (
  <motion.path
    fill='transparent'
    strokeWidth='3'
    stroke='hsl(0, 0%, 18%)'
    strokeLinecap='round'
    {...props}
  />
);

const AboutButton = ({ toggle }) => (
  <button
    css={css`
      outline: none;
      border: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      cursor: pointer;
      position: absolute;
      top: 6px;
      right: 24px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: transparent;
    `}
    onClick={toggle}
  >
    <svg
      css={css`
        display: block;
        margin: auto;
      `}
      width='23'
      height='23'
      viewBox='0 0 23 23'
    >
      <Path
        variants={{
          closed: { d: 'M 10 3 L 10 18' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
      />
      <Path
        variants={{
          closed: { d: 'M 3 10 L 18 10' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
      />
    </svg>
  </button>
);

export default AboutButton;
