import { Link } from "react-router-dom";
import { Path } from "../../constants";
import { getRealNpubsGoingToLevent } from "../../constants/data";
import { useLocationDetails } from "../../hooks/useLocationDetails";
import { Levent } from "../../types/levent";
import { FrensThumbnail } from "../FrensThumbnail/FrensThumbnail";
import "./LeventCard.css";

type Props = { levent: Levent };

const mockVisitorsNpubs = (seed: string, amount: number) =>
  Array.from(Array(amount)).map((_, i) => seed + i);

const LeventCard = ({ levent }: Props) => {
  const { data: locationData } = useLocationDetails(levent.location);

  const npubsGoing = [
    ...getRealNpubsGoingToLevent(levent),
    ...mockVisitorsNpubs(
      `npub1${levent.id}${levent.name}`,
      Math.round(Math.random() * 27)
    ),
  ];

  const address = locationData?.address
    ? `${locationData.address.road} ${locationData.address.house_number || ""}`
    : levent.location.label;

  return (
    <Link to={`${Path.EVENT}/${levent.id}`} className="levent-card">
      <div className="levent-card__image">
        <img src={levent.previewImage} />
      </div>
      <div className="">
        <div className="levent-card__data__name">{levent.name}</div>
        {/* TODO: Improve time formatting  */}
        <div className="levent-card__data__street">{address}</div>
        {npubsGoing.length > 0 && (
          <div>
            <FrensThumbnail npubs={npubsGoing} /> 
          </div>
        )}
      </div>
    </Link>
  );
};

export { LeventCard };
