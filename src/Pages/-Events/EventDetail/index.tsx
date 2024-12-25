import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EventsById from "./eventByID";
import EventSidebar from "./eventSidebar";
import getData from "@/api/getData";

export default function EventDetailPage() {
  const [eventDetails, setEventDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const fetchEventByID = async () => {
    setLoading(true);
    try {
      const response = await getData(`getevents/${id}`);
      if (response.status === 200) {
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
    <div className="min-h-screen bg-gradient-to-br from-white via-white to-green-400 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto flex gap-8 mt-[90px] relative">
        <div className="w-full lg:w-2/3 pr-4">
          <EventsById
            eventDetails={eventDetails || null}
            loading={loading}
            //   onBack={handleBack}
          />
        </div>
        <div className="hidden lg:block w-1/3">
          <div className="sticky top-[90px] right-0 h-[calc(100vh-90px)] overflow-y-auto">
            <EventSidebar fetchEventByID={fetchEventByID} />
          </div>
        </div>
      </div>
    </div>
  );
}
