"use client";
import Image from "next/image";
import DesktopBackground from "../../public/background-pattern-desktop.svg";
import MobileBackground from "../../public/background-pattern-mobile.svg";
import useWindowWith from "./utils/useWindowWidth";
import CardWrapper from "@/components/CardWrapper/CardWrapper";
export default function Home() {
  const windowWidth = useWindowWith();
  return (
    // <main className="bg-backgroundDesktop">
    //   {windowWidth < 400 ? (
    //     <Image src={MobileBackground} alt="background" />
    //   ) : (
    //     <Image src={DesktopBackground} alt="background" />
    //   )}
    // </main>
    <main className="bg-backgroundMobile sm:bg-backgroundDesktop bg-no-repeat bg-contain bg-fixed flex justify-center items-center">
      <CardWrapper />
    </main>
  );
}
