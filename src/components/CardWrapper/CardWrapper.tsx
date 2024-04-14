import Image from "next/image";
import StarIcon from "../../../public/icon-star.svg";
import { data } from "@/data/data";
import Accordion from "@/components/Accordion/Accordion";
import { useState } from "react";
export default function CardWrapper() {
  const [activatedAccordion, setActivatedAccordion] = useState(
    "What is Frontend Mentor, and how will it help me?"
  );
  return (
    <div className="bg-white size-32 p-6 sm:p-10 rounded-[18px] w-full max-w-[600px] m-4 sm:m-0 h-auto">
      <div className="flex sm:mb-8 sm:mt-4">
        <Image
          src={StarIcon}
          alt="star icon"
          className="w-[24px] lg:w-[40px] mr-4 sm:mr-8"
        />
        <h1 className="text-darkPurple text-2xl sm:text-[3.5rem] font-bold ">
          FAQs
        </h1>
      </div>
      <div className=" divide-y-[1px] divide-lightPink">
        {data.map((item) => (
          <Accordion
            key={item.title}
            body={item.body}
            title={item.title}
            activatedAccordion={activatedAccordion}
            setActivatedAccordion={setActivatedAccordion}
          />
        ))}
      </div>
    </div>
  );
}
