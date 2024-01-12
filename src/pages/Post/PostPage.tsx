import { useParams } from "react-router";
import { Error404 } from "../../components";
import { PostComponent } from "../../components/Post/Post";
import { posts } from "../../constants/data";
import "./PostPage.css"

const PostPage = () => {
  const { postId } = useParams();

  const post = posts.find(({ id }) => id === postId);
  if (!post) {
    return <Error404 />;
  }
  return (
    <div className="post-page">
      <PostComponent post={post} previewMedia={false} />
    </div>
  );
};

export { PostPage };
