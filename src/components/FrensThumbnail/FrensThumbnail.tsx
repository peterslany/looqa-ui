import Avvvatars from "avvvatars-react";
import { Avatar } from "../Avatar/Avatar";
import "./FrensThumbnail.css"

const FrensThumbnail = ({ npubs }: { npubs: string[] }) => {
    // We display only 3 thumbnails of frens going
    const visibleFrens = npubs.slice(0, 3);
    const hasExtraFrens = npubs.length - 3;
    return (
      <span className="frens-thumbnail">
        {visibleFrens.map((fren) => (
          <Avatar key={fren} user={{ npubkey: fren }} size={20} />
        ))}
        {hasExtraFrens > 0 && <Avvvatars value={`+${hasExtraFrens}`} size={20} />}
      </span>
    );
  };

  export {FrensThumbnail}