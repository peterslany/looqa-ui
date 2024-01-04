import { ReactNode } from "react";
import { User } from "./user";

// MEMO: Using name 'lEvent' for looqa events to not confuse this with
// programmatic events or nostr events

interface LeventLocation {
  label: string;
  geolocation: string;
}

interface LeventBase {
  name: string;
  startDate: string; // ISO string
  endDate: string; // ISO string
  organizer: User;
  location: LeventLocation;
}

interface Levent extends LeventBase {
  previewImage: ReactNode; // figure out type?
  description: ReactNode;
  visitorCount: number; // TODO: maybe fetch this programatically??
}

export type { Levent, LeventBase };
