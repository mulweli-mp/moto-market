import { Bike } from "@/components/types";

export const fetchBikesData = async (): Promise<Bike[]> => {
  const response = await fetch(
    "https://raw.githubusercontent.com/ChrisCrawford13/DevBros-CodingChallenge-Front1/main/bikes_response.json"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch bikes data");
  }
  const data = await response.json();
  return data;
};
