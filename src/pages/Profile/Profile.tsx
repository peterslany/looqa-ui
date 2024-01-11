import { useParams } from "react-router";
import { Error404 } from "../../components";
import { Avatar } from "../../components/Avatar/Avatar";
import { LeventThumbnail } from "../../components/LeventThumbnail/LeventThumbnail";
import { PostComponent } from "../../components/Post/Post";
import { levents, posts, users } from "../../constants/data";
import { Levent } from "../../types/levent";
import "./Profile.css";

const Profile = () => {
  const { userId } = useParams();
  const user = users.find(({ npubkey }) => userId === npubkey);
  if (!user || !userId) {
    return <Error404 />;
  }

  const userPosts = posts.filter(({ author }) => author.npubkey === userId);
  const experiences = user.experiences.map((id) =>
    levents.find(({ id: leventId }) => id === leventId)
  ) as Levent[];
  const pastExperiences = experiences.filter(
    (exp) =>
      new Date(exp.endDate).getTime() + 24 * 60 * 60 * 1000 <
      new Date().getTime()
  );
  const upcomingExperiences = experiences.filter(
    (exp) =>
      new Date(exp.endDate).getTime() + 24 * 60 * 60 * 1000 >
      new Date().getTime()
  );

  return (
    <div className="profile">
      <div className="profile__info">
        <div className="profile__info__avatar">
          <Avatar user={user} size={280} />
        </div>
        <div className="profile__info__name">
          {user.name}{" "}
          <span className="profile__info__name__handle"> @{user.handle}</span>
          <div className="profile__info__npub">{user.npubkey}</div>
        </div>

        <div className="profile__info__description">{user.description}</div>
        <div className="profile__info__metric">{user.peers} peers</div>
        <div className="profile__info__metric">
          {experiences.length} experiences
        </div>
        <button>Follow</button>
      </div>
      <div className="profile__feed">
        <div className="profile__feed__experiences">
          Artifacts of experience
          <div className="profile__feed__experiences--past">
            {pastExperiences.map((experience) => (
              <div className="experience-card" key={experience.id}>
                <div className="experience-card__name">{experience.name}</div>
                <a
                  target={"_blank"}
                  href={`https://testnet.ordinals.com/inscription/${experience.AOA}`}
                >
                  <img
                    className="experience-card__aoa"
                    src={`https://testnet.ordinals.com/content/${experience.AOA}`}
                  />
                  <div>
                    {experience.AOA?.slice(0, 4)}...
                    {experience.AOA?.slice(experience.AOA.length - 4)}
                  </div>
                </a>
              </div>
            ))}
          </div>
          {/* UPCOMING EVENTS THAT THIS USER ATTENDS */}
          Upcoming experiences
          <div className="profile__feed__experiences--upcoming">
            {upcomingExperiences.map((experience) => (
              <LeventThumbnail levent={experience} key={experience.id} />
            ))}
          </div>
        </div>
        <div className="profile__feed__posts">
          {userPosts.map((post) => (
            <PostComponent key={post.id} post={post} showLevent={false} />
          ))}
        </div>
      </div>
    </div>
  );
};

export { Profile };
