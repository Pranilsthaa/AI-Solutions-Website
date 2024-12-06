import EventCard from "./eventCard";

export default function PastEvents({ data }) {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-6 mt-10">Past Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}
