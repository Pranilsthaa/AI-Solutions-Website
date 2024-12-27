import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <div
      className="flex flex-row justify-between items-center h-[100dvh] bg-cover bg-center"
      style={{
        background:
          "linear-gradient(135deg, rgba(255,255,255,1) 29%, rgba(42,145,145,1) 100%)",
      }}
    >
      <div className="flex-1">
        <img
          src="/image/hero-left.png"
          alt="Hero left"
          width={500}
          height={500}
        />
      </div>
      <div className="flex-1 flex flex-col justify-center items-center">
        <h1 className="text-6xl text-center font-bold font-dosis text-[clamp(1rem,5vw,4rem)] w-[150%]">
          AI and Machine Learning Products Creators
        </h1>
        <p className="text-slate-500 mt-5 w-[90%] font-poppins mb-6">
          Empowering businesses with cutting-edge AI solutions to drive
          innovation and efficiency.
        </p>
        <Link
          to="/contact"
          className="bg-blue-500 text-white px-8 py-3 font-poppins rounded-3xl hover:bg-blue-600 transition-colors"
        >
          Get Started
        </Link>
      </div>
      <div className="flex-1">
        <img
          src="/image/hero-right.png"
          alt="Hero right"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
