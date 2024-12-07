import { ArrowLeft, CalendarDays, Clock, MapPin, Share2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

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
    }
  ];
  speaker: Speaker[];
}

export default function EventsById({
  themeColor = "purple",
  eventDetails,
}: {
  themeColor?: string;
  eventDetails: EventDetailsProps | null;
}) {
  // const [eventDetails, setEventDetails] = useState<EventDetailsProps | null>(
  //   null
  // );

  // const fetchEventByID = async () => {
  //   try {
  //     const response = await axios.get(
  //       `http://192.168.1.106:5600/getevents/${id}`
  //     );
  //     setEventDetails(response.data);
  //   } catch (error) {
  //     console.error("Failed to fetch event by id", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchEventByID();
  // }, []);

  const handleShare = (platform: string) => {
    console.log(`Sharing to ${platform}`);
  };

  return (
    <div className="min-h-screen flex  justify-center">
      <Card className="w-full max-w-4xl bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl overflow-hidden">
        <div className="p-4 absolute  z-50 ">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 py-2 px-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </button>
        </div>
        <div className="relative h-64 sm:h-80 md:h-96">
          <img
            src={
              eventDetails
                ? `http://192.168.1.106:5600/images/${eventDetails.eventById[0].banner_img}`
                : ""
            }
            alt={eventDetails?.eventById[0].title}
            style={{
              objectFit: "cover",
            }}
            className="rounded-t-2xl absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <CardContent className="p-6 sm:p-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">
            {eventDetails?.eventById[0].title}
          </h1>
          <p className="text-gray-600 mb-6">
            {eventDetails?.eventById[0].description}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="flex items-center text-gray-700">
              <CalendarDays className={`w-5 h-5 mr-2 text-${themeColor}-600`} />
              <span>{eventDetails?.eventById[0].date}</span>
            </div>
            <div className="flex items-center text-gray-700">
              <Clock className={`w-5 h-5 mr-2 text-${themeColor}-600`} />
              <span>
                {eventDetails?.eventById[0].start_time} -{" "}
                {eventDetails?.eventById[0].end_time}
              </span>
            </div>
            <div className="flex items-center text-gray-700 sm:col-span-2">
              <MapPin className={`w-5 h-5 mr-2 text-${themeColor}-600`} />
              <span>{eventDetails?.eventById[0].location}</span>
            </div>
          </div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Speakers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {eventDetails?.eventById[0] && eventDetails?.speaker.length > 0 ? (
              eventDetails?.speaker.map((item: Speaker, index: number) => (
                <div key={index} className="flex items-center space-x-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={item.photoURL} alt={item.name} />
                    <AvatarFallback
                      style={{
                        backgroundColor: "#fff",
                      }}
                    >
                      {item.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-gray-800">{item.name}</p>
                    <p className="text-sm text-gray-600">{item.designation}</p>
                  </div>
                </div>
              ))
            ) : (
              <h2>No Speakers Added</h2>
            )}
          </div>
          <div className="mt-8 flex justify-center">
            {/* <Badge
              className={`px-4 py-2 text-lg bg-${themeColor}-600 hover:bg-${themeColor}-700 transition-colors`}
            >
              Register Now
            </Badge> */}
          </div>
          <div className="absolute right-4 bottom-4 z-100 ">
            <DropdownMenu modal={false}>
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
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
