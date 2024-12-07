import { Link } from "react-router-dom";
import CountEffect from "@/components/countEffect";
import { AiFillCodepenSquare } from "react-icons/ai";

const data = [
  { to: 657, from: 400, duration: 2, label: "Number" },
  { to: 1223, from: 1000, duration: 2, label: "Example" },
  { to: 8772, from: 8300, duration: 2, label: "Testing" },
  { to: 892, from: 850, duration: 5, label: "Coffee" },
];
const dummyData = [
  {
    title: "AI and Machine Learning Products Creators",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/image/hero-left.png",
  },
  {
    title: "AI and Machine Learning Products Creators",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/image/hero-left.png",
  },
  {
    title: "AI and Machine Learning Products Creators",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/image/hero-left.png",
  },
  {
    title: "AI and Machine Learning Products Creators",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/image/hero-left.png",
  },
  {
    title: "AI and Machine Learning Products Creators",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/image/hero-left.png",
  },
  {
    title: "AI and Machine Learning Products Creators",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/image/hero-left.png",
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
function HomePage() {
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
            className="bg-blue-500 text-white px-8 py-3 rounded-md font-poppins rounded-3xl"
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
      <div className="min-h-[500px] px-16 mx-16 pb-16">
        <h1 className="text-4xl font-bold font-dosis mb-10">
          Our AI Solutions
        </h1>
        <div className="grid grid-cols-3 gap-x-10 gap-y-16">
          {dummyData.map((item, index) => (
            <div
              key={index}
              className={`${
                index === 1
                  ? " shadow-dimShadowBlue"
                  : "border-[#1282A2] shadow-dimShadowOrange"
              }  border-2 h-76 p-[20px] overflow-hidden bg-white
            hover:shadow-dimShadowBlue hover:border-white  transition-all duration-500 ease-in-out flex flex-col cursor-default`}
            >
              <img src={item.image} alt="" className="w-28" loading="lazy" />
              <h1 className="text-[clamp(1rem,5vw,1.4rem)] font-bold">
                {item.title}
              </h1>
              <p className="text-slate-500">{item.description}</p>
              <button className="font-poppins px-2 py-1 rounded-lg text-blue-900 font-bold tracking-wide text-sm w-fit mt-2">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="min-h-[500px] px-16 mx-16 pb-16">
        <h1 className="font-dosis text-4xl font-bold mb-10">Success Story</h1>
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-16">
          {successStory.map((item, index) => (
            <div
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
