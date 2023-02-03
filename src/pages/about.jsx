import DigitalEra from "../assets/images/digital-era.jpg";
import Urban from "../assets/images/better-living.jpg";
import Tech from "../assets/images/our-tech.jpg";
import Integrity from "../assets/images/our-integrity.jpg";
import Community from "../assets/images/our-community.jpg";
import Accordion from "../components/Accordion";

export default function About() {
  return (
    <div className="flex flex-col gap-14">
      <div className="flex items-center justify-center bg-about-mobile h-[160px]">
        <h1 className="font-space text-mobile-h1 text-snow ">About</h1>
      </div>
      {/**
        container for about content
       */}
      <div className="flex flex-col gap-32 px-8">
        {/**
        Mobility Content
       */}
        <div className="flex flex-col gap-14 items-center text-center">
          <img
            className="rounded-full w-[311px]"
            src={DigitalEra}
            alt="Digital Era"
          />
          <div className="flex flex-col gap-8">
            <h2 className="text-mobile-h2 font-space text-dark-navy">
              Mobility for the digital era
            </h2>
            <p className="text-dim-grey text-mobile-p font-lexend">
              Getting around should be simple (and even fun!) for everyone. We
              embrace technology to provide low cost, smart access to scooters
              at your fingertips.
            </p>
          </div>
        </div>

        {/**
        Urban Content
       */}
        <div className="flex flex-col gap-14 items-center text-center">
          <img
            className="rounded-full w-[311px]"
            src={Urban}
            alt="Digital Era"
          />
          <div className="flex flex-col gap-8">
            <h2 className="text-mobile-h2 font-space text-dark-navy">
              Better urban living
            </h2>
            <p className="text-dim-grey text-mobile-p font-lexend">
              We’re helping connect cities and bring people closer together. Our
              scooters are also fully-electric and we offset the minimal carbon
              footprint for each ride.
            </p>
          </div>
        </div>
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
            We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.
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
            We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.
            </p>
          </div>
        </div>
        {/** Community End */}
      </div>
      {/**Values End */}

      <h2 className="font-space text-center text-mobile-h2 mb-[48px]">FAQs</h2>
      <div className="px-8">
        <h3 className="font-space text-center text-mobile-h3 mb-8">How it works</h3>
        <Accordion />
      </div>
      {/**Container end */}
    </div>
  );
}
