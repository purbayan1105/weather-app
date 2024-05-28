import { nameAtom, valueAtom } from "@/utils/atoms";
import { ApiType } from "@/utils/type";

import { Button, Card, CardBody, Input } from "@nextui-org/react";
import { useQueryClient } from "@tanstack/react-query";
import { useAtom } from "jotai";
import {
  CloudRain,
  Droplets,
  SearchCheck,
  Thermometer,
  ThermometerSnowflake,
  ThermometerSun,
  Wind,
} from "lucide-react";
import { useState } from "react";

const Cards = ({ bio }: ApiType) => {
  let icon = <Thermometer />;
  const queryClient = useQueryClient();

  const [input, setInput] = useAtom(valueAtom);
  const [name, setName] = useAtom(nameAtom);
  const inputFn = (e: any) => {
    setInput(e.target.value);
  };

  const btnFn = () => {
    setName(input);
    queryClient.refetchQueries();
  };
  if (bio.temperatureAvg > 30) {
    icon = <ThermometerSun />;
  } else if (bio.temperatureAvg < 30 || bio.temperatureAvg > 10) {
    icon = <Thermometer />;
  } else {
    icon = <ThermometerSnowflake />;
  }
  return (
    <>
      <div className="flex justify-center items-center h-[80dvh] ">
        <Card>
          <CardBody className="space-y-4">
            <div className="flex justify-center items-center gap-5 bg-gray-200 rounded-xl w-fit">
              <input
                className="border-none outline-none px-2 bg-gray-200"
                type="search"
                onChange={inputFn}
              />
              <button
                className="bg-green-600 px-3.5 py-2 rounded-r-xl  "
                onClick={btnFn}>
                <SearchCheck />
              </button>
            </div>
            <div className="text-2xl flex justify-center items-center font-semibold">
              {name.toUpperCase()}
            </div>
            <div className="grid grid-cols-2 gap-5 items-center">
              <div className="">
                <div className="text-xl font-semibold">Temperature {icon}</div>
                <div className="">{bio.temperatureAvg} ° c</div>
              </div>
              <div className="">
                <div className="text-xl font-semibold">
                  Wind Speed
                  <Wind />
                </div>
                <div className="">{bio.windSpeedAvg} kmph</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5 items-center">
              <div className="">
                <div className="text-xl font-semibold">
                  Humidity
                  <Droplets />
                </div>
                <div className="">{bio.humidityAvg}%</div>
              </div>
              <div className="">
                <div className="text-xl font-semibold">
                  Rain Intensity
                  <CloudRain />
                </div>
                <div className="">{bio.rainIntensityAvg} mm</div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default Cards;
