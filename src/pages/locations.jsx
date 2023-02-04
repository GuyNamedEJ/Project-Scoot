import Location from "../components/Location";
import Button from "../components/Button";

export default function Locations() {
  const cities = ["New York", "London", "Jakarta", "Yokohama"];

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center bg-careers-location-mobile h-[160px] mb-16">
        <h1 className="font-space text-mobile-h1 text-snow ">Locations</h1>
      </div>
      <div className="px-8">
        <div className="w-[100%] h-[152px] bg-world-map-mobile bg-contain bg-center self-center mb-10"></div>
        <div className="flex flex-col items-center gap-4 font-space mb-[72px]">
          {cities.map((city) => (
            <Location city={city} />
          ))}
        </div>
        <div className="flex flex-col text-center gap-8 mb-[72px]">
          <h2 className="text-mobile-h2 font-space text-dark-navy">
            Your City Not Listed?
          </h2>
          <p className="text-dim-grey text-mobile-p font-lexend">
            We’re always looking for ambitious individuals to help us on our
            journey. If you’re passionate about our mission to provide clean,
            accessible transport to improve urban living we want to hear from
            you!
          </p>
          <Button className="self-center">Say Hello</Button>
        </div>
      </div>
    </div>
  );
}
