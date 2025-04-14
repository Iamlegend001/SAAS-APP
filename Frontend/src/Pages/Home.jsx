import React from 'react';
import Header from '../Components/Header';
import Steps from '../Components/Steps';
import Description from '../Components/Description';
import Testimonials from '../Components/Testimonials';
import GenerateBtn from '../Components/GenerateBtn';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="space-y-20">
      <Header />
      <motion.section
        className="max-w-5xl mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Steps />
      </motion.section>
      <motion.section
        className="bg-white py-12 px-4 rounded-xl shadow-sm max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <Description />
      </motion.section>
      <motion.section
        className="max-w-6xl mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <Testimonials />
      </motion.section>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        <GenerateBtn />
      </motion.div>
    </div>
  );
};

export default Home;
