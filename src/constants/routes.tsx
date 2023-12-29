import App from "../App";
import { Feed } from "../pages/Feed";

enum Path {
    FEED = '/',
    DISCOVER = '/discover',
    PROFILE = '/profile',
    EVENT = '/event',
    POST = 'post',
}

const routes = [
    {
        path: "/",
        element: <App />,
        // TODO: add 404 handling,
        children: [
            {
                path: Path.FEED,
                element: <Feed />
            }
        ]
    }
]

export {Path, routes}