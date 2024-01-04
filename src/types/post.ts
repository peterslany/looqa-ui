import { LeventBase } from "./levent";
import { User } from "./user";

interface Post {
  author: User;
  text: string;
  levent: LeventBase;
  media?: string; // TODO: figure out type for photo/video?
}

export type { Post };
