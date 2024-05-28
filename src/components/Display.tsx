import { nameAtom, valueAtom } from "@/utils/atoms";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAtom } from "jotai";
import Cards from "./Cards";
import { ApiType } from "@/utils/type";
import Loaddata from "./Loaddata";

const Display = () => {
  const [input, setInput] = useAtom(valueAtom);
  const [name, setName] = useAtom(nameAtom);
  const { data, isLoading, isFetching, isFetched, isSuccess } = useQuery({
    queryKey: ["weather-app"],
    queryFn: async () => {
      const response = await axios.get(
        `https://api.tomorrow.io/v4/weather/forecast?location=${name}&apikey=Zy6wN8N03BBnkAhXEC5K44qaS5BQJt0X` //7mEPGrze5Eeukkk6MkGvEsdCeIAk7R2W   dyGSAgRiiUdYzeDk3PUx2ImLMVU82Xfs    f3TDu9VoX0HM8fpWzwDV8mK1hS6twugX
      );
      const info = response.data.timelines.daily[0].values;
      console.log(info);
      console.log(info);
      return info;
    },
    refetchOnWindowFocus: false,
  });

  if (isLoading || isFetching) {
    return (
      <>
        <Loaddata />
      </>
    );
  }
  if (isFetched && isSuccess) {
    return (
      <>
        <Cards bio={data} />
      </>
    );
  }
};

export default Display;
