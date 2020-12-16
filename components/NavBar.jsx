/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { motion, useCycle } from 'framer-motion';
import { useRef } from 'react';
import About from './About/About.jsx';
import AboutButton from './About/AboutButton.jsx';
import Menu from './Menu/Menu.jsx';
import MenuButton from './Menu/MenuButton.jsx';
import { useDimensions } from './util/useDimentions.jsx';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `rect(${height * 2 + 200}px at 260px 40px)`,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'rect(0px at 260px 40px)',
    opacity: 0,
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 200,
      damping: 40,
    },
  },
};

const menu = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 220px 40px)`,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(0px at 220px 40px)',
    opacity: 1,
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 200,
      damping: 40,
    },
  },
};

export const NavBar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [isShown, toggleShown] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <div
      css={css`
        background: white;
        display: flex;
        top: 0;
        width: 100%;
        height: 60px;

        ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
          overflow: hidden;
        }
      `}
    >
      <ul style={{ display: 'inline', width: '100%', textAlign: 'center' }}>
        <li
          className='logo'
          style={{
            margin: 'auto 5vw',
            float: 'left',
            alignItems: 'center',
          }}
        >
          <a
            style={{
              display: 'block',
              color: 'black',
              textAlign: 'center',
              fontSize: '1.5rem',
              padding: '14px 16px',
              textDecoration: 'none',
              textAlign: 'center',
            }}
            href='/'
          >
            Natalia Kobylinska
          </a>
        </li>
        <li style={{ margin: '0px 110px 0px 0px', float: 'right' }}>
          <motion.div
            className='nav-button'
            initial={false}
            animate={isShown ? 'open' : 'closed'}
            custom={height}
            ref={containerRef}
          >
            <motion.div
              css={css`
                position: absolute;
                right: 25px;
                top: 25px;
              `}
              variants={menu}
            />
            <Menu />
            <MenuButton toggle={() => toggleShown()} />
          </motion.div>
        </li>
        <li style={{ float: 'right' }}>
          <motion.div
            className='nav-button'
            initial={false}
            animate={isOpen ? 'open' : 'closed'}
            custom={height}
            ref={containerRef}
          >
            <motion.div
              css={css`
                position: absolute;
                right: 25px;
                top: 25px;
                width: 212px;
              `}
              variants={sidebar}
            />
            <About visible={isOpen} />
            <AboutButton toggle={() => toggleOpen()} />
          </motion.div>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
