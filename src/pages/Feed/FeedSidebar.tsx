import { LeventCard } from "../../components/LeventCard/LeventCard";

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
      {/* TODO: make this a Link when discovery page is implemented */}
      <button className="feed-sidebar__button"
      //  to={`${Path.DISCOVER}?location=${location}&date=today`}
       >
        See More
      </button>
    </div>
  );
};

export { FeedSidebar };
