import Avvvatars from "avvvatars-react";
import { User } from "../../types/user";

type Props = {
  user: User;
  size?: number;
};

const Avatar = ({ user, size = 64 }: Props) => {
  if (user.avatar)
    return (
      <img
        src={user.avatar}
        height={size}
        width={size}
        style={{ borderRadius: "50%", objectFit: "cover" }}
      />
    );
  return <Avvvatars value={user.npubkey} size={size} style="shape" />;
};

export { Avatar };
