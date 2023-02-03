import locateIcon from "../assets/icons/locate.svg";
import scooter from "../assets/icons/scooter.svg";
import ride from "../assets/icons/ride.svg";
import rightArrow from "../assets/patterns/right-arrow.svg";
import leftArrow from "../assets/patterns/left-downward-arrow.svg";
import Button from "../components/Button";
import nearYou from "../assets/images/near-you.jpg";
import payments from "../assets/images/payments.jpg";
import telemetry from "../assets/images/telemetry.jpg";

export default function Home() {
  return (
    <main>
      <section>
        <div
          id="hero"
          className="relative flex flex-col items-center justify-center  text-center h-[650px] bg-home-mobile md:bg-home-tablet px-8 text-white bg-no-repeat bg-cover
        "
        >
          <h1 className="font-space text-4xl mb-6">
            Scooter sharing made simple
          </h1>
          <p className="text-mobile-text font-lexend mb-8">
            Scoot takes the hassle out of urban mobility. Our bikes are placed
            in convenient locations in each of our cities. Use our app to locate
            the nearest bike, unlock it with a tap, and you’re away!
          </p>
          <Button>Get Scootin</Button>
          <img
            className="absolute bottom-10 left-[-250px]"
            src={rightArrow}
            alt=""
          />
        </div>
      </section>

      <section className="px-8 my-[120px]">
        <div className="text-center flex flex-col items-center mb-[48px]">
          <div className="rounded-full bg-yellow w-[56px] mb-6">
            <img src={locateIcon} alt="" />
          </div>
          <h4 className="font-space text-mobile-h4 mb-6">Locate with app</h4>
          <p className="text-grey">
            Use the app to find the nearest scooter to you. We are continuously
            placing scooters in the areas with most demand, so one should never
            be too far away.{" "}
          </p>
        </div>

        <div className="text-center flex flex-col items-center mb-[48px]">
          <div className="rounded-full bg-yellow w-[56px] mb-6">
            <img src={scooter} alt="" />
          </div>
          <h4 className="font-space text-mobile-h4 mb-6">Pick your Scooter</h4>
          <p className="text-grey">
            We show the most important info for the scooters closest to you. So
            you know how much charge they have left and can see roughly how much
            it will cost.{" "}
          </p>
        </div>

        <div className="text-center flex flex-col items-center">
          <div className="rounded-full bg-yellow w-[56px] mb-6">
            <img src={ride} alt="" />
          </div>
          <h4 className="font-space text-mobile-h4 mb-6">Enjoy the ride</h4>
          <p className="text-grey">
            Scan the QR code and the bike will unlock. Retract the cable lock,
            put on a helmet, and you’re off! Always lock bikes away from
            walkways and accessibility ramps.
          </p>
        </div>
      </section>

      <section className="text-center px-8 overflow-x-hidden">
        <div className="mb-[120px]">
          <div className="flex flex-col items-center mb-[56px]">
            <img className="rounded-full w-[311px]" src={telemetry} alt="" />
          </div>
          <h2 className="font-space text-mobile-h2 tracking-tighter mb-8">Easy to use riding telemetry</h2>
          <p className="font-lexend text-mobile-p mb-8">The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app.</p>
          <Button>Learn More</Button>
        </div>

        <div className="mb-[120px]">
          <div className="flex flex-col items-center mb-[56px]">
            <img className="rounded-full w-[311px]" src={nearYou} alt="" />
          </div>
          <h2 className="font-space text-mobile-h2 tracking-tighter mb-8">Coming to a city near you</h2>
          <p className="font-lexend text-mobile-p mb-8">Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year.</p>
          <Button>Learn More</Button>
        </div>

        <div className="mb-[120px]">
          <div className="flex flex-col items-center mb-[56px]">
            <img className="rounded-full w-[311px]" src={payments} alt="" />
          </div>
          <h2 className="font-space text-mobile-h2 tracking-tighter mb-8">Zero hassle payments</h2>
          <p className="font-lexend text-mobile-p mb-8">Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month.</p>
          <Button>Learn More</Button>
        </div>
        
      </section>
    </main>
  );
}
