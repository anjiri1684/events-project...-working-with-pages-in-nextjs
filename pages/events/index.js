import { getAllEvents } from "../../dummy-data";

function EventsPage() {
  const events = getAllEvents();
  return (
    <div>
      <h1>All Events </h1>
    </div>
  );
}

export default EventsPage;
