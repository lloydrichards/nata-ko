/** @jsx jsx */
import { css, jsx, keyframes } from '@emotion/core';
import { useEffect, useRef, useState } from 'react';
import useResizeObserver from './util/useResizeObservable.jsx';

const FadeInOut = keyframes`0% {
    opacity: 1;
  }
  17% {
    opacity: 1;
  }
  25% {
    opacity: 0;
  }
  92% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }`;

const Slideshow = () => {
  const [screenSize, setScreenSize] = useState('desktop');
  const ref = useRef();
  const dimensions = useResizeObserver(ref);

  useEffect(() => {
    if (!dimensions) return;

    if (dimensions.width > 1080) {
      setScreenSize('desktop');
    } else if (dimensions.width > 500) {
      setScreenSize('tablet');
    } else {
      setScreenSize('mobile');
    }
  }, [dimensions]);
  return (
    <div
      ref={ref}
      css={css`
        position: relative;
        height: 90vh;
        overflow: hidden;
        margin: 0 auto;

        img {
          display: block;
          position: absolute;
          height: 90vh;
          overflow: hidden;
          margin: 0 auto;
          -webkit-animation-name: ${FadeInOut};
          -webkit-animation-timing-function: ease-in-out;
          -webkit-animation-iteration-count: infinite;
          -webkit-animation-duration: 40s;
          -moz-animation-name: ${FadeInOut};
          -moz-animation-timing-function: ease-in-out;
          -moz-animation-iteration-count: infinite;
          -moz-animation-duration: 40s;
          -o-animation-name: ${FadeInOut};
          -o-animation-timing-function: ease-in-out;
          -o-animation-iteration-count: infinite;
          -o-animation-duration: 40s;
          animation-name: ${FadeInOut};
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          animation-duration: 40s;
        }

        img:nth-of-type(1) {
          animation-delay: 30s;
        }
        img:nth-of-type(2) {
          animation-delay: 20s;
        }
        img:nth-of-type(3) {
          animation-delay: 10s;
        }
        img:nth-of-type(4) {
          animation-delay: 0s;
        }
      `}
    >
      <img
        alt='Three people and a plane wreck in a tropical forest'
        src={`/images/${screenSize}/natalia-kobylinska1.jpg`}
      />
      <img
        alt='A japanese man walking through a swimming pool'
        src={`/images/${screenSize}/natalia-kobylinska2.jpg`}
      />
      <img
        alt='a train approaching in a brazilian village'
        src={`/images/${screenSize}/natalia-kobylinska3.jpg`}
      />
      <img
        alt='two people on a meadow high in the mountains partly covered with clouds'
        src={`/images/${screenSize}/natalia-kobylinska4.jpg`}
      />
    </div>
  );
};

export default Slideshow;
