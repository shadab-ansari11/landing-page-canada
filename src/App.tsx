import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import ServicesSummary from "./components/ServicesSummary/ServicesSummary";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import WhyUs from "./components/WhyUs/WhyUs";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <ServicesSummary />
        <Services />
        <About />
        <WhyUs />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
