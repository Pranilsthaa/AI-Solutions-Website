import { Link } from "react-router-dom";
import CountEffect from "@/components/countEffect";
import { AiFillCodepenSquare } from "react-icons/ai";
import { motion } from "motion/react";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import TestimonialSlider from "@/components/Testimonial/testimonial";
import { FeedbackIcon } from "@/components/Feedback/feedbackIcon";
import { ArrowRight, Brain, Cpu, Network } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import getData from "@/api/getData";
import { useEffect, useState } from "react";

const data = [
  { to: 657, from: 400, duration: 2, label: "Number" },
  { to: 1223, from: 1000, duration: 2, label: "Example" },
  { to: 8772, from: 8300, duration: 2, label: "Testing" },
  { to: 892, from: 850, duration: 5, label: "Coffee" },
];

const services = [
  {
    title: "AI-Powered Analytics",
    description:
      "Harness the power of machine learning to extract actionable insights from your data, driving informed decision-making across your organization.",
    icon: Brain,
    image: "/placeholder.svg?height=200&width=400",
    color: "from-purple-500 to-indigo-500",
  },
  {
    title: "Natural Language Processing",
    description:
      "Leverage cutting-edge NLP models to understand, interpret, and generate human-like text, revolutionizing customer interactions and content creation.",
    icon: Cpu,
    image: "/placeholder.svg?height=200&width=400",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "AI Integration Solutions",
    description:
      "Seamlessly integrate AI capabilities into your existing systems and workflows, enhancing efficiency and unlocking new possibilities for innovation.",
    icon: Network,
    image: "/placeholder.svg?height=200&width=400",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "AI-Powered Analytics",
    description:
      "Harness the power of machine learning to extract actionable insights from your data, driving informed decision-making across your organization.",
    icon: Brain,
    image: "/placeholder.svg?height=200&width=400",
    color: "from-purple-500 to-indigo-500",
  },
  {
    title: "Natural Language Processing",
    description:
      "Leverage cutting-edge NLP models to understand, interpret, and generate human-like text, revolutionizing customer interactions and content creation.",
    icon: Cpu,
    image: "/placeholder.svg?height=200&width=400",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "AI Integration Solutions",
    description:
      "Seamlessly integrate AI capabilities into your existing systems and workflows, enhancing efficiency and unlocking new possibilities for innovation.",
    icon: Network,
    image: "/placeholder.svg?height=200&width=400",
    color: "from-green-500 to-emerald-500",
  },
];

const successStory = [
  {
    name: "Healthcare",
    challenge:
      "A leading hospital network struggled with long wait times for medical imaging analysis, delaying critical diagnoses and treatment plans.",
    solution:
      "We implemented an AI-powered diagnostic tool that analyzes medical imaging data, including X-rays, MRIs, and CT scans. The system uses advanced computer vision and deep learning algorithms to detect anomalies and provide preliminary diagnoses.",
    results: [
      "70% reduction in image analysis time, from 48 hours to under 14 hours",
      "30% increase in early-stage disease detection rates",
      "25% reduction in misdiagnoses, improving patient outcomes",
      "Enabled radiologists to focus on complex cases, increasing overall efficiency",
    ],
    image: "/placeholder.svg?height=200&width=200",
    icon: <AiFillCodepenSquare />,
  },
  {
    name: "Finance",
    challenge:
      "A global bank faced increasing instances of sophisticated fraud attempts, risking millions in potential losses and damaging customer trust.",
    solution:
      "We developed an AI-driven real-time transaction monitoring and risk scoring system. This solution uses machine learning algorithms to analyze patterns across vast amounts of transaction data, identifying potential fraud in milliseconds.",
    results: [
      "50% reduction in fraudulent transactions within the first month",
      "40% improvement in risk assessment accuracy",
      "$10M annual savings in prevented fraud losses",
      "99.9% reduction in false positives, enhancing customer experience",
    ],
    image: "/placeholder.svg?height=200&width=200",
    icon: <AiFillCodepenSquare />,
  },
  {
    name: "Manufacturing",
    challenge:
      "A large automotive manufacturer struggled with frequent unplanned downtime and quality control issues, impacting production efficiency and product reliability.",
    solution:
      "We implemented an AI-driven predictive maintenance system and a real-time quality control tool. The solution uses IoT sensors, machine learning, and computer vision to predict equipment failures and detect product defects on the assembly line.",
    results: [
      "35% reduction in unplanned downtime, saving millions in production costs",
      "20% increase in overall equipment effectiveness (OEE)",
      "15% reduction in defect rates, improving product quality and customer satisfaction",
      "ROI achieved within 8 months, exceeding initial projections",
    ],
    image: "/placeholder.svg?height=200&width=200",
    icon: <AiFillCodepenSquare />,
  },
  {
    name: "Retail",
    challenge:
      "A major e-commerce platform struggled with personalized product recommendations, leading to low conversion rates and customer engagement.",
    solution:
      "We developed an advanced AI-powered recommendation engine using collaborative filtering and deep learning. The system analyzes user behavior, purchase history, and product attributes to provide highly personalized suggestions in real-time.",
    results: [
      "40% increase in click-through rates on recommended products",
      "25% boost in average order value",
      "30% improvement in customer retention rates",
      "15% overall increase in revenue attributed to the recommendation system",
    ],
    image: "/placeholder.svg?height=200&width=200",
    icon: <AiFillCodepenSquare />,
  },
  {
    name: "Agriculture",
    challenge:
      "A large-scale farming operation faced difficulties in optimizing crop yields and reducing resource waste due to unpredictable weather patterns and soil conditions.",
    solution:
      "We created an AI-driven precision agriculture system that combines satellite imagery, IoT sensors, and machine learning algorithms. The system provides real-time insights on crop health, optimal irrigation schedules, and personalized fertilization recommendations.",
    results: [
      "20% increase in crop yields across major produce types",
      "30% reduction in water usage through optimized irrigation",
      "25% decrease in fertilizer and pesticide use",
      "Significant improvement in crop quality and consistency",
    ],
    image: "/placeholder.svg?height=200&width=200",
    icon: <AiFillCodepenSquare />,
  },
];

const words = [
  {
    text: "Our",
    className: "text-black",
  },
  {
    text: "AI",
    className: "text-green-600",
  },
  {
    text: "Solutions",
    className: "text-black",
  },
];
const logos = [
  { name: "Company 1", src: "/image/client_logo_1.png" },
  { name: "Company 2", src: "/image/client_logo_2.jpg" },
  { name: "Company 3", src: "/image/client_logo_3.webp" },
  { name: "Company 4", src: "/image/client_logo_4.png" },
  { name: "Company 5", src: "/image/client_logo_5.png" },
  { name: "Company 6", src: "/image/client_logo_6.jpg" },
  { name: "Company 7", src: "/image/client_logo_7.png" },
  { name: "Company 8", src: "/image/client_logo_8.png" },
];

const success = [
  {
    text: "Success",
    className: "text-black",
  },

  {
    text: "Story",
    className: "text-black",
  },
];

function HomePage() {
  const [customerFeedback, setCustomerFeedback] = useState([]);

  const fetchCustomerFeedback = async () => {
    try {
      const response = await getData("getfeedbacks");
      if (response.status === 200) {
        setCustomerFeedback(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCustomerFeedback();
  }, []);

  return (
    <div>
      <div
        className="flex flex-row justify-between items-center h-[100dvh] bg-cover bg-center"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,1) 29%, rgba(42,145,145,1) 100%)",
        }}
      >
        <div className="flex-1">
          <img src="/image/hero-left.png" alt="" />
        </div>
        <div className="flex-1 flex flex-col justify-center items-center">
          <h1 className="text-6xl text-center font-bold font-dosis text-[clamp(1rem,5vw,4rem)] w-[150%]">
            AI and Machine Learning Products Creators
          </h1>
          <p className="text-slate-500 mt-5 w-[90%] font-poppins mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Link
            to="#"
            className="bg-blue-500 text-white px-8 py-3 rounded-md font-poppins rounded-3xl "
          >
            Get Started
          </Link>
        </div>
        <div className="flex-1">
          <img src="/image/hero-right.png" alt="" />
        </div>
      </div>
      <div className="relative mt-10 min-h-[300px] px-16 mx-16">
        <div
          style={{
            background: 'url("/image/aiHuman.jpg")',
            backgroundSize: "cover",
            width: "100%",
            height: "250px",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            WebkitBackgroundSize: "cover",
          }}
        >
          <div
            style={{
              position: "relative",
              background: "rgba(10,0,0,0.2)",
              width: "100%",
              height: "100%",
            }}
          >
            <div className="flex h-full justify-around items-center text-4xl font-bold text-white">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center"
                >
                  <CountEffect
                    from={item.from}
                    to={item.to}
                    duration={item.duration}
                  />
                  <p className="font-thin text-xl">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* SOLUTIONS SECTION */}
      {/* <div className="min-h-[500px] px-16 mx-16 pb-16">
        <h1 className="text-xl  mb-10">
          <TypewriterEffectSmooth
            words={words}
            cursorClassName={"text-green bg-green-600"}
          />
        </h1>
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-x-10 gap-y-16">
          {dummyData.map((item, index) => (
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  y: { ease: "backInOut" },
                  opacity: { ease: "linear" },
                },
              }}
              key={index}
              className={`${
                index === 1
                  ? " shadow-dimShadowBlue"
                  : "border-[#1282A2] shadow-dimShadowOrange"
              } group border-2 h-[420px] p-[20px] overflow-hidden bg-white
            hover:shadow-dimShadowBlue hover:border-white transition-color duration-500 ease-in-out flex flex-col cursor-default relative`}
            >
              <div className="h-[27%]">
                <img
                  src={item.image}
                  alt=""
                  className="w-28 group-hover:scale-125 transition-all duration-300"
                  loading="lazy"
                />
              </div>

              <h1 className="text-[clamp(1rem,5vw,1.3rem)] font-poppins font-semibold">
                {item.title}
              </h1>
              <p className="text-slate-800 font- text-[clamp(1rem,5vw,0.6rem)] h-[50%]">
                {item.description}
              </p>
              <button className="absolute bottom-4 left-4 font-poppins px-2 py-1 rounded-lg text-blue-900 hover:underline hover:underline-offset-4 hover:decoration-2 font-bold tracking-wide text-sm w-fit mt-2">
                Read More
              </button>
            </motion.div>
          ))}
        </div>
      </div> */}
      <section className="py-24 bg-gray-50 px-20">
        <div className="container mx-auto px-4">
          <h1 className="text-xl  mb-10">
            <TypewriterEffectSmooth
              words={words}
              cursorClassName={"text-green bg-green-600"}
            />
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <div className="relative h-48">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="transition-transform duration-300 hover:scale-105 object-cover w-full h-full absolute inset-0"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-75`}
                  ></div>
                  <service.icon className="absolute top-4 right-4 h-8 w-8 text-white" />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="group">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Trusted By */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-14 text-gray-800 dark:text-gray-200">
            Trusted by Industry Leaders
          </h2>
          <div className="relative overflow-hidden">
            <div className="flex animate-slide">
              {[...logos, ...logos].map((logo, index) => (
                <div key={index} className="flex-shrink-0 w-[150px] mx-8">
                  <img
                    src={logo.src}
                    alt={`${logo.name} logo`}
                    width={150}
                    height={80}
                    className="object-contain aspect-square"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* SUCCESS STORY */}
      <div className="min-h-[500px] px-16 mx-16 pb-16">
        <h1 className="font-dosis text-4xl font-bold mb-10">
          <h1 className="text-xl  mb-10">
            <TypewriterEffectSmooth
              words={success}
              cursorClassName={"text-green bg-green-600"}
            />
          </h1>
        </h1>
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-16">
          {successStory.map((item, index) => (
            <motion.div
              initial={{ x: 80 }}
              whileInView={{
                x: 0,
                transition: {
                  y: { ease: "backInOut" },
                },
              }}
              className={`flex flex-row min-h-[150px] ${
                index === successStory.length - 1 &&
                successStory.length % 2 !== 0
                  ? "col-span-2 justify-center"
                  : ""
              }`}
              key={index}
            >
              <div className="flex-1 border-2 border-orange-200"></div>
              <div className="flex-[3] bg-gray-500 px-6 py-4">
                <figure>
                  <h1 className="text-2xl text-white font-poppins font-bold">
                    Healthcare
                  </h1>
                  <h2 className="text-white font-bold font-poppins">
                    Challenge
                  </h2>
                  <p className="text-slate-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae, culpa quae dolor aliquid maxime ex incidunt
                    velit vitae doloribus sunt.
                  </p>
                </figure>
                <figure>
                  <h1 className="text-white font-poppins font-bold">
                    Our Solution
                  </h1>
                  <p className="text-slate-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae, culpa quae dolor aliquid maxime ex incidunt
                    velit vitae doloribus sunt.
                  </p>
                </figure>
                <figure>
                  <h1 className="text-white font-bold font-poppins">Results</h1>
                  <p className="text-slate-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae, culpa quae dolor aliquid maxime ex incidunt
                    velit vitae doloribus sunt.
                  </p>
                </figure>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Client Testimonial */}
      <TestimonialSlider />
      <FeedbackIcon />
    </div>
  );
}

export default HomePage;
