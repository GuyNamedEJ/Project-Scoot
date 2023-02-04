import JoinUs from "../assets/images/join-us.jpg";
import Tech from "../assets/images/our-tech.jpg";
import Integrity from "../assets/images/our-integrity.jpg";
import Community from "../assets/images/our-community.jpg";
import Button from "../components/Button";
import JobPost from "../components/Jobs"
import { jobs } from "../job-listing"

export default function Careers() {
  return (
    <div className="flex flex-col gap-14">
      <div className="flex items-center justify-center bg-careers-location-mobile h-[160px]">
        <h1 className="font-space text-mobile-h1 text-snow ">Careers</h1>
      </div>
      {/**
        container for about content
       */}
      <div className="flex flex-col gap-8 px-8 overflow-x-hidden">
        {/**
        Mobility Content
       */}
        <div className="relative flex flex-col gap-14 items-center text-center">
          <img
            className="rounded-full w-[311px]"
            src={JoinUs}
            alt="Digital Era"
          />
          <div className="flex flex-col gap-8">
            <h2 className="text-mobile-h2 font-space text-dark-navy">
              Care to join our mission?
            </h2>
            <p className="text-dim-grey text-mobile-p font-lexend">
              We’re always looking for ambitious individuals to help us on our
              journey. If you’re passionate about our mission to provide clean,
              accessible transport to improve urban living we want to hear from
              you!
            </p>
          </div>
          <div className="absolute scale-x-[-1] top-32 right-[-115px]  ">
            <svg xmlns="http://www.w3.org/2000/svg" width="735" height="138">
              <g
                fill="none"
                fillRule="evenodd"
                stroke="#FCB72B"
                strokeLinejoin="bevel"
                strokeWidth="15"
              >
                <path d="M407.952 145.444l38.426-38.426-38.426-38.426" />
                <path d="M0 8h270.115v99.369h176.263" />
              </g>
            </svg>
          </div>
        </div>
        <Button className="self-center">Say Hello</Button>
        {/**Content End*/}
      </div>
      {/**Value Start */}
      <h2 className="font-space text-center text-mobile-h2">Our values</h2>
      {/**Values Start */}
      <div className="flex flex-col gap-14 px-8 mb-[145px]">
        {/** Tech Start */}
        <div id="value-container" className="flex flex-col items-center gap-4">
          <div className="flex flex-col w-[240px] h-[288px] items-center relative">
            <img src={Tech} alt="" className="rounded-full w-[240px]" />
            <h3 className="text-mobile-h3 absolute bottom-0 bg-yellow w-[96px] h-[96px] flex items-center justify-center rounded-full font-space">
              01
            </h3>
          </div>
          <div className="text-center flex flex-col gap-7">
            <h3 className="font-space text-mobile-h3">Our Tech</h3>
            <p className="font-lexend text-mobile-p">
              We’re using cutting edge technology to drive accessible urban
              transportation forward. Our fully electric scooters are a joy to
              ride!
            </p>
          </div>
        </div>
        {/** Tech End */}

        {/** Integrity Start */}
        <div id="value-container" className="flex flex-col items-center gap-4">
          <div className="flex flex-col w-[240px] h-[288px] items-center relative">
            <img src={Integrity} alt="" className="rounded-full w-[240px]" />
            <h3 className="text-mobile-h3 absolute bottom-0 bg-yellow w-[96px] h-[96px] flex items-center justify-center rounded-full font-space">
              02
            </h3>
          </div>
          <div className="text-center flex flex-col gap-7">
            <h3 className="font-space text-mobile-h3">Our integrity</h3>
            <p className="font-lexend text-mobile-p">
              We are fully committed to deliver a great yet safe, sustainable
              micro-mobility experience in every city we serve.
            </p>
          </div>
        </div>
        {/** Integrity End */}

        {/** Community Start */}
        <div id="value-container" className="flex flex-col items-center gap-4">
          <div className="flex flex-col w-[240px] h-[288px] items-center relative">
            <img src={Community} alt="" className="rounded-full w-[240px]" />
            <h3 className="text-mobile-h3 absolute bottom-0 bg-yellow w-[96px] h-[96px] flex items-center justify-center rounded-full font-space">
              03
            </h3>
          </div>
          <div className="text-center flex flex-col gap-7">
            <h3 className="font-space text-mobile-h3">Our community</h3>
            <p className="font-lexend text-mobile-p">
              We support every community we serve. All workers are paid a living
              wage based on their location and are Scoot employees.
            </p>
          </div>
        </div>
        {/** Community End */}
      </div>
      {/**Values End */}

      {/**Job Listings */}
      <div className="flex flex-col gap-4 px-8 mb-[120px]">
      {jobs.map(({ position, location }) => (
            <JobPost position={position} location={location} />
          ))} 
      </div>
    </div>
  );
}
