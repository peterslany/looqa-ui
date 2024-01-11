import { MapPin } from "react-feather";
import { Link } from "react-router-dom";
import { Path } from "../../constants";
import { LeventBase } from "../../types/levent";
import { FrensThumbnail } from "../FrensThumbnail/FrensThumbnail";
import "./LeventThumbnail.css";

type Props = { levent: LeventBase };

const mockVisitorsNpubs = (seed: string, amount: number) =>
  Array.from(Array(amount)).map((_, i) => seed + i);

const LeventThumbnail = ({ levent }: Props) => {
  const npubsGoing = mockVisitorsNpubs(
    `npub1${levent.id}${levent.name}`,
    Math.round(Math.random() * 27)
  );
  return (
    <Link to={`${Path.EVENT}/${levent.id}`} className="levent-thumbnail">
      <MapPin />
      <div>
        <div className="levent-thumbnail__data__name">{levent.name}</div>
        {/* TODO: Improve time formatting  */}
        {levent.location.label} |{" "}
        {new Date(levent.startDate).toLocaleDateString()} |{" "}
        {npubsGoing.length > 0 && (
          <>
            <FrensThumbnail npubs={npubsGoing} />
            experiencing.{" "}
          </>
        )}
      </div>
    </Link>
  );
};

export { LeventThumbnail };
