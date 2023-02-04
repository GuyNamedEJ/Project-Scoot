import React, { useState } from "react";
import Chevron from "../assets/icons/chevron.svg";

export default function Accordion({ title, content }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <div className="accordion bg-light-grey py-8 pl-8 pr-7 flex flex-col">
        <div className="accordion-item flex flex-col">
          <div
            className="accordion-title flex items-center justify-between"
            onClick={() => setIsActive(!isActive)}
          >
            <div className="w-[219px] font-space text-dark-navy text-accordian-title">
              {title}
            </div>
            <img
              src={Chevron}
              alt=""
              className={isActive ? `rotate-0` : `rotate-180`}
            />
          </div>
          {isActive && (
            <div className="font-lexend accordion-content text-mobile-p text-dark-navy mt-6 mb-8">
              {content}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
