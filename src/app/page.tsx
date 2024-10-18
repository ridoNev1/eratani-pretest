import {
  Hero,
  Advantage,
  Service,
  Testimonial,
  Partner,
  JoinUs,
  LocationFeedback,
} from "@/components/homepage";
import { Navbar } from "@/components/layout";
import Footer from "@/components/layout/footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Advantage />
      <Service />
      <Testimonial />
      <Partner />
      <JoinUs />
      <LocationFeedback />
      <Footer />
    </>
  );
};

export default Home;
