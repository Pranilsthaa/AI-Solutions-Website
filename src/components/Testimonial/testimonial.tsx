"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { fallBackImg } from "@/Pages/-Events/EventDetail/eventByID";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  service: string;
}

const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
};

const TestimonialSlider: React.FC = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative py-24 bg-gradient-to-b from-blue-50/80 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-12 left-12 w-8 h-8 border-2 border-blue-200 rounded-full opacity-20" />
      <div className="absolute bottom-12 right-12 w-12 h-12 text-cyan-400 opacity-20">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
      </div>
      <div className="absolute -top-4 right-1/4 w-6 h-6 rounded-full bg-red-100/40" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Clients Say About Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how our services have transformed businesses and delighted
            our clients. Read their stories and experiences below.
          </p>
        </motion.div>

        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{
            clickable: true,
            bulletActiveClass: "swiper-pagination-bullet-active !bg-orange-500",
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          className="testimonial-swiper !pb-16"
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {data &&
            data.length > 0 &&
            data.map((testimonial, index) => (
              <SwiperSlide key={testimonial.id}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto"
                  >
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                      <div className="flex-shrink-0">
                        <Avatar className="w-20 h-20 border-4 border-orange-100">
                          <AvatarImage
                            src={testimonial.image}
                            alt={testimonial.name}
                          />
                          <AvatarFallback>
                            {getInitials(testimonial.name)}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      <div className="flex-1 text-center md:text-left">
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                          {testimonial.name}
                        </h3>
                        <Badge variant="secondary" className="mb-4">
                          {testimonial.service}
                        </Badge>
                        <p className="text-blue-600/80 text-lg mb-6">
                          "{testimonial.message}"
                        </p>
                        <div className="flex justify-center md:justify-start gap-1">
                          {[...Array(parseInt(testimonial.rating))].map(
                            (_, i) => (
                              <Star
                                key={i}
                                className="w-6 h-6 text-orange-500 fill-current"
                              />
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </SwiperSlide>
            ))}
          <div className="swiper-button-prev !text-orange-500 !w-12 !h-12 !bg-white !rounded-full !shadow-md after:!text-2xl"></div>
          <div className="swiper-button-next !text-orange-500 !w-12 !h-12 !bg-white !rounded-full !shadow-md after:!text-2xl"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialSlider;
