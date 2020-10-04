/** @jsx jsx */
import { css, jsx } from '@emotion/core';

function Footer() {
  return (
    <div
      css={css`
        background-color: white;
        overflow: hidden;
        position: fixed;
        text-align: center;
        bottom: 0;
        width: 100%;
        height: 75px;

        ul {
          display: inline;
          list-style-type: none;
          background: #fefefe;
          padding: 0;

          li {
            display: inline-block;
            padding: 15px 40px;
            margin: 0 auto;
          }
        }

        button {
          position: relative;
          top: 5px;
          outline: none;
          border: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          cursor: pointer;
          margin: 2px 0 0 0;
          border: none;
          background: transparent;
        }

        a {
          text-decoration: none;
          color: black;
          font-weight: 700;
        }
      `}
    >
      <ul>
        <li>
          <a
            target='_blank'
            href='https://www.facebook.com/landingonthecoffeebean/'
          >
            fb
          </a>
        </li>
        <li>
          <a target='_blank' href='https://vimeo.com/user33474221'>
            vimeo
          </a>
        </li>
        <li>
          <a
            target='_blank'
            href='https://www.instagram.com/landingonthecoffeebean/'
          >
            <svg
              width='25px'
              height='25px'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 22.7 22.9'
            >
              <path d='M11.3 0c2 .1 4 .1 6 .3 2.9.3 5.1 2.4 5.2 5.3.2 3.9.2 7.9 0 11.8-.2 2.9-2.3 5.1-5.3 5.3-4 .2-8 .2-11.9 0-2.9-.2-5.1-2.4-5.2-5.3-.2-3.9-.2-7.9 0-11.8C.3 2.7 2.4.6 5.4.3c2-.2 3.9-.2 5.9-.3zm9.3 11.5h.1V7.9c0-.5-.1-1.1-.1-1.6-.2-2.4-1.6-4-4-4-3.5-.1-7-.1-10.4 0-2.4.1-4 1.6-4 4-.1 3.5-.1 7 0 10.4.1 2.4 1.6 4 4 4 3.5.1 7 .1 10.4 0 2.4-.1 3.9-1.6 4-4 .1-1.7 0-3.4 0-5.2z' />
              <path d='M11.3 5.7c3.3 0 5.9 2.5 5.9 5.8s-2.6 5.9-5.9 5.9c-3.3 0-5.8-2.6-5.8-5.9 0-3.3 2.6-5.8 5.8-5.8zm.1 2c-2.1 0-3.8 1.7-3.8 3.8 0 2.1 1.7 3.8 3.8 3.8 2.1 0 3.9-1.7 3.9-3.8-.1-2-1.8-3.8-3.9-3.8zM17.5 4.1c.8 0 1.4.6 1.4 1.4 0 .8-.6 1.3-1.3 1.3-.8 0-1.4-.6-1.4-1.4-.1-.8.5-1.3 1.3-1.3z' />
            </svg>
          </a>
        </li>
        <li>
          <a
            target='_blank'
            href='https://www.linkedin.com/in/natalia-kobylinska-2a37b375'
          >
            in
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
