import Avvvatars from "avvvatars-react";
import { MapPin } from "react-feather";
import { Link } from "react-router-dom";
import { Path } from "../../constants";
import { LeventBase } from "../../types/levent";
import { Avatar } from "../Avatar/Avatar";
import "./LeventThumbnail.css";

type Props = { levent: LeventBase };

const mockVisitorsNpubs = (seed: string, amount: number) =>
  Array.from(Array(amount)).map((_, i) => seed + i);

const FrensThumbnail = ({ npubs }: { npubs: string[] }) => {
  // We display only 3 thumbnails of frens going
  const visibleFrens = npubs.slice(0, 3);
  const hasExtraFrens = npubs.length - 3;
  return (
    <span className="frens-thumbnail">
      {visibleFrens.map((fren) => (
        <Avatar key={fren} user={{ npubkey: fren }} size={20} />
      ))}
      {hasExtraFrens > 0 && <Avvvatars value={`+${hasExtraFrens}`} size={20} />}
    </span>
  );
};

const LeventThumbnail = ({ levent }: Props) => {
  const npubsGoing = mockVisitorsNpubs(
    `npub1${levent.id}${levent.name}`,
    Math.round(Math.random() * 27)
  );
  return (
    <Link to={`${Path.EVENT}/${levent.id}`} className="levent-thumbnail">
      <MapPin />
      <div >
        <div className="levent-thumbnail__data__name">{levent.name}</div>
        {/* TODO: Improve time formatting  */}
        {levent.location.label} |{" "}
        {new Date(levent.startDate).toLocaleDateString()} |{" "}
        <FrensThumbnail npubs={npubsGoing} />
         experiencing.
      </div>
    </Link>
  );
};

export { LeventThumbnail };
