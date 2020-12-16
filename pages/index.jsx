import Layout from '../components/layout.js';
import Slideshow from '../components/Slideshow.js';

export default function Home() {
  return (
    <Layout
      subtitle='Home'
      description='Personal website for Natalia Kobylinska. Including projects, portfolios and CVs.'
      previewImage='/images/preview/home.jpeg'
    >
      <Slideshow />
    </Layout>
  );
}
