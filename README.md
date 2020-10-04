# nata-ko

Personal website for Natalia Kobylinska, designed and built by Lloyd Richards [website](https://www.lloydrichardsdesign.com)

## Getting Started

In order to start editing the website, you will need a few programs:

- Node.js - [link](https://nodejs.org/en/download/)
- VSCode - [link](https://code.visualstudio.com/)
- (optional) Github Desktop - [link](https://desktop.github.com/)

First get the Git Repo on your computer with either Github Desktop or downloading the repo (and then using command lines to commit and push changes).

Next you'll want to open the Repo using VSCode, either right click and open in Code or open the folder in a new window.

With the project open you can bring up the internal command console using Ctrl + `

To start a developer server, use the following command in the command console.

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## File Structure

There are a few important folders to know about in the Repo.

**pages**
Here you find each page on the website, this is anything with a URL from your main. The pages are built in the same way as they are structured so you can add deeper urls by making folders if wanted. Whatever you call the file will be page name, so for example there is a file called forAwa.jsx in the pages folder. This translates to www.nata-ko.com/forAwa

**public**
Here you will find any files that are publicly available for use and access. This is mostly used to store images and documents that you can reference in you webpages. When you place a file in the public folder you can access it directly by simply using /[relativeDirectory]. For example, I have images for the frnot page in public/images/website/nataliaKobnylinska1.jpeg. The code to access this is:

```html
<img
  alt="Three people and a plane wreck in a tropical forest"
  src="/images/website/nataliaKobnylinska1.jpeg"
/>
```

**components**
Here you will find the "meat" of the JS that makes up the website. The most typical design pattern is to have the page.js with multiple smaller components, each made up of other components so that the code is small and easy to understand. For the most part you don't need to know whats in here, but if you want to learn how to add JS to the website then I can help you get started in here.

## Add a Page

So you want to add a page to the website. You will need to follow the following steps:

1. Create a new JSX file inside the /pages folder called what you want th url to be (eg. helloWorld.jsx -> www.nata-ko.com/helloWorld)
1. In the empty file create a basic functional react components. eg:

```js
import React from 'react';

const PageName = () => {
  return <div></div>;
};

export default PageName;
```

3. If you want the webpage to have the same NavBar and Footer then use the Layout component and add your content inside.

```js
import React from 'react';
import Layout from '../components/layout';

const PageName = () => {
  return <Layout>//Your content here</Layout>;
};

export default PageName;
```

4. Add the title and description for the page for SEO purposes.

```js
return (
  <Layout
    subtitle='New Page'
    description='This is a new Page.'
    previewImage='/images/preview/newPage.jpeg'
  >
    //Your content here
  </Layout>
);
```

5. If you want to add JS components, make sure they are built inside the /component folder. Otherwise, anything can be added inside the Layout

## Add Images

If you want to add images to your pages the you first need to optimize them for web. Do this by first resizing them to whatever size you actually will be viewing them. Typically nothing needs to be over 1080px. Next you need to open the image in Photoshop and save it for Web. This is found either File/SaveForWeb or File/export/SaveForWeb. Make sure the file is a jpeg and the quality is appropriate for the page.

Next put the image in the /public/images folder in the appropriate folder. I sometimes have folders for each page or maybe certain categories like blogs.

With the image in the folder you can now link to it with a <img> and then use the src property to the file. Be sure to remove the /public part so its looks something like this:

```html
<img alt="Whats in the picture" src="/images/newPage/newPicture.jpeg" />
```

## CSS to a New Page

There are a few ways about this. You can either create a new .css file inside the /styles folder or edit the globals.css file and add what you need. This is basiclly like any other html/css website where you need to add a class to the elements, but with React you need to call it a className, not class. eg:

```jsx
<div className='root-content' />
```

Or you add the css directly inside the JSX using the style property. There is a little bit of a different naming convention for things and you need to remember to always add things as strings, but its very useful for little tweeks. eg:

```jsx
<div style={{ background: 'blue', width: '240px', height: '180px' }} />
```

Or you can use Emotion which allows you to put css but with more variable control over the values. There is lots of documentation on how to do this but the basic thing looks like this:

```jsx
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';

const PageName = () => {
  return (
    <div
      css={css`
        background: tomato;
        color: green;
        font-size: 2.4rem;
        p {
          color: red;
        }
      `}
    >
      Green Words
      <p>Red Words</p>
    </div>
  );
};

export default PageName;
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

There are a few useful libraries I've installed in the package.json what you can use in the project:

- emotion [link](https://emotion.sh/docs/introduction) - Way for using CSS inside the JS which makes things easier and more modular.
- Material UI [link](https://material-ui.com/) - Powerful framework with lots of build in components for making buttons, grids, layouts etc
- Framer Motion [link](https://www.framer.com/motion/) - Way to make things move and animate in JS

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
