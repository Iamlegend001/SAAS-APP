import React from 'react';
import Header from '../Components/Header';
import Steps from '../Components/Steps';
import Description from '../Components/Description';
import Testimonials from '../Components/Testimonials';
import GenerateBtn from '../Components/GenerateBtn';

const Home = () => {
  return (
    <div className="space-y-20">
      <Header />
      <section className="max-w-5xl mx-auto px-4">
        <Steps />
      </section>
      <section className="bg-white py-12 px-4 rounded-xl shadow-sm max-w-6xl mx-auto">
        <Description />
      </section>
      <section className="max-w-6xl mx-auto px-4">
        <Testimonials />
      </section>
      <GenerateBtn />
    </div>
  );
};

export default Home;
