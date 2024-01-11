import { RouteObject } from "react-router";
import App from "../App";
import { LeventPage, PostPage, Profile } from "../pages";
import { Feed } from "../pages/Feed";

enum Path {
  FEED = "/",
  DISCOVER = "/discover",
  PROFILE = "/profile",
  EVENT = "/event",
  POST = "/post",
}

const routes: Array<RouteObject> = [
  {
    element: <App />,
    // TODO: add 404 handling,
    children: [
      {
        path: Path.FEED,
        element: <Feed />,
      },
      {
        path: `${Path.POST}/:postId`,
        element: <PostPage />,
      },
      {
        path: `${Path.EVENT}/:eventId`,
        element: <LeventPage />,
      },
      {
        path: `${Path.PROFILE}/:userId`,
        element: <Profile />
      }
    ],
  },
];

export { Path, routes };
