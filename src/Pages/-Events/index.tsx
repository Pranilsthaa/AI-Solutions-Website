import Events from "@/components/Event_Component/eventPage";
import { EventProvider } from "@/context/eventsContext";

function EventPage() {
  return (
    <EventProvider>
      <Events />
    </EventProvider>
  );
}

export default EventPage;
