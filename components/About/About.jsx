/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { motion } from 'framer-motion';

const variants = {
  open: {
    zIndex: 3,
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    zIndex: -1,
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const childVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};
const About = ({ visible }) => (
  <motion.ul
    css={css`
      visibility: ${visible ? 'visible' : 'hidden'};
      position: absolute;
      right: 55px;
      top: 55px;
      background-color: snow;
      width: 415px;
      float: right;
      box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);

      border-radius: 5px;
      border: black;
      list-style-type: none;

      li {
        text-align: left;
        font-size: 1rem;
        line-height: 1.4rem;
        flex: 1;
        padding: 0px 20px 15px 20px;

        a {
          text-align: center;
          border-radius: 5px;
          flex: 2;
          padding:0px;
        }
      }
    `}
    variants={variants}
  >
    <motion.li variants={childVariants}>
      <div css={css``}>
        <p>
          In case you had an interesting film project, needed a photographer or
          just wanted to share some fun facts about the universe, drop me a
          line!
        </p>
      </div>
    </motion.li>
    <motion.li
      variants={childVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      style={{textAlign: "center"}}
    >
      <a href='mailto: natkobylinska@gmail.com'>natkobylinska@gmail.com</a>
    </motion.li>
  </motion.ul>
);

const itemIds = [0, 1];

export default About;
