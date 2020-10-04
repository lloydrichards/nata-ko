/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { motion } from 'framer-motion';
import Link from 'next/link';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const childVariants = {
  open: {
    display: 'inline',
    x: 0,
    opacity: 1,
    transition: {
      x: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    display: 'none',
    x: 50,
    opacity: 0,
    transition: {
      x: { stiffness: 1000 },
    },
  },
};

const Menu = () => (
  <motion.ul
    css={css`
      list-style-type: none;
      text-align: center;
      margin: auto 105px;
      padding: 5px;
      height: 60px;
      top: 6px;
      overflow: hidden;

      li {
        float: right;
        padding: 18px 10px;

        a {
          color: blue;
        }
      }
    `}
    variants={variants}
  >
    <motion.li variants={childVariants}>
      <Link href='/forAwa'>
        <a>Current</a>
      </Link>
    </motion.li>
    <motion.li variants={childVariants}>
      <Link href='/forAwa'>
        <a>For Awa</a>
      </Link>
    </motion.li>
  </motion.ul>
);

export default Menu;
