import Avvvatars from "avvvatars-react";
import { User } from "../../types/user";
import { Avatar } from "../Avatar/Avatar";
import "./FrensThumbnail.css"

const FrensThumbnail = ({ npubs, amount = 3, size = 20 }: { npubs: string[], amount?:number; size?: number }) => {
    // We display only 3 thumbnails of frens going
    const visibleFrens = npubs.slice(0, amount);
    const extraFrens = npubs.length - amount;
    console.log(extraFrens)
    return (
      <span className="frens-thumbnail">
        {visibleFrens.map((fren) => (
          <Avatar key={fren} user={{ npubkey: fren } as User} size={size} />
        ))}
        {extraFrens > 0 && <Avvvatars value={`${extraFrens}`} size={size} />}
      </span>
    );
  };

  export {FrensThumbnail}