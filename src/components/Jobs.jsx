import Button from "./Button";
export default function Jobs({ position, location }) {
  return (
    <div className="bg-snow p-8 flex flex-col items-center gap-4">
      <div className="text-center text-dark-navy">
        <h1 className="text-[18px] font-space">{position}</h1>
        <p className="text-mobile-p font-lexend">{location}</p>
      </div>
      <Button>Apply</Button>
    </div>
  );
}
