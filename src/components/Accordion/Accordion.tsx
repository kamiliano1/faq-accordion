import { Dispatch, SetStateAction, useEffect, useState } from "react";
import ToggleButton from "../ToggleButton/ToggleButton";
import clsx from "clsx";

type AccordionType = {
  title: string;
  body: string;
  activatedAccordion: string;
  setActivatedAccordion: Dispatch<SetStateAction<string>>;
};
export default function Accordion({
  title,
  body,
  activatedAccordion,
  setActivatedAccordion,
}: AccordionType) {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    activatedAccordion === title ? setIsOpen(true) : setIsOpen(false);
  }, [activatedAccordion, title]);
  const toggleAccordion = () => {
    activatedAccordion === title
      ? setActivatedAccordion("")
      : setActivatedAccordion(title);
  };

  return (
    <div className="">
      <div className="flex justify-between items-center mt-4">
        <h2
          onClick={toggleAccordion}
          className="font-semibold text-darkPurple text-base sm:text-lg hover:text-pink cursor-pointer"
        >
          {title}
        </h2>
        <ToggleButton onClick={toggleAccordion} isOpen={isOpen} />
      </div>
      <p
        className={clsx(
          "text-palePurple text-sm leading-[150%] mt-4 overflow-hidden duration-150 max-h-[0vh]",
          {
            "max-h-[100vh]": isOpen,
          }
        )}
      >
        {body}
      </p>
    </div>
  );
}
