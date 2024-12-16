"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  CalendarDays,
  Clock,
  MapPin,
  Share2,
  ChevronDown,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ImageGallery } from "./ImageGallery";

interface Speaker {
  name: string;
  role: string;
  photoURL: string;
  designation: string;
}

interface EventDetailsProps {
  eventById: [
    {
      title: string;
      description: string;
      date: string;
      start_time: string;
      end_time: string;
      location: string;
      banner_img: string;
      gallery_images: string[];
    }
  ];
  speaker: Speaker[];
}

export const fallBackImg = "/public/image/fallback.jpg";

export default function EventsById({
  themeColor = "purple",
  eventDetails,
}: {
  themeColor?: string;
  eventDetails: EventDetailsProps | null;
}) {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleShare = (platform: string) => {
    console.log(`Sharing to ${platform}`);
  };

  if (!eventDetails) {
    return <div>Loading...</div>;
  }

  const { eventById, speaker, images } = eventDetails;
  const event = eventById[0];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex justify-center items-center p-4 "
    >
      <Card className="w-full max-w-4xl bg-white shadow-xl rounded-2xl overflow-hidden">
        <div className="relative">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            src={`sem5pd-production.up.railway.app/images/${event.banner_img}`}
            alt={event.title}
            className="w-full h-64 sm:h-80 md:h-96 object-cover cursor-pointer"
            onClick={() => setIsGalleryOpen(true)}
          />
          <div className="absolute top-4 left-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.history.back()}
              className="bg-white/80 backdrop-blur-sm hover:bg-white/90"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
          </div>
        </div>
        <CardContent className="p-6 sm:p-8">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800"
          >
            {event.title}
          </motion.h1>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p
              className={`text-gray-600 mb-4 ${
                isDescriptionExpanded ? "" : "line-clamp-3"
              }`}
            >
              {event.description}
            </p>
            {event.description.length > 150 && (
              <Button
                variant="link"
                onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                className="p-0 h-auto font-semibold text-blue-600 hover:text-blue-800"
              >
                {isDescriptionExpanded ? "Read less" : "Read more"}
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${
                    isDescriptionExpanded ? "rotate-180" : ""
                  }`}
                />
              </Button>
            )}
          </motion.div>
          <Separator className="my-6" />
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6"
          >
            <div className="flex items-center text-gray-700">
              <CalendarDays className={`w-5 h-5 mr-2 text-${themeColor}-600`} />
              <span>{event?.date.split("T")[0]}</span>
            </div>
            <div className="flex items-center text-gray-700">
              <Clock className={`w-5 h-5 mr-2 text-${themeColor}-600`} />
              <span>
                {event.start_time} - {event.end_time}
              </span>
            </div>
            <div className="flex items-center text-gray-700">
              <MapPin className={`w-5 h-5 mr-2 text-${themeColor}-600`} />
              <span>{event.location}</span>
            </div>
          </motion.div>
          <Separator className="my-6" />
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-6"
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Event Gallery
            </h2>
            <div className="grid grid-cols-4 gap-2">
              {images && images.length > 0 ? (
                images.map((item, index) => (
                  <motion.img
                    key={index}
                    src={`sem5pd-production.up.railway.app/images/${item.image}`}
                    alt={`Event image ${index + 1}`}
                    className="w-full h-24 object-cover rounded-lg cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    onClick={() => {
                      setIsGalleryOpen(true);
                      setCurrentIndex(index);
                    }}
                  />
                ))
              ) : (
                <img
                  src={fallBackImg}
                  alt="fallback"
                  className="w-full h-32 object-contain rounded-lg cursor-pointer"
                />
              )}
            </div>
          </motion.div>
          <Separator className="my-6" />
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Speakers
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {speaker &&
                speaker.length > 0 &&
                speaker.map((item: Speaker, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-4 bg-gray-50 p-3 rounded-lg"
                  >
                    <Avatar className="w-12 h-12 border-2 border-white shadow-md">
                      <AvatarImage src={item.photoURL} alt={item.name} />
                      <AvatarFallback className="bg-gray-200 text-gray-600">
                        {item.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-gray-800">{item.name}</p>
                      <p className="text-sm text-gray-600">
                        {item.designation}
                      </p>
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-8 flex justify-end items-center"
          >
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
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
          </motion.div>
        </CardContent>
      </Card>
      <ImageGallery
        images={images}
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        index={currentIndex}
      />
    </motion.div>
  );
}
