import Link from "next/link";

function EventItem(props) {
  const { title, image, date, location, id } = props;

  const humanRedableDate = new Date(date).toLocaleDateString("en-Us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedAddress = location.replace(", ", "/n");

  const exploreLink = `/events/${id}`;

  return (
    <li>
      <img src={"/" + image} alt={title} />
      <div>
        <div>
          <h2>tittle</h2>
          <div>
            <time datetime="">{humanRedableDate}</time>
          </div>
          <div>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div>
          <Link href="/">Explore Events</Link>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
