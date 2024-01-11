import { Calendar, MapPin } from "react-feather";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Error404 } from "../../components";
import { Avatar } from "../../components/Avatar/Avatar";
import { FrensThumbnail } from "../../components/FrensThumbnail/FrensThumbnail";
import { PostComponent } from "../../components/Post/Post";
import { Path } from "../../constants";
import { levents, posts } from "../../constants/data";
import { useLocationDetails } from "../../hooks/useLocationDetails";
import { formatDateRange, getDateTime } from "../../utils";
import "./Levent.css";

const mockVisitorsNpubs = (seed: string, amount: number) =>
  Array.from(Array(amount)).map((_, i) => seed + i);

const LeventPage = () => {
  const { eventId } = useParams();
  const levent = levents.find((levent) => levent.id === eventId);

  const { data: locationData } = useLocationDetails(levent?.location);

  if (!eventId || !levent) {
    return <Error404 />;
  }

  const relatedPosts = posts.filter((post) => post.levent.id === eventId);

  const npubsGoing = mockVisitorsNpubs(
    `npub1${levent.id}${levent.name}`,
    Math.round(Math.random() * 36) + 20
  );

  const address = locationData?.address
    ? `${locationData.address.road} ${locationData.address.house_number || ""}, ${locationData.address.city}`
    : levent.location.label;

  return (
    <div>
      <div className="levent-page__title">
        <img className="levent-page__title__img" src={levent.previewImage} />
        <h1>{levent.name}</h1>
        <h2>
          <MapPin /> {levent.location.label}
        </h2>
        <h3>
          <Calendar /> {formatDateRange(levent.startDate, levent.endDate)}
        </h3>
      </div>
      <div className="levent-page__main">
        <div className="levent-page__main__content">
          <div className="levent-page__main__content__description">
            {levent.description}
          </div>
          <h2>Related Posts</h2>
          <div className="levent-page__main__content__posts">
            {relatedPosts.map((post) => (
              <PostComponent key={post.id} post={post} showLevent={false} />
            ))}
          </div>
        </div>
        <div className="levent-page__main__sidebar">
          <div className="levent-page__main__sidebar__name">{levent.name}</div>
          Date
          <div className="levent-page__main__sidebar__item">
            <Calendar /> {getDateTime(new Date(levent.startDate))}
          </div>
          Location
          <div className="levent-page__main__sidebar__item">
            <MapPin /> {address}
          </div>
          Organized by
          <Link
            to={`${Path.PROFILE}/${levent.organizer.npubkey}`}
            className="post__avatar levent-page__main__sidebar__item"
          >
            <Avatar user={levent.organizer} size={32} /> {levent.organizer.name}
          </Link>
          Friends going
          <div className="levent-page__main__sidebar__item">
            {npubsGoing.length > 0 && (
              <div>
                <FrensThumbnail npubs={npubsGoing} size={32} amount={10} />
              </div>
            )}
          </div>
          {levent.AOA && (
            <>
              Artifact of Experience
              <div className="levent-page__main__sidebar__item">
                <a
                  target={"_blank"}
                  href={`https://testnet.ordinals.com/inscription/${levent.AOA}`}
                >
                  <img
                    className="experience-card__aoa"
                    src={`https://testnet.ordinals.com/content/${levent.AOA}`}
                  />
                  <div>
                  inscription:  {levent.AOA?.slice(0, 4)}...
                    {levent.AOA?.slice(levent.AOA.length - 4)}
                  </div>
                </a>
              </div>
            </>
          )}
          <button
            onClick={() =>
              window.alert(
                "Ticket selling will be implemented in the future iterations."
              )
            }
            className="levent-page__main__sidebar__cta"
          >
            Buy ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export { LeventPage };
