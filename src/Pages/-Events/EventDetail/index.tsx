import { useEffect, useState } from "react";
import EventsById from "./eventByID";
import EventSidebar from "./eventSidebar";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function EventDetailPage() {
  const [eventDetails, setEventDetails] = useState(null);

  const { id } = useParams();
  const fetchEventByID = async () => {
    try {
      const response = await axios.get(
        `sem5pd-production.up.railway.app/getevents/${id}`
      );
      setEventDetails(response.data);
    } catch (error) {
      console.error("Failed to fetch event by id", error);
    }
  };

  useEffect(() => {
    fetchEventByID();
  }, [id]);

  console.log(eventDetails);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-white to-green-400 p-4 sm:p-6 lg:p-8 flex">
      <div className="w-full max-w-7xl mx-auto flex gap-8  mt-[90px]">
        <div className="w-[70%]">
          <EventsById
            eventDetails={eventDetails || null}
            //   onBack={handleBack}
          />
        </div>
        <div className="w-[30%]">
          <EventSidebar fetchEventByID={fetchEventByID} />
        </div>
      </div>
    </div>
  );
}
