import { PostComponent } from "../../components/Post/Post";
import { posts } from "../../constants/data";
import "./Feed.css";
import { FeedSidebar } from "./FeedSidebar";




const Feed = () => {
  return (
    <div>
      <div className="feed__featured-container">...</div>
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
