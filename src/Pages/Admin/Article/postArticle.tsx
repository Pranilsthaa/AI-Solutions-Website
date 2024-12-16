import { useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Upload } from "lucide-react";
import axios from "axios";
import { toast, Toaster } from "sonner";

export default function PostArticle() {
  const [article, setArticle] = useState({
    photo: "",
    author: "",
    title: "",
    description: "",
  });
  const [dragActive, setDragActive] = useState(false);
  const [previewPhoto, setPreviewPhoto] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setArticle({
        ...article,
        photo: URL.createObjectURL(e.dataTransfer.files[0]),
      });
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setArticle({ ...article, [name]: value });
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setArticle({ ...article, photo: e.target.files![0] });
      setPreviewPhoto(URL.createObjectURL(file));
    }
  };

  const handlePublish = async () => {
    const formData = new FormData();
    if (article.photo) {
      formData.append("photo", article.photo);
    }
    formData.append("author", article.author);
    formData.append("title", article.title);
    formData.append("description", article.description);
    formData.append("slug", article.title.split(" ").join("-").toLowerCase());
    try {
      const response = await axios.post(
        "http://192.168.1.106:5600/post_article",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 200) {
        toast(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(article);

  return (
    <div className={`min-h-screen p-8 transition-colors duration-200`}>
      <Toaster />
      <Card className="max-w-4xl mx-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-2xl font-bold">
            Write Your Article
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div
            className={`border-2 border-dashed rounded-lg p-4 transition-colors duration-200 ${
              dragActive ? "border-primary" : "border-gray-300"
            }  hover:border-gray-400`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileSelect}
              accept="image/*"
              className="hidden"
            />
            {article.photo ? (
              <div className="relative h-48 w-full">
                <img
                  src={previewPhoto}
                  alt="Article cover"
                  //   layout="fill"
                  //   objectFit="cover"
                  className="rounded-lg absolute inset-0 w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-2 text-sm text-gray-500">
                  Drag and drop your cover image here, or click to select
                </p>
              </div>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="author">Author</Label>
            <Input
              id="author"
              name="author"
              value={article.author}
              onChange={handleInputChange}
              placeholder="Your name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              value={article.title}
              onChange={handleInputChange}
              placeholder="Enter your article title"
              className="text-lg font-semibold"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Article Content</Label>
            <Textarea
              id="description"
              name="description"
              value={article.description}
              onChange={handleInputChange}
              placeholder="Write your article here..."
              className="min-h-[200px] resize-y"
            />
          </div>
          <Button className="w-full" onClick={handlePublish}>
            Publish Article
          </Button>
        </CardContent>
      </Card>
      {(article.title || article.description) && (
        <Card className="max-w-4xl mx-auto mt-8">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Live Preview</CardTitle>
          </CardHeader>
          <CardContent>
            {article.photo && (
              <div className="relative h-48 w-full mb-4">
                <img
                  src={previewPhoto || ""}
                  alt="Article cover"
                  className="rounded-lg absolute inset-0 w-full h-full object-cover"
                />
              </div>
            )}
            <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
            {article.author && (
              <p className="text-sm text-gray-500 mb-4">By {article.author}</p>
            )}
            <p className="whitespace-pre-wrap">{article.description}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
