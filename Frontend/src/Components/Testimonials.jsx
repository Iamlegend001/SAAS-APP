import React from "react";
import { assets, testimonialsData } from "../assets/assets";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center my-20 py-12 px-6 md:px-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h1 className="text-3xl sm:text-4xl font-bold mb-2">
        Customer Testimonials
      </h1>

      <p className="text-gray-600 mb-12 text-base sm:text-lg">
        What our users are saying
      </p>

      <div className="flex flex-wrap justify-center gap-8 w-full max-w-6xl">
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 w-full sm:w-[300px] md:w-[350px] transition hover:shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: index * 0.2,
              duration: 0.4,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h2 className="text-lg font-semibold">{testimonial.name}</h2>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
            <div className="flex mb-3">
              {Array(testimonial.stars)
                .fill()
                .map((item, index) => (
                  <img
                    key={index}
                    src={assets.rating_star}
                    alt="star"
                    className="w-4 h-4"
                  />
                ))}
            </div>
            <p className="text-gray-600 text-sm">{testimonial.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;
