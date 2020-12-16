import Head from 'next/head';
import React from 'react';
import NavBar from './NavBar.js';
import Footer from './Footer.js';

const Layout = ({ children, subtitle, description, previewImage }) => {
  return (
    <div>
      <Head>
        <title>{`Natalia Kobylinska | ${subtitle}`}</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content={description} />
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />

        {/* Open Graph */}
        <meta property='og:type' content='website' key='ogtype' />
        <meta
          property='og:url'
          content={'https://www.nata-ko.com'}
          key='ogurl'
        />
        <meta
          property='og:image'
          content={'https://www.nata-ko.com' + previewImage}
          key='ogimage'
        />
        <meta
          property='og:site_name'
          content='Natalia Kobylinska'
          key='ogsitename'
        />
        <meta
          property='og:title'
          content={`Natalia Kobylinska | ${subtitle}`}
          key='ogtitle'
        />
        <meta property='og:description' content={description} key='ogdesc' />
      </Head>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
