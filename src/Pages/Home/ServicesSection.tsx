import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { ArrowRight, Cpu, Network } from "lucide-react";
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
import { Brain } from "lucide-react";

const services = [
  {
    title: "AI-Powered Analytics",
    description:
      "Harness the power of machine learning to extract actionable insights from your data, driving informed decision-making across your organization.",
    icon: Brain,
    image: "/placeholder.svg?height=200&width=400",
    color: "from-purple-500 to-indigo-500",
    features: [
      "Predictive Modeling",
      "Data Visualization",
      "Anomaly Detection",
      "Real-time Reporting",
    ],
    benefits: [
      "Improved Forecasting Accuracy",
      "Data-Driven Decision Making",
      "Identification of Hidden Trends",
      "Increased Operational Efficiency",
    ],
  },
  {
    title: "Natural Language Processing",
    description:
      "Leverage cutting-edge NLP models to understand, interpret, and generate human-like text, revolutionizing customer interactions and content creation.",
    icon: Cpu,
    image: "/placeholder.svg?height=200&width=400",
    color: "from-blue-500 to-cyan-500",
    features: [
      "Sentiment Analysis",
      "Text Summarization",
      "Chatbot Development",
      "Language Translation",
    ],
    benefits: [
      "Enhanced Customer Service",
      "Automated Content Generation",
      "Improved Communication Efficiency",
      "Global Reach and Accessibility",
    ],
  },
  {
    title: "AI Integration Solutions",
    description:
      "Seamlessly integrate AI capabilities into your existing systems and workflows, enhancing efficiency and unlocking new possibilities for innovation.",
    icon: Network,
    image: "/placeholder.svg?height=200&width=400",
    color: "from-green-500 to-emerald-500",
    features: [
      "API Integrations",
      "Custom AI Model Deployment",
      "Workflow Automation",
      "Data Pipeline Development",
    ],
    benefits: [
      "Streamlined Business Processes",
      "Reduced Manual Effort",
      "Increased Productivity",
      "Faster Time to Market",
    ],
  },
  {
    title: "AI-Powered Analytics",
    description:
      "Harness the power of machine learning to extract actionable insights from your data, driving informed decision-making across your organization.",
    icon: Brain,
    image: "/placeholder.svg?height=200&width=400",
    color: "from-purple-500 to-indigo-500",
    features: [
      "Predictive Modeling",
      "Data Visualization",
      "Anomaly Detection",
      "Real-time Reporting",
    ],
    benefits: [
      "Improved Forecasting Accuracy",
      "Data-Driven Decision Making",
      "Identification of Hidden Trends",
      "Increased Operational Efficiency",
    ],
  },
  {
    title: "Natural Language Processing",
    description:
      "Leverage cutting-edge NLP models to understand, interpret, and generate human-like text, revolutionizing customer interactions and content creation.",
    icon: Cpu,
    image: "/placeholder.svg?height=200&width=400",
    color: "from-blue-500 to-cyan-500",
    features: [
      "Sentiment Analysis",
      "Text Summarization",
      "Chatbot Development",
      "Language Translation",
    ],
    benefits: [
      "Enhanced Customer Service",
      "Automated Content Generation",
      "Improved Communication Efficiency",
      "Global Reach and Accessibility",
    ],
  },
  {
    title: "AI Integration Solutions",
    description:
      "Seamlessly integrate AI capabilities into your existing systems and workflows, enhancing efficiency and unlocking new possibilities for innovation.",
    icon: Network,
    image: "/placeholder.svg?height=200&width=400",
    color: "from-green-500 to-emerald-500",
    features: [
      "API Integrations",
      "Custom AI Model Deployment",
      "Workflow Automation",
      "Data Pipeline Development",
    ],
    benefits: [
      "Streamlined Business Processes",
      "Reduced Manual Effort",
      "Increased Productivity",
      "Faster Time to Market",
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
                    //   layout="fill"
                    //   objectFit="cover"
                    className="transition-transform duration-300 hover:scale-105 bg-cover absolute inset-0"
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
