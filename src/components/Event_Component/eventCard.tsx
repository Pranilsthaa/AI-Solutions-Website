import { useState } from "react";
import { Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

interface Event {
  id: number;
  title: string;
  date: string;
  banner_img: string;
  description: string;
}

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const [isShared, setIsShared] = useState(false);

  const handleShare = (platform: string, id: number) => {
    switch (platform) {
      case "Facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=https://ai-solutions-uk.vercel.app/events/${id}`,
          "_blank"
        );
        break;
      case "Twitter":
        window.open(
          `https://twitter.com/intent/tweet?url=https://ai-solutions-uk.vercel.app/events/${id}&text="Come join us at AI Solutions Event"`,
          "_blank"
        );
        break;
      case "LinkedIn":
        window.open(
          `https://www.linkedin.com/shareArticle?mini=true&url=https://ai-solutions-uk.vercel.app/events/${id}&title="Come join us at AI Solutions Event"`,
          "_blank"
        );
        break;
      default:
        console.log(`Sharing to ${platform} is not implemented`);
    }
  };

  const api_base_url = import.meta.env.VITE_API_KEY;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={`${api_base_url}images/${event.banner_img}`}
        alt={event.title}
        width={600}
        height={400}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <Link to={`/events/${event.id}`}>
          <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
        </Link>
        <p className="text-gray-600 mb-2">{event.date}</p>
        <p className="text-gray-700 mb-4">{event.description}</p>
        <div className="flex justify-end">
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="w-[100px]">
                <Share2 className="h-4 w-4 mr-2" />
                {isShared ? "Shared!" : "Share"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              <DropdownMenuItem
                onClick={() => handleShare("Twitter", event.id)}
              >
                Twitter
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleShare("Facebook", event.id)}
              >
                Facebook
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleShare("LinkedIn", event.id)}
              >
                LinkedIn
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
