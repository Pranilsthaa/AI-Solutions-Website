import { useEffect, useState } from "react";
import EventsById from "./eventByID";
import EventSidebar from "./eventSidebar";
import { useParams } from "react-router-dom";
import getData from "@/api/getData";

export default function EventDetailPage() {
  const [eventDetails, setEventDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const fetchEventByID = async () => {
    setLoading(true);
    try {
      const response = await getData(`getevents/${id}`);
      if (response.status == 200) {
        setEventDetails(response.data);
      }
    } catch (error) {
      console.error("Failed to fetch event by id", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEventByID();
  }, [id]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-white to-green-400 p-4 sm:p-6 lg:p-8 flex">
      <div className="w-full max-w-7xl mx-auto flex gap-8  mt-[90px]">
        <div className="w-[70%]">
          <EventsById
            eventDetails={eventDetails || null}
            loading={loading}
            //   onBack={handleBack}
          />
        </div>
        <div className="w-[30%] h-[90vh]">
          <EventSidebar fetchEventByID={fetchEventByID} />
        </div>
      </div>
    </div>
  );
}
