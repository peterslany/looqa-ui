import { Link } from "react-router-dom";
import { Path } from "../../constants";
import { Post } from "../../types/post";
import { getDateTime } from "../../utils";
import { Avatar } from "../Avatar/Avatar";
import { LeventThumbnail } from "../LeventThumbnail/LeventThumbnail";
import "./Post.css";
import { PostActions } from "./PostActions";

type Props = {
  post: Post;
  showLevent?: boolean;
};

const PostComponent = ({ post, showLevent = true }: Props) => {
  return (
    <div className="post">
      <Link
        to={`${Path.POST}/${post.id}`}
        className="post__link"
        draggable="false"
      />
      <Link
        to={`${Path.PROFILE}/${post.author.npubkey}`}
        className="post__avatar"
      >
        <Avatar user={post.author} />
      </Link>
      <div className="post__content">
        <span className="post__content__name">
          <Link to={`${Path.PROFILE}/${post.author.npubkey}`} draggable="false">
            {post.author.name || post.author.npubkey}{" "}
            <span className="post__content__name__handle">
              @{post.author.handle}
            </span>
          </Link>{" "}
        </span>
        <span className="post__content__timestamp">
          {getDateTime(new Date(post.timestamp))}
        </span>
        {showLevent && <div className="post__content__levent-thumbnail">
          <LeventThumbnail levent={post.levent} />
        </div>}
        <div className="post__content__body">
          <Link
            to={`${Path.POST}/${post.id}`}
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
