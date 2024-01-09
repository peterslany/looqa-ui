const getTime = (date: Date) =>
  `${date.toLocaleTimeString("en-US").split(":").slice(0, 2).join(":")} ${
    date.toLocaleTimeString("en-US").split(":")[2].split(" ")[1]
  }`;

const getDateTime = (date: Date) =>
  `${date.toLocaleDateString("en-US")} ${getTime(date)}`;

const formatDateRange = (start: string, end: string) => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  if (startDate.toDateString() === endDate.toDateString()) {
    return `${startDate.toLocaleDateString()}: ${getTime(
      startDate
    )} → ${getTime(endDate)}`;
  }
  return `${startDate.toLocaleDateString(
    "en-US"
  )} → ${endDate.toLocaleDateString("en-US")}`;
};

export { getDateTime, getTime, formatDateRange };
