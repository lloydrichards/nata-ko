import Layout from '../components/layout.jsx';
import Slideshow from '../components/Slideshow.jsx';

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
