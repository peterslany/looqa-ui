import { Link } from "react-router-dom";
import { Post } from "../../types/post";
import { Avatar } from "../Avatar/Avatar";
import "./Post.css";
import { PostActions } from "./PostActions";

type Props = {
  post: Post;
};

const PostComponent = ({ post }: Props) => {
  return (
    <div className="post">
      <Link to={`/post/${post.id}`} className="post__link" draggable="false" />
      <Link to={`/user/${post.author.npubkey}`} className="post__avatar">
        <Avatar user={post.author} />
      </Link>

      <div className="post__content">
        <span className="post__content__name">
          <Link to={`/user/${post.author.npubkey}`} draggable="false">
            {post.author.name || post.author.npubkey}{" "}
            <span className="post__content__name__handle">
              @{post.author.handle}
            </span>
          </Link>{" "}
        </span>
        <span className="post__content__timestamp">
          {/* TODO: Improve formatting  */}
          {new Date(post.timestamp).toLocaleString()}
        </span>
        <div className="post__content__body">
          <Link
            to={`/post/${post.id}`}
            className="post__content__body__text"
            draggable="false"
          >
            {post.text}
          </Link>
          {post.media && <img src={post.media} />}
        </div>
        <PostActions />
      </div>
    </div>
  );
};

export { PostComponent };
