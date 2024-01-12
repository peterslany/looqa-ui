import Avvvatars from "avvvatars-react";
import { users } from "../../constants/data";
import { User } from "../../types/user";
import { Avatar } from "../Avatar/Avatar";
import "./FrensThumbnail.css";

const FrensThumbnail = ({
  npubs,
  amount = 3,
  size = 20,
}: {
  npubs: string[];
  amount?: number;
  size?: number;
}) => {
  // We display only 3 thumbnails of frens going
  const visibleFrens = npubs.slice(0, amount);
  const extraFrens = npubs.length - amount;

  return (
    <span className="frens-thumbnail">
      {visibleFrens.map((npubkey) => {
        const user = users.find((user) => user.npubkey === npubkey) || {
          npubkey,
        };
        return <Avatar key={npubkey} user={user as User} size={size} />;
      })}
      {extraFrens > 0 && <Avvvatars value={`${extraFrens}`} size={size} />}
    </span>
  );
};

export { FrensThumbnail };
