import React, { useContext, createContext, useState } from "react";
import axios from "axios";
import getData from "@/api/getData";

// Define the API response type
export interface Event {
  id: number;
  name: string;
  title: string;
  date: string;
  start_time: string;
  end_time: string;
  banner_img: string;
  location: string;
  // Add other fields as per your API response
}

interface EventContextType {
  getEvents: () => void;
  eventData: Event[];
}

const EventContext = createContext<EventContextType>({
  getEvents: async () => {
    return null as Event | null;
  },
  eventData: [],
});

const EventProvider = ({ children }: { children: React.ReactNode }) => {
  const [eventData, setEventData] = useState<Event[]>([]);

  const getEvents = async () => {
    try {
      const response = await getData("getevents");
      if (response.status == 200) {
        setEventData(response.data);
      }
    } catch (error) {
      console.error("Error fetching event by ID:", error);
      return null;
    }
  };

  return (
    <EventContext.Provider value={{ getEvents, eventData }}>
      {children}
    </EventContext.Provider>
  );
};

// Custom hook to use the EventContext
const useEventContext = () => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error("useEventContext must be used within an EventProvider");
  }
  return context;
};

export { EventProvider, useEventContext };
