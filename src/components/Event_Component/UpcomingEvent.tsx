import * as React from "react";
import { Card } from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import { Calendar, Clock, MapPin, Share2 } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Event {
  id: number;
  title: string;
  date: string;
  start_time: string;
  location: string;
  banner_img: string;
}

function EventCard({ event }: { event: Event }) {
  const handleShare = (platform: string) => {
    console.log(`Sharing to ${platform}`);
  };

  const api_base_url = import.meta.env.VITE_API_KEY;
  return (
    <Card className="relative h-96 overflow-hidden">
      <div className="absolute inset-0 flex">
        <div className="w-1/5 bg-[#4CBA9A] p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              {event.title}
            </h3>
            <div className="flex items-center text-sm text-gray-200 mb-3">
              <Calendar className="w-4 h-4 mr-2 text-white" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center text-sm text-gray-200 mb-3">
              <Clock className="w-4 h-4 mr-2 text-white" />
              <span>{event.start_time}</span>
            </div>
            <div className="flex items-center text-sm text-gray-200 mb-4">
              <MapPin className="w-4 h-4 mr-2 text-white" />
              <span>{event.location}</span>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <Badge variant="secondary" className="self-start text-sm px-2 py-1">
              Upcoming
            </Badge>

            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className=" border-white hover:text-[#4CBA9A]"
                  title="Share this event"
                >
                  <Share2 className="w-4 h-4 mr-2 hover:text-green-300" /> Share
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => handleShare("Twitter")}>
                  Twitter
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleShare("Facebook")}>
                  Facebook
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleShare("LinkedIn")}>
                  LinkedIn
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <Link
          to={`${event.id}`}
          className="w-4/5 bg-cover bg-center hover:sepia transition-all duration-500"
          style={{
            backgroundImage: `url(${api_base_url}images/${event.banner_img})`,
          }}
        />
      </div>
    </Card>
  );
}

function UpcomingEventsCarousel({ data }: { data: Event[] }) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const autoplayPlugin = React.useRef(
    Autoplay({
      delay: 4000,
      stopOnMouseEnter: true,
    })
  );

  return (
    <div className="relative">
      <Carousel
        setApi={setApi}
        className="w-full"
        plugins={[autoplayPlugin.current]}
        opts={{
          align: "center",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {data.map((event) => (
            <CarouselItem
              key={event.id}
              className="pl-2 md:pl-4 md:basis-3/4 lg:basis-3/5"
            >
              <div className="relative overflow-hidden">
                <EventCard event={event} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex justify-center mt-4 space-x-2">
        {data.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === current ? "bg-[#4CBA9A]" : "bg-gray-300"
            }`}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default UpcomingEventsCarousel;
