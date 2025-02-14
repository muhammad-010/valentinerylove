import { useState, useEffect } from "react";
import { Playfair_Display } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import Fireworks from "@fireworks-js/react";
import Image from "next/image";

const playfairDisplay = Playfair_Display({
  display: "swap",
  subsets: ["latin"],
});

// 36 images
const images = [
  "/game-photos/1.JPEG",
  "/game-photos/2.jpg",
  "/game-photos/3.JPEG",
  "/game-photos/4.PNG",
  "/game-photos/5.JPEG",
  "/game-photos/6.JPG",
  "/game-photos/7.JPG",
  "/game-photos/8.jpg",
  "/game-photos/9.jpg",
  "/game-photos/10.jpg",
  "/game-photos/11.jpg",
  "/game-photos/12.jpg",
  "/game-photos/13.jpg",
  "/game-photos/14.jpg",
  "/game-photos/15.jpg",
  "/game-photos/16.jpg",
  "/game-photos/17.jpg",
  "/game-photos/18.jpg",
  "/game-photos/19.jpg",
  "/game-photos/20.jpg",
  "/game-photos/21.jpg",
  "/game-photos/22.JPG",
  "/game-photos/23.jpg",
  "/game-photos/24.jpg",
  "/game-photos/25.jpg",
  "/game-photos/26.jpg",
  "/game-photos/27.jpg",
  "/game-photos/28.jpg",
  "/game-photos/29.jpg",
  "/game-photos/30.jpg",
  "/game-photos/31.jpg",
  "/game-photos/32.jpg",
  "/game-photos/33.jpg",
  "/game-photos/34.jpg",
  "/game-photos/35.JPEG",
  "/game-photos/36.JPG",
];

export default function ValentinesProposal() {
  const [step, setStep] = useState(0);
  const [position, setPosition] = useState<{
    top: string;
    left: string;
  } | null>(null);
  const [showFireworks, setShowFireworks] = useState(false);

  const getRandomPosition = () => {
    const randomTop = Math.random() * 80;
    const randomLeft = Math.random() * 80;
    return { top: `${randomTop}%`, left: `${randomLeft}%` };
  };

  useEffect(() => {
    if (step < 2) {
      // Change step after 5 seconds
      const timer = setTimeout(() => {
        setStep((prevStep) => prevStep + 1);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [step]);

  const handleYesClick = () => {
    setShowFireworks(true);
    setStep(3);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.h2
            key="step-0"
            className={`text-4xl font-semibold mb-4 ${playfairDisplay.className}`}
            transition={{ duration: 1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            anjay bisa kelar
          </motion.h2>
        )}
        {step === 1 && (
          <motion.h2
            key="step-1"
            className={`text-4xl font-semibold mb-4 ${playfairDisplay.className}`}
            transition={{ duration: 3 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            abis ini jawab sesuatu dulu ya hehe
          </motion.h2>
        )}
        {step === 2 && (
          <motion.div
            key="step-2"
            transition={{ duration: 3 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center"
          >
            <ImageGridBackground /> {/* Tambahkan di Step 2 */}
            <h2 className={`text-5xl font-semibold mb-8 ${playfairDisplay.className}`}>
              I Love you :D
            </h2>
            <Image src="/sad_hamster.png" alt="Sad Hamster" width={200} height={200} />
            <div className="flex space-x-4 mt-10">
              <button
                className="px-6 py-2 text-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl hover:from-pink-600 hover:to-rose-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={handleYesClick}
              >
                Love u more, sayang 🥰
              </button>
              <button
                className="px-6 py-2 text-lg font-semibold text-white bg-gradient-to-r from-gray-500 to-gray-600 rounded-xl hover:from-gray-600 hover:to-gray-700 transform hover:scale-95 transition-all duration-300 shadow-lg"
                style={
                  position
                    ? {
                        position: "absolute",
                        top: position.top,
                        left: position.left,
                      }
                    : {}
                }
                onMouseEnter={() => setPosition(getRandomPosition())}
              >
                FAK YU BRO&apos;t 😢
              </button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step-3"
            className={`text-4xl font-semibold mb-4 flex flex-col justify-center items-center ${playfairDisplay.className}`}
            transition={{ duration: 1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ImageGridBackground /> {/* Tambahkan di Step 3 */}
            <h2 className="text-4xl md:text-5xl font-semibold text-center mt-4">
              Thank you for loving me, babe... I love you! 💕
            </h2>

            <p className="text-lg mt-6 max-w-3xl text-center p-6 rounded-xl">
              Hey love, here’s a thing to show you how much I love you and adore you, hehe. 
              seriously, you're the best valentine ever and the most beautiful, amazing girl ever! :D 
              I’m loving you for the rest of my life, no matter how your fart sounds like sound horeg bass WKWKKW. 
              I’m never gonna stop caring for you. Terima kasih untuk tetap menjadi ery cantik yang aku kenal dan sudah selalu adaa untuk kita ya sayang❤️ aku yakin tahun ke-2 ini memang bakal
              jadi lebih berat, tapiii... selama kita tetap memiliki satu sama lain, we'll easily beiing together till the end yaa...
              please just be mine yaaa!!!!! sampai jumpa di valentine tahun depann!! 💕
            </p>
            <p className="text-lg mt-6 max-w-3xl text-center p-6 rounded-xl relative z-10">
              Oh ya, here I have some documentation when I made your valentine! :D  <br></br>
              <a 
                href="https://drive.google.com/drive/folders/1zQa1FCX-d_bazogVsDWJb77HSQ7RXcz1?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline font-semibold inline-block pointer-events-auto"
              >
                Click here to see it 💕
              </a>
            </p>
            <Image src="/hamster_jumping.gif" alt="Hamster Feliz" width={200} height={200} unoptimized />
          </motion.div>
        )}
      </AnimatePresence>

      {showFireworks && (
        <div className="absolute w-full h-full opacity-50">
          <Fireworks
            options={{
              autoresize: true,
            }}
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
        </div>
      )}
    </div>
  );
}

const ImageGridBackground = () => {
  return (
    <div className="absolute inset-0 grid grid-cols-6 opacity-10">
      {images.slice(0, 36).map((src, index) => (
        <div key={index} className="relative h-full">
          <Image
            src={src}
            alt={`Memory ${index + 1}`}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
};