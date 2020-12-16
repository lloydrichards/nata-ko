import Layout from '../components/layout';
import Slideshow from '../components/Slideshow';

export default function Home() {
  return (
    <Layout
      subtitle='Home'
      description='Personal website for Natalia Kobylinska. Projects, Portfolios and CVs.'
      previewImage='/images/preview/home.jpeg'
    >
      <Slideshow />
    </Layout>
  );
}
