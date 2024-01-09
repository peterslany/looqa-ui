import { useParams } from "react-router";
import { Error404 } from "../../components";
import { PostComponent } from "../../components/Post/Post";
import { posts } from "../../constants/data";

const Post = () => {
  const { postId } = useParams();

  const post = posts.find(({ id }) => id === postId);
  if (!post) {
    return <Error404 />;
  }
  return <PostComponent post={post} />;
};

export { Post };
