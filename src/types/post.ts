import { LeventBase } from "./levent";
import { User } from "./user";

interface Post {
  id: string;
  author: User;
  text: string;
  levent: LeventBase;
  timestamp: string;
  media?: string; // TODO: figure out type for photo/video?
}

export type { Post };
