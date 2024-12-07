import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Event = {
  id: string;
  title: string;
  date: string;
  imageUrl: string;
};

interface EventSidebarProps {
  upcomingEvents: Event[];
  pastEvents: Event[];
  onEventClick: (eventId: string) => void;
  fetchEventByID: () => void;
}

function EventSidebar({ fetchEventByID }: EventSidebarProps) {
  const [eventDetails, setEventDetails] = useState<Event[]>([]);
  const [upcomingEvents, setUpcomingEvent] = useState<Event[]>([]);
  const [pastEvents, setPastEvent] = useState<Event[]>([]);

  const fetchEvents = async () => {
    try {
      const response = await axios.get(`http://192.168.1.106:5600/getevents`);
      setEventDetails(response.data);
    } catch (error) {
      console.error("Failed to fetch event by id", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  useEffect(() => {
    if (eventDetails === null) return;
    const upcomingEvent = eventDetails.filter(
      (event) => new Date(event.date) > new Date()
    );
    const pastEvent = eventDetails.filter(
      (event) => new Date(event.date) < new Date()
    );
    setUpcomingEvent(upcomingEvent);
    setPastEvent(pastEvent);
  }, [eventDetails]);

  return (
    <Card className="h-full">
      <Tabs defaultValue="upcoming" className="h-full flex flex-col">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming" className="flex-grow">
          <ScrollArea className="h-[calc(100vh-8rem)]">
            {upcomingEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onClick={fetchEventByID}
              />
            ))}
          </ScrollArea>
        </TabsContent>
        <TabsContent value="past" className="flex-grow">
          <ScrollArea className="h-[calc(100vh-8rem)]">
            {pastEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onClick={fetchEventByID}
              />
            ))}
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </Card>
  );
}

function EventCard({ event }: { event: Event; onClick: () => void }) {
  return (
    <Card className="mb-4 cursor-pointer hover:bg-accent">
      <Link to={`/events/${event.id}`}>
        <CardContent className="p-4 flex items-center space-x-4">
          <img
            src={event.imageUrl}
            alt={event.title}
            className="w-16 h-16 object-cover rounded"
          />
          <div>
            <h3 className="font-semibold">{event.title}</h3>
            <p className="text-sm text-muted-foreground">{event.date}</p>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}

export default EventSidebar;
