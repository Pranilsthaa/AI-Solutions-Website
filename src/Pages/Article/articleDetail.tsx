import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useParams } from "react-router-dom";
import { articles } from "./articleData";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ArticleDetailsPage() {
  const { slug } = useParams();

  const [article, setArticle] = useState([]);

  const fetchArticles = async () => {
    try {
      const response = await axios.get(
        `sem5pd-production.up.railway.app/getarticles`
      );
      if (response.status == 200) {
        setArticle(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchArticles();
    window.scrollTo(0, 0);
  }, []);

  const articleDetail = article.filter((article: { slug: "" }) => {
    return article.slug === slug;
  });
  console.log(articleDetail);
  if (!article) return <div>Article not found</div>;
  return (
    <div className="container mx-auto px-4 pb-8 pt-24 ">
      <Link to="/articles">
        <Button variant="ghost">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Articles
        </Button>
      </Link>
      <article className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{articleDetail[0]?.title}</h1>
        <div className="text-gray-600 mb-4">
          By {articleDetail[0]?.Author} | {articleDetail[0]?.Date.split("T")[0]}
        </div>
        <img
          src={`sem5pd-production.up.railway.app/images/${articleDetail[0]?.article_image}`}
          alt={articleDetail[0]?.title}
          width={800}
          height={400}
          className="rounded-lg mb-8 w-full"
        />
        <div className="prose prose-lg max-w-none  whitespace-pre-wrap">
          {/* {article.content.split("\n\n").map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))} */}
          {articleDetail[0]?.description}
        </div>
      </article>
      <aside className="mt-12">
        <h2 className="text-2xl font-bold mb-4">More Articles</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {article.map((relatedArticle) => {
            if (relatedArticle?.slug === slug) return null;
            return (
              <Card key={relatedArticle?.id} className="px-8">
                <CardHeader>
                  <CardTitle>{relatedArticle?.title}</CardTitle>
                </CardHeader>
                <img
                  src={`sem5pd-production.up.railway.app/images/${relatedArticle?.article_image}`}
                  alt={relatedArticle?.title}
                  className="w-full h-48 object-cover rounded-lg mb-8"
                />
                <CardContent>
                  <Link to={`/articles/${relatedArticle.slug}`}>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      Read Article
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </aside>
    </div>
  );
}
