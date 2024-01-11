import { useState } from "react";
import { Heart, Zap, Repeat, MessageCircle } from "react-feather";

type PostActionProps = {
  type: "heart" | "message" | "repeat" | "zap";
  count?: number;
  isOn?: boolean;
  highlightColor?: `#${string}`;
  onClick?: () => void;
};

const icons = {
  heart: Heart,
  message: MessageCircle,
  repeat: Repeat,
  zap: Zap,
};

const ORANGE_COLOR = "#FF9E57";

const PURPLE_COLOR = "#6E57FF";

const PostAction = ({
  isOn,
  type,
  count,
  highlightColor = ORANGE_COLOR,
  onClick,
}: PostActionProps) => {
  const [isFilled, setIsFilled] = useState(isOn);
  const Icon = icons[type];
  const handleToggle = () => {
    if (onClick) {
      onClick();
      return;
    }
    setIsFilled((current) => !current);
  };

  const fillOutline = type === "repeat";
  const fillInside = type === "heart";
  const isFillable = fillOutline || fillInside;
  return (
    <span className="post-action">
      <button className="post-action__button" onClick={handleToggle}>
        <Icon
          stroke={
            isFilled && isFillable
              ? fillOutline
                ? highlightColor
                : "none"
              : undefined
          }
          fill={isFilled && fillInside ? highlightColor : "none"}
        />{" "}
      </button>
      {count && count + (isFilled ? 1 : 0)}
    </span>
  );
};

const PostActions = () => {
  return (
    <div className="post-actions">
      <PostAction type="heart" count={25} />
      <PostAction type="message" count={7} />
      <PostAction type="repeat" highlightColor={PURPLE_COLOR} count={12} />
      <PostAction type="zap" count={256} onClick={() => window.alert("LN zapping functionality to be implemented in the future iterations.")} />
    </div>
  );
};

export { PostActions };
