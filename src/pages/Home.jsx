import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import TopSellingProducts from '../components/TopSellingProducts';

export default function Home() {
  return (
    <div>
      <Hero />
      <TopSellingProducts/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}
