import axios from "axios";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const relatedArticles = [
  {
    id: 1,
    title: "AI Revolutionizing Retail",
    description:
      "Explore how AI is enhancing the retail sector with personalized recommendations, inventory optimization, and improved customer experiences.",
    slug: "ai-revolutionizing-retail",
    image: "/image/ai_in_retail.webp",
  },
  {
    id: 2,
    title: "AI in Sustainable Technology",
    description:
      "AI is playing a pivotal role in advancing sustainability by optimizing energy consumption, reducing waste, and enhancing resource management.",
    slug: "ai-in-sustainable-technology",
    image: "/image/ai_tech.jpg",
  },
  {
    id: 3,
    title: "Shaping The Future With AI in Education",
    description:
      "Discover how AI is revolutionizing education by creating personalized learning experiences and improving accessibility for students worldwide.",
    slug: "shaping-the-future-with-ai-education",
    image: "/image/ai_in_education.png",
  },
  {
    id: 4,
    title: "Enhancing Customer Experience with AI",
    description:
      "Customer experience is the cornerstone of business success, and AI is reshaping how companies interact with their customers through advanced technologies.",
    slug: "enhancing-customer-experience-with-ai",
    image: "/image/ai_customer.webp",
  },

  {
    id: 5,
    title: "AI Empowering the Finance Sector",
    description:
      "The finance industry is undergoing a radical transformation with AI enabling fraud detection, risk assessment, and real-time market analysis.",
    slug: "ai-empowering-finance-sector",
    image: "/image/ai_in_financial_forecasting.jpg",
  },
];

export default function ArticleSection() {
  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    try {
      const response = await axios.get(
        "sem5pd-production.up.railway.app/getarticles"
      );
      if (response.status == 200) {
        setArticles(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);
  if (articles.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <section className="w-full px-20 py-12 md:py-24 lg:py-32 bg-gradient-to-br from-cyan-100 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter pb-2 sm:text-4xl md:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
          Latest Insights from AI Solution
        </h2>
        <div className="grid gap-10 md:grid-cols-2 lg:gap-16 items-start">
          <div className="space-y-4">
            <img
              src={`sem5pd-production.up.railway.app/images/${articles[0]?.article_image}`}
              alt="AI in Healthcare"
              width={600}
              height={400}
              className="rounded-lg object-cover w-full aspect-video"
            />
            <h3 className="text-2xl font-bold">{articles[0]?.title}</h3>
            <p className="text-gray-500 dark:text-gray-400">
              {articles[0]?.description?.slice(0, 200)}...
            </p>
            <Link
              to={articles[0]?.slug}
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
            >
              Read More <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 md:gap-8">
            {articles.map((article, index) => {
              if (index === 0) return null;
              return (
                <div className="flex gap-4 items-start" key={index}>
                  <img
                    src={`sem5pd-production.up.railway.app/images/${article?.article_image}`}
                    alt={article?.title}
                    width={200}
                    height={150}
                    className="rounded-lg object-cover aspect-[4/3]"
                  />
                  <div className="space-y-2">
                    <h4 className="text-xl font-semibold">{article?.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {article?.description.slice(0, 100)}...
                    </p>
                    <Link
                      to={article?.slug}
                      className="text-sm text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
                    >
                      Explore <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
