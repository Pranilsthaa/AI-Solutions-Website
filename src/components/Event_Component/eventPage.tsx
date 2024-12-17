import { useEventContext } from "@/context/eventsContext";
import UpcomingEvents from "./UpcomingEvent";
import PastEvents from "./pastEvent";
import { useEffect, useState } from "react";
import { Event } from "@/context/eventsContext";

export default function Events() {
  const { getEvents, eventData } = useEventContext();
  const [upcomingEvent, setUpcomingEvent] = useState<Event[]>([]);
  const [pastEvent, setPastEvent] = useState<Event[]>([]);

  useEffect(() => {
    getEvents();
  }, []);

  useEffect(() => {
    if (eventData && eventData.length > 0) {
      const upcomingEvent = eventData.filter(
        (event) => new Date(event.date) > new Date()
      );
      const pastEvent = eventData.filter(
        (event) => new Date(event.date) < new Date()
      );
      setUpcomingEvent(upcomingEvent);
      setPastEvent(pastEvent);
    }
  }, [eventData]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
      <main className="container mx-auto px-20 pb-8 pt-[90px]">
        <h1 className="text-4xl font-bold text-center mb-12">
          AI SOLUTION'S Upcoming Events
        </h1>
        <UpcomingEvents data={upcomingEvent} />
        <PastEvents data={pastEvent} />
      </main>
    </div>
  );
}
