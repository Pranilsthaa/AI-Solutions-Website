"use client";

import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Calendar, Clock, MapPin } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
}

function UpcomingEventsCarousel({ data }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { slidesToScroll: 1, align: "start" },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [emblaApi]);

  return (
    <div className=" mx-auto">
      <Carousel
        ref={emblaRef}
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[Autoplay({ delay: 4000, stopOnInteraction: true })]}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {data.map((event, index) => (
            <CarouselItem
              key={event.id}
              className="pl-4 md:basis-1/2 lg:basis-1/2"
            >
              <Card className="bg-white dark:bg-gray-800 h-96">
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">
                      {event.title}
                    </h3>
                    <div className="flex items-center text-base text-gray-500 dark:text-gray-400 mb-3">
                      <Calendar className="w-5 h-5 mr-3" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-base text-gray-500 dark:text-gray-400 mb-3">
                      <Clock className="w-5 h-5 mr-3" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-base text-gray-500 dark:text-gray-400 mb-6">
                      <MapPin className="w-5 h-5 mr-3" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <Badge
                    variant="secondary"
                    className="self-start text-base px-4 py-2"
                  >
                    Upcoming
                  </Badge>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-[-5%]" />
        <CarouselNext className="right-[-5%]" />
      </Carousel>
    </div>
  );
}

export default UpcomingEventsCarousel;
