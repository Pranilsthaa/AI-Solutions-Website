import { useEffect, useState } from "react";
import { HeroSection } from "./HeroSection";
import { StatisticsSection } from "./StatisticsSection";
import { ServicesSection } from "./ServicesSection";
import { TrustedBySection } from "./TrustedBySection";
import { SuccessStorySection } from "./SuccessStorySection";
import TestimonialSlider from "@/components/Testimonial/testimonial";
import { FeedbackIcon } from "@/components/Feedback/feedbackIcon";
import getData from "@/api/getData";

export default function HomePage() {
  const [customerFeedback, setCustomerFeedback] = useState([]);

  const fetchCustomerFeedback = async () => {
    try {
      const response = await getData("getfeedbacks");
      if (response.status === 200) {
        setCustomerFeedback(response.data);
      }
    } catch (error) {
      console.error("Error fetching customer feedback:", error);
    }
  };

  useEffect(() => {
    fetchCustomerFeedback();
  }, []);
  console.log(customerFeedback);
  return (
    <div>
      <HeroSection />
      <StatisticsSection />
      <ServicesSection />
      <TrustedBySection />
      <SuccessStorySection />
      <TestimonialSlider data={customerFeedback} />
      <FeedbackIcon />
    </div>
  );
}
