interface User {
  npubkey: string; // TODO: figure out type
  name: string; // optional
  handle: string; // optional
  avatar?: string; // TODO: how to do avatars??
  peers: number;
  description: string;
  experiences: Array<string>;
}

export type { User };
