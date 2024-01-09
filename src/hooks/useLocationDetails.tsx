import { useQuery } from "react-query";
import { Location } from "../types/levent";

const LOCATION_API =
  "https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=47.217954&lon=-1.55291";

const fetchLocationDetails = async (location: Location) => {
  try {
    const res = await fetch(
      `${LOCATION_API}&lat=${location.lat}&lon=${location.lon}`
    );
    return res.json();
  } catch (e) {
    console.error(`Error fetching location for ${location}`, e);
  }
};

const useLocationDetails = (location: Location | undefined) => {
  return useQuery({
    queryKey: ["location", location?.lat, location?.lon],
    queryFn: () => location && fetchLocationDetails(location),
    enabled: !!location
  });
};

export { useLocationDetails };
