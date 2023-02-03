import React, { useState } from "react";
import Chevron from '../assets/icons/chevron.svg'
export default function Accordion() {
  const [isActive, setIsActive] = useState(false);
  
  const accordionData = {
    title: 'How do I download the app?',
    content: `To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.`
  }

  const { title, content } = accordionData;


  return (
    <div className="accordion bg-light-grey py-8 pl-8 pr-7">
      <div className="accordion-item flex flex-col items-center">
        <div className="accordion-title flex items-center justify-between" onClick={() => setIsActive(!isActive)}>
          <div className="w-[219px] font-space text-dark-navy text-accordian-title">{title}</div>
          <img src={Chevron} alt="" className={isActive ? `rotate-0` : `rotate-180`}/>
        </div>
        {isActive && <div className="font-lexend accordion-content text-mobile-p text-dark-navy mt-6 mb-8">{content}</div>}
      </div>
    </div>
  );
}
