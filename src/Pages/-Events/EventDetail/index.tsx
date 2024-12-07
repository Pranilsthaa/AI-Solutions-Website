import { useEffect, useState } from "react";
import EventsById from "./eventByID";
import EventSidebar from "./eventSidebar";
import axios from "axios";
import { useParams } from "react-router-dom";

// Sample data
const allEvents = [
  {
    id: "1",
    title: "AI Horizons: Shaping Tomorrow's Intelligence",
    description:
      "Join us for a groundbreaking conference exploring the latest advancements in Artificial Intelligence. Engage with industry leaders, witness cutting-edge demos, and glimpse into the future of AI technology.",
    date: "June 15, 2024",
    startTime: "9:00 AM",
    endTime: "6:00 PM",
    location: "TechHub Convention Center, Silicon Valley",
    imageUrl: "/placeholder.svg?height=400&width=800",
    speakers: [
      {
        name: "Dr. Ava Turing",
        role: "AI Research Lead",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "Prof. Max Neuron",
        role: "Machine Learning Expert",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "Sarah Quantum",
        role: "Quantum Computing Specialist",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "Alex Robotics",
        role: "Robotics Engineer",
        avatar: "/placeholder.svg?height=100&width=100",
      },
    ],
    themeColor: "purple",
  },
  {
    id: "2",
    title: "Future of AI in Healthcare",
    description:
      "Explore the transformative potential of AI in healthcare. From diagnosis to treatment, discover how AI is revolutionizing patient care.",
    date: "July 20, 2024",
    startTime: "10:00 AM",
    endTime: "5:00 PM",
    location: "MedTech Center, Boston",
    imageUrl: "/placeholder.svg?height=400&width=800",
    speakers: [
      {
        name: "Dr. Emily Health",
        role: "AI in Medicine Specialist",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "John Biotech",
        role: "Biomedical Engineer",
        avatar: "/placeholder.svg?height=100&width=100",
      },
    ],
    themeColor: "blue",
  },
  // Add more events as needed
];

const upcomingEvents = allEvents.slice(0, 2);
const pastEvents = allEvents.slice(2);

export default function EventDetailPage() {
  const [selectedEventId, setSelectedEventId] = useState(allEvents[0].id);
  const [eventDetails, setEventDetails] = useState(null);

  const selectedEvent = allEvents.find((event) => event.id === selectedEventId);

  const handleEventClick = (eventId: string) => {
    setSelectedEventId(eventId);
  };

  const { id } = useParams();
  const fetchEventByID = async () => {
    try {
      const response = await axios.get(
        `http://192.168.1.106:5600/getevents/${id}`
      );
      setEventDetails(response.data);
    } catch (error) {
      console.error("Failed to fetch event by id", error);
    }
  };

  useEffect(() => {
    fetchEventByID();
  }, [id]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-4 sm:p-6 lg:p-8 flex">
      <div className="w-full max-w-7xl mx-auto flex gap-8  mt-[90px]">
        <div className="w-[70%]">
          {selectedEvent && (
            <EventsById
              eventDetails={eventDetails || null}
              //   onBack={handleBack}
            />
          )}
        </div>
        <div className="w-[30%]">
          <EventSidebar
            upcomingEvents={upcomingEvents}
            pastEvents={pastEvents}
            onEventClick={handleEventClick}
            fetchEventByID={fetchEventByID}
          />
        </div>
      </div>
    </div>
  );
}
