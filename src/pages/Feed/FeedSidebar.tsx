import { Link } from "react-router-dom";
import { LeventCard } from "../../components/LeventCard/LeventCard";
import { Path } from "../../constants";
import { leventsNYC } from "../../constants/data";

type Props = { location: string };

const FeedSidebar = ({ location = "New York City" }: Props) => {
  return (
    <div className="feed-sidebar">
      <div className="feed-sidebar__location">Today in {location}</div>
      <div className="feed-sidebar__levents">
        {leventsNYC.map((levent) => (
          <LeventCard levent={levent} />
        ))}
      </div>
      <Link className="feed-sidebar__button" to={`${Path.DISCOVER}?location=${location}&date=today`}>
        See More
      </Link>
    </div>
  );
};

export { FeedSidebar };
