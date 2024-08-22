import EventItem from "./event-item";

function EventList(props) {
  const { items } = props;
  return (
    <ul>
      {items.map((item) => (
        <EventItem
          key={item.id}
          title={item.title}
          image={item.image}
          date={item.image}
          location={item.location}
          id={item.id}
        />
      ))}
    </ul>
  );
}

export default EventList;
