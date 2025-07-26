import AboutUs from "./Home/AboutUs";
import ConsultationForm from "./Home/ConsultationForm";
import FaqSection from "./Home/FaqSection";
import Hero from "./Home/Hero";
import HomeTestimonials from "./Home/HomeTestimonials";
import Pricing from "./Home/Pricing";
import StepsSection from "./Home/StepsSection";
import Testimonials from "./Home/Testimonials";
import WhatsappButton from "./Home/WhatsappButton";

export default function Home() {
  return (
    <div>
      <Hero />
      <Testimonials />
      <ConsultationForm id="cost-calculator" />
      <AboutUs />
      <Pricing />
      <StepsSection />
      <HomeTestimonials />
      <FaqSection />
      <WhatsappButton />
    </div>
  );
}
