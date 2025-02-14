import { Playfair_Display } from "next/font/google";
import Link from "next/link";

const playfairDisplay = Playfair_Display({
  display: "swap",
  subsets: ["latin"],
});

export default function TextFooter() {
  return (
    <>
      <h1
        className={`absolute left-10 bottom-5 transform -translate-y-1/2 text-white text-5xl md:text-4xl sm:text-2xl xs:text-xl font-bold leading-tight ${playfairDisplay.className}`}
      >
        <span className="text-white">Hyy, sayang</span> <br /> Cari foto yang sama yaa
      </h1>
      <h1
        className={`absolute right-10 bottom-5 transform -translate-y-1/2 text-white text-5xl md:text-4xl sm:text-2xl xs:text-xl font-bold leading-tight text-right ${playfairDisplay.className}`}
      >
        semangat :D <br /> <span className="text-gray-400"></span>
      </h1>
    </>
  );
}
