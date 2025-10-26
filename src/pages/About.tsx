import Header from "@/components/Header";
import Welcome from "@/components/Welcome";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen gradient-hero">
      <Header />
      <div className="pt-20">
        <Welcome />
      </div>
      <Footer />
    </div>
  );
};

export default About;
