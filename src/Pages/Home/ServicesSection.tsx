import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TbDeviceVisionPro } from "react-icons/tb";
import { LuBrain } from "react-icons/lu";
import { MdRecommend } from "react-icons/md";
import { BiSolidUserVoice } from "react-icons/bi";
import { PiStrategyFill } from "react-icons/pi";
import { TbSettingsAutomation } from "react-icons/tb";

const services = [
  {
    title: "Computer Vision Solutions",
    description:
      "Empower your business with advanced image and video analysis, enabling automated detection, classification, and real-time monitoring for operational excellence.",
    icon: TbDeviceVisionPro,
    image: "/image/s1.jpg",
    color: "from-red-500 to-pink-500",
    features: [
      "Object Detection",
      "Image Classification",
      "Video Analytics",
      "Facial Recognition",
    ],
    benefits: [
      "Improved Quality Control",
      "Enhanced Security and Monitoring",
      "Streamlined Visual Inspections",
      "Accurate Real-Time Alerts",
    ],
  },
  {
    title: "Intelligent Document Processing",
    description:
      "Leverage AI-driven OCR and NLP technologies to automate document classification, extraction, and analysis, boosting operational efficiency and reducing errors.",
    icon: LuBrain,
    image: "/image/s2.webp",
    color: "from-yellow-500 to-orange-500",
    features: [
      "Optical Character Recognition",
      "Data Extraction",
      "Document Classification",
      "Automated Workflows",
    ],
    benefits: [
      "Reduced Manual Data Entry",
      "Decreased Processing Time",
      "Lower Error Rates",
      "Scalable Document Management",
    ],
  },
  {
    title: "Recommender Systems",
    description:
      "Enhance user engagement and satisfaction by delivering personalized content, product, or service recommendations powered by collaborative filtering and machine learning.",
    icon: MdRecommend,
    image: "/image/s3.jpg",
    color: "from-purple-500 to-yellow-500",
    features: [
      "Personalized Content Delivery",
      "Product Recommendation Engine",
      "Dynamic User Profiling",
      "Behavioral Analytics",
    ],
    benefits: [
      "Increased Conversion Rates",
      "Enhanced User Experience",
      "Targeted Marketing Campaigns",
      "Higher Customer Retention",
    ],
  },
  {
    title: "Voice & Speech Recognition",
    description:
      "Integrate powerful speech-to-text and text-to-speech solutions into your applications, improving accessibility and delivering efficient voice-driven interactions.",
    icon: BiSolidUserVoice,
    image: "/image/s4.png",
    color: "from-indigo-500 to-blue-500",
    features: [
      "Speech-to-Text Transcription",
      "Voice Authentication",
      "Text-to-Speech Synthesis",
      "Natural Language Understanding",
    ],
    benefits: [
      "Hands-Free Operations",
      "Improved Accessibility",
      "Enhanced User Engagement",
      "Reduced Operational Costs",
    ],
  },
  {
    title: "AI Consultancy & Strategy",
    description:
      "Partner with our experts to identify AI opportunities, plan data strategies, and develop customized roadmaps for sustainable innovation and competitive advantage.",
    icon: PiStrategyFill,
    image: "/image/s5.png",
    color: "from-green-500 to-teal-500",
    features: [
      "AI Maturity Assessment",
      "Data Strategy Planning",
      "Custom Roadmap Development",
      "Executive Training",
    ],
    benefits: [
      "Actionable Insights for Growth",
      "Strategic Technology Alignment",
      "Reduced Project Risks",
      "Long-Term Competitive Edge",
    ],
  },
  {
    title: "Robotic Process Automation (RPA)",
    description:
      "Automate repetitive, rule-based tasks across your organization using RPA bots, reducing errors and freeing up your workforce for higher-value activities.",
    icon: TbSettingsAutomation,
    image: "/image/s6.png",
    color: "from-gray-600 to-black",
    features: [
      "Workflow Automation",
      "Bot Development & Deployment",
      "Real-Time Process Monitoring",
      "Multi-System Integration",
    ],
    benefits: [
      "Reduced Operational Costs",
      "Fewer Manual Errors",
      "Improved Compliance",
      "Scalable Automation Solutions",
    ],
  },
];

const words = [
  { text: "Our", className: "text-black" },
  { text: "AI", className: "text-green-600" },
  { text: "Solutions", className: "text-black" },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-gray-50 px-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-10">
          <TypewriterEffectSmooth
            words={words}
            cursorClassName={"text-green bg-green-600"}
          />
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services &&
            services.length > 0 &&
            services.map((service, index) => (
              <Card
                key={index}
                className="overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <div className="relative h-48">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="transition-transform duration-300  bg-cover absolute h-full w-full object-cover inset-0"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-50`}
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
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="ghost" className="group">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px] bg-gradient-to-b from-[#c1f0c6] to-white">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold tracking-tight">
                          {service.title}
                        </DialogTitle>
                        <DialogDescription className="text-base text-black/80 mt-4">
                          {service.description}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-6">
                        <div className="space-y-4">
                          <h3 className="font-semibold leading-none tracking-tight">
                            Key Features
                          </h3>
                          <ul className="list-disc list-inside space-y-2 text-black/70">
                            {service.features.map((feature, index) => (
                              <li key={index}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="space-y-4">
                          <h3 className="font-semibold leading-none tracking-tight">
                            Benefits
                          </h3>
                          <ul className="list-disc list-inside space-y-2 text-black/70">
                            {service.benefits.map((benefit, index) => (
                              <li key={index}>{benefit}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
