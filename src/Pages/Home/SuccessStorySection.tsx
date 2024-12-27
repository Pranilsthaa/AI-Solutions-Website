import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { motion } from "framer-motion";

const successStory = [
  {
    name: "Retail",
    challenge:
      "A UK-based online fashion retailer faced challenges with personalized product recommendations, leading to low conversion rates and customer churn.",
    solution:
      "AI Solutions implemented an AI-powered recommendation engine that analyzes customer browsing history, purchase patterns, and real-time interactions to provide highly personalized product suggestions.",
    results: [
      "20% increase in click-through rates on product recommendations",
      "15% uplift in average order value",
      "10% reduction in customer churn",
      "Improved customer satisfaction scores due to more relevant product offerings",
    ],
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Finance",
    challenge:
      "A fintech startup in London struggled with fraud detection, experiencing significant financial losses due to sophisticated fraudulent transactions.",
    solution:
      "AI Solutions developed an AI-driven fraud detection system that utilizes machine learning to identify suspicious patterns and anomalies in real-time transactions.",
    results: [
      "90% accuracy in detecting fraudulent transactions",
      "80% reduction in financial losses due to fraud",
      "Improved operational efficiency in fraud investigation",
      "Enhanced security and trust among customers",
    ],
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Manufacturing",
    challenge:
      "A manufacturing company in the Midlands faced production inefficiencies due to unplanned downtime and equipment failures.",
    solution:
      "AI Solutions implemented a predictive maintenance solution that uses sensor data and machine learning algorithms to predict potential equipment failures and optimize maintenance schedules.",
    results: [
      "30% reduction in unplanned downtime",
      "20% decrease in maintenance costs",
      "15% increase in production output",
      "Improved equipment lifespan and overall factory efficiency",
    ],
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Logistics",
    challenge:
      "A logistics company in the UK was struggling with optimizing delivery routes, resulting in increased fuel costs and delivery delays.",
    solution:
      "AI Solutions developed an AI-powered route optimization system that considers real-time traffic conditions, delivery schedules, and other factors to generate the most efficient delivery routes.",
    results: [
      "15% reduction in fuel costs",
      "10% improvement in on-time delivery rates",
      "5% decrease in delivery mileage",
      "Improved driver efficiency and customer satisfaction",
    ],
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Customer Service",
    challenge:
      "A UK-based telecommunications company was overwhelmed with customer support requests, leading to long wait times and frustrated customers.",
    solution:
      "AI Solutions implemented an AI-powered chatbot that handles common customer inquiries, providing instant support and freeing up human agents to focus on more complex issues.",
    results: [
      "40% reduction in customer support ticket volume",
      "25% improvement in customer satisfaction scores",
      "20% decrease in average handling time for customer inquiries",
      "24/7 availability of customer support",
    ],
    image: "/placeholder.svg?height=200&width=200",
  },
];

const success = [
  { text: "Success", className: "text-black" },
  { text: "Story", className: "text-black" },
];

export function SuccessStorySection() {
  return (
    <div className="min-h-[500px] px-16 mx-16 pb-16">
      <h1 className="font-dosis text-4xl font-bold mb-10">
        <TypewriterEffectSmooth
          words={success}
          cursorClassName={"text-green bg-green-600"}
        />
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
              index === successStory.length - 1 && successStory.length % 2 !== 0
                ? "col-span-2 justify-center"
                : ""
            }`}
            key={index}
          >
            <div className="flex-1 border-2 border-orange-200"></div>
            <div className="flex-[3] bg-gray-500 px-6 py-4">
              <figure>
                <h1 className="text-2xl text-white font-poppins font-bold">
                  {item.name}
                </h1>
                <h2 className="text-white font-bold font-poppins">Challenge</h2>
                <p className="text-slate-300">{item.challenge}</p>
              </figure>
              <figure>
                <h1 className="text-white font-poppins font-bold">
                  Our Solution
                </h1>
                <p className="text-slate-300">{item.solution}</p>
              </figure>
              <figure>
                <h1 className="text-white font-bold font-poppins">Results</h1>
                <ul className="text-slate-300 list-disc list-inside">
                  {item.results.map((result, index) => (
                    <li key={index}>{result}</li>
                  ))}
                </ul>
              </figure>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
