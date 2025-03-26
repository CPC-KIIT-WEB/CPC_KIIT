import React from "react";
import Hero from "./Hero";
import About from "./About"
import LeadCards from "./LeadCards";
import DomainCards from "./DomainCards";
const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <section>
      <div className="bruno-ace-regular text-center text-5xl py-5 text-yellow-400">OUR DOMAINS</div>
      <div><DomainCards /></div>
      <div className="bruno-ace-regular text-center text-5xl py-5 text-yellow-400">OUR LEADS</div>
      <div><LeadCards /></div>
      </section>
    </div>
  );
};

export default Home;
