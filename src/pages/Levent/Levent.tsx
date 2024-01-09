import React from "react";
import { useParams } from "react-router";

type Props = {};

const LeventPage = (props: Props) => {
  const { eventId } = useParams();
  return <div>Levent {eventId}</div>;
};

export { LeventPage  };
