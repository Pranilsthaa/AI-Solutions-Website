import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { motion } from "framer-motion";

const successStory = [
  {
    name: "Healthcare",
    challenge:
      "A private hospital in Manchester faced difficulties in accurately identifying anomalies in X-ray and MRI scans, leading to missed diagnoses and treatment delays.",
    solution:
      "AI Solutions deployed their 'Computer Vision Solutions' to automatically detect abnormalities in medical imaging. The system leveraged advanced object detection and image classification algorithms to assist doctors in making more accurate diagnoses.",
    results: [
      "30% reduction in missed diagnoses",
      "20% decrease in time to diagnose critical conditions",
      "Improved treatment outcomes through earlier intervention",
      "Enhanced patient trust and confidence in hospital services",
    ],
    image:
      "https://cdn.prod.website-files.com/650c1bee516c4e723b11b29a/65206264927e177f8bd65950_651f6a5b0bcc2eb5956182ea_Top%252050%2520Healthcare%2520Companies%2520and%2520Their%2520Impact%2520on%2520the%2520Industry.webp",
  },
  {
    name: "Finance",
    challenge:
      "A leading UK insurance provider struggled with manually processing large volumes of documents, causing lengthy turnaround times and high error rates.",
    solution:
      "AI Solutions implemented their 'Intelligent Document Processing' service. Using optical character recognition (OCR) and machine learning, the system automated document classification and data extraction, drastically reducing manual input.",
    results: [
      "40% reduction in document processing time",
      "35% decrease in manual data entry errors",
      "Improved compliance through better data accuracy",
      "Faster turnaround for claim approvals and customer service",
    ],
    image:
      "https://cdn.corporatefinanceinstitute.com/assets/finance-definition.jpg",
  },
  {
    name: "E-commerce",
    challenge:
      "A rapidly growing online marketplace struggled to personalize product recommendations, resulting in lower average order value and customer engagement.",
    solution:
      "AI Solutions deployed 'Recommender Systems' to analyze user behavior, purchase history, and browsing patterns, generating tailored product suggestions and improving user experience.",
    results: [
      "25% increase in customer engagement with recommended products",
      "15% uplift in average order value",
      "Enhanced site navigation with dynamic product displays",
      "Stronger customer loyalty due to better personalization",
    ],
    image: "https://avantify.io/wp-content/uploads/2023/12/ecommerce.jpeg",
  },
  {
    name: "Telecom",
    challenge:
      "A large UK telecommunications company faced high call volumes, leading to long wait times and reduced customer satisfaction.",
    solution:
      "AI Solutions integrated their 'Voice & Speech Recognition' service into the company's customer support system. This enabled automated call routing, speech-to-text transcription, and intelligent IVR (Interactive Voice Response) to quickly direct callers to the right agent or self-service option.",
    results: [
      "20% decrease in average call handling time",
      "Improved customer satisfaction due to faster resolution",
      "Reduced strain on human support agents",
      "Optimized call flow using real-time speech analytics",
    ],
    image:
      "https://telecomreviewasia.com/images/stories/2023/06/Strategies_for_Telecom_Companies_to_Thrive_in_Dynamic_Asia-Pacific_Market.jpg",
  },
  {
    name: "Retail Operations",
    challenge:
      "A nationwide grocery chain struggled with labor-intensive back-office tasks, from inventory checks to invoice reconciliation, causing bottlenecks and delays.",
    solution:
      "AI Solutions provided a combined 'AI Consultancy & Strategy' alongside 'Robotic Process Automation (RPA)'. They mapped out core processes and deployed RPA bots to handle repetitive tasks, allowing employees to focus on higher-value activities.",
    results: [
      "30% reduction in manual errors across invoicing and data entry",
      "15% faster inventory audits",
      "Significant cost savings by reallocating staff resources",
      "Scalable automation framework for future expansion",
    ],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDe2_ubrr6BZ4B-EN1bt6OBuBwKh0eODiphw&s",
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
            <div className="flex-1 border-2 border-orange-200 p-2">
              <img
                src={item.image}
                alt={item.name}
                className="object-contain h-full w-full"
              />
            </div>
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
