import getData from "@/api/getData";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ArticleSection() {
  const [articles, setArticles] = useState([]);

  const base_api_url = import.meta.env.VITE_API_KEY;

  const fetchArticles = async () => {
    try {
      const response = await getData("getarticles");
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
              src={`${base_api_url}images/${articles[0]?.article_image}`}
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
                    src={`${base_api_url}images/${article?.article_image}`}
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
