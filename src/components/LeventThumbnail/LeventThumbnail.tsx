import { Calendar, MapPin } from "react-feather";
import { Link } from "react-router-dom";
import { Path } from "../../constants";
import { getRealNpubsGoingToLevent } from "../../constants/data";
import { LeventBase } from "../../types/levent";
import { FrensThumbnail } from "../FrensThumbnail/FrensThumbnail";
import "./LeventThumbnail.css";

type Props = { levent: LeventBase };

const mockVisitorsNpubs = (seed: string, amount: number) =>
  Array.from(Array(amount)).map((_, i) => seed + i);

const LeventThumbnail = ({ levent }: Props) => {
  const npubsGoing = [
    ...getRealNpubsGoingToLevent(levent),
    ...mockVisitorsNpubs(
      `npub1${levent.id}${levent.name}`,
      Math.round(Math.random() * 27)
    ),
  ];
  return (
    <Link to={`${Path.EVENT}/${levent.id}`} className="levent-thumbnail">
      <div>
        <div className="levent-thumbnail__data__name">{levent.name}</div>

        <div className="levent-thumbnail__items">
          <div className="levent-thumbnail__item">
            <MapPin />
            {levent.location.label}
          </div>
          <div className="levent-thumbnail__item">
            {/* TODO: Improve time formatting  */}
            <Calendar />
            {new Date(levent.startDate).toLocaleDateString()}
          </div>
          {npubsGoing.length > 0 && (
            <div className="levent-thumbnail__item--friends">
              <FrensThumbnail npubs={npubsGoing} />
              experiencing
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export { LeventThumbnail };
