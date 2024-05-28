import { Card, CardBody, Skeleton } from "@nextui-org/react";
import {
  CloudRain,
  Droplets,
  SearchCheck,
  ThermometerSun,
  Wind,
} from "lucide-react";

const Loaddata = () => {
  return (
    <>
      <div className="flex justify-center items-center h-[80dvh] ">
        <Card>
          <CardBody className="space-y-4">
            <Skeleton className="flex justify-center items-center gap-5 border-2 border-solid border-black rounded-xl w-fit">
              <input className="border-none outline-none px-2" type="search" />
              <button className="bg-green-600 px-3.5 py-2 rounded-r-xl border-r-2 border-solid border-black">
                <SearchCheck />
              </button>
            </Skeleton>
            <Skeleton className="text-xl flex justify-center items-center font-semibold">
              Kolkata
            </Skeleton>
            <div className="grid grid-cols-2 gap-5 items-center">
              <div className="">
                <Skeleton className="text-xl font-semibold">
                  Temperature <ThermometerSun />
                </Skeleton>
                <Skeleton className="">26 ° c</Skeleton>
              </div>
              <div className="">
                <Skeleton className="text-xl font-semibold">
                  Wind Speed
                  <Wind />
                </Skeleton>
                <Skeleton className="">13 kmph</Skeleton>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5 items-center">
              <div className="">
                <Skeleton className="text-xl font-semibold">
                  Humidity
                  <Droplets />
                </Skeleton>
                <Skeleton className="">30%</Skeleton>
              </div>
              <div className="">
                <Skeleton className="text-xl font-semibold">
                  Rain Intensity
                  <CloudRain />
                </Skeleton>
                <Skeleton className="">22 mm</Skeleton>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default Loaddata;
