/** @jsx jsx */
import { css, jsx, keyframes } from '@emotion/core';

const pulse = keyframes`
    0% {
      transform: scale(0.85);
      box-shadow: 0 0 0 0 rgba(0, 0, 255, 0.7);
    }
  
    70% {
      transform: scale(1);
      box-shadow: 0 0 0 15px rgba(0, 0, 255, 0);
    }
  
    100% {
      transform: scale(0.85);
      box-shadow: 0 0 0 0 rgba(0, 0, 255, 0);
    }
  `;

const MenuButton = ({ toggle }) => (
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
      right: 70px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: transparent;
      align-items: center;
    `}
    onClick={toggle}
  >
    <div
      css={css`
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
        transform: scale(1);
        animation: ${pulse} 4s infinite;
        display: block;
        background: blue;
        border-radius: 50%;
        margin: auto;
        height: 23px;
        width: 23px;
      `}
    />
  </button>
);

export default MenuButton;
