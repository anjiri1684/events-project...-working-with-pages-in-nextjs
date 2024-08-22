import Link from "next/link";
import classes from "./main-header.module.css";
function MainHeader() {
  <header className={classes.header}>
    <div className={classes.logo}>
      <Link href="/">NextEvents</Link>
    </div>
    <nav className={classes.navigation}>
      <ul>
        <li>
          <Link href="/href">Browse All Events</Link>
        </li>
      </ul>
    </nav>
  </header>;
}

export default MainHeader;
