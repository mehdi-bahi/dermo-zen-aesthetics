import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen gradient-hero">
      <Header />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <Welcome />
      </div>
      <Services />
      <Gallery />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
