import Footer from '../components/Footer';
import Hero from '../components/Hero';
import PreviousWorkSection from '../components/PreviousWork';
import Testimonials from '../components/Testimonials';
// import TopSellingProducts from '../components/TopSellingProducts';

export default function Home() {
  return (
    <div>
      <Hero />
      {/* <TopSellingProducts/> */}
      <PreviousWorkSection/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}
