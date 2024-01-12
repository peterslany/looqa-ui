import { Link } from "react-router-dom";
import { PostComponent } from "../../components/Post/Post";
import { Path } from "../../constants";
import { featuredLevents, posts } from "../../constants/data";
import "./Feed.css";
import { FeedSidebar } from "./FeedSidebar";

const Feed = () => {
  return (
    <div>
      <div className="feed__featured">
        <div className="feed__featured__text">FEATURED</div>
        <div className="feed__featured__levents">
          {" "}
          {featuredLevents.map((levent) => (
            <Link
              className="feed__featured__levents__item"
              to={`${Path.EVENT}/${levent.id}`}
              key={`featured-levent-${levent.id}`}
            >
              {levent.name}
              <img src={levent.previewImage} />
            </Link>
          ))}
        </div>
      </div>
      <main className="feed__main">
        <div className="feed__main__posts">
          {posts.map((post) => (
            <PostComponent key={post.id} post={post} />
          ))}
        </div>
        <FeedSidebar location="New York City" />
      </main>
    </div>
  );
};
export { Feed };
