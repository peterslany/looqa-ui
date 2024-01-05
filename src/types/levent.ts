import { ReactNode } from "react";
import { User } from "./user";

// MEMO: Using name 'lEvent' for looqa events to not confuse this with
// programmatic events or nostr events

interface Location {
  lat: number; //latitude
  lon: number; //longitude
}

interface LeventLocation extends Location {
  label: string;
}

interface LeventBase {
  id: string;
  name: string;
  startDate: string; // ISO string
  endDate: string; // ISO string
  organizer: User;
  location: LeventLocation;
}

interface Levent extends LeventBase {
  previewImage: string; // figure out type?
  description: ReactNode;
  visitorCount: number; // TODO: maybe fetch this programatically??
}

export type { Levent, LeventBase, Location };
