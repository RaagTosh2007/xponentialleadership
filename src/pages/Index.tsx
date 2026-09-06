import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Clients from "@/components/Clients";
import Partners from "@/components/Partners";
import About from "@/components/About";
import Coaching from "@/components/Coaching";
import KnowledgeHub from "@/components/KnowledgeHub";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Clients />
        <Partners />
        <About />
        <Coaching />
        <KnowledgeHub />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
