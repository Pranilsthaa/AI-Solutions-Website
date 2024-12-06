import React, { useContext, createContext, useState } from "react";
import axios from "axios";

// Define the API response type
interface Event {
  id: number;
  name: string;
  date: string;
  // Add other fields as per your API response
}

interface EventContextType {
  getEvents: () => Promise<Event | null>;
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
      const response = await axios.get<Event[]>(
        "http://192.168.1.106:5600/getevents"
      );
      setEventData(response.data);
      return null;
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
