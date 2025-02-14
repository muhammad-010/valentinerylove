"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

// 18 images
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
];

// Create 18 pairs of images (36 images in total)
const imagePairs = images.flatMap((image) => [image, image]);

const shuffleArray = (array: string[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const heartLayout = [
  [null, null, 0, 1, null, 2, 3, null, null],
  [null, 4, 5, 6, 7, 8, 9, 10, null],
  [11, 12, 13, 14, 15, 16, 17, 18, 19],
  [null, 20, 21, 22, 23, 24, 25, 26, null],
  [null, null, 27, 28, 29, 30, 31, null, null],
  [null, null, null, 32, 33, 34, null, null, null],
  [null, null, null, null, 35, null, null, null, null],
];

type ValentinesProposalProps = {
  handleShowProposal: () => void;
};

export default function PhotoPairGame({
  handleShowProposal,
}: ValentinesProposalProps) {
  const [images, setImages] = useState<string[]>([]);
  const [selected, setSelected] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [incorrect, setIncorrect] = useState<number[]>([]);

  useEffect(() => {
    // Shuffle the images when the component mounts
    setImages(shuffleArray([...imagePairs]));
  }, []);

  const handleClick = async (index: number) => {
    if (selected.length === 2 || matched.includes(index)) return;

    setSelected((prev) => [...prev, index]);

    if (selected.length === 1) {
      const firstIndex = selected[0];
      if (images[firstIndex] === images[index]) {
        setMatched((prev) => [...prev, firstIndex, index]);
      } else {
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait 1 second

        setIncorrect([firstIndex, index]);
        setTimeout(() => setIncorrect([]), 1000); // Clear incorrect after 1 second
      }
      setTimeout(() => setSelected([]), 1000);
    }
  };

  // Check if game is won
  useEffect(() => {
    if (matched.length === imagePairs.length) {
      handleShowProposal();
    }
  }, [matched, handleShowProposal]);

  return (
    <div className="grid grid-cols-9 gap-2 max-w-full overflow-hidden">
    {/* Image preload */}
    <div className="hidden">
      {images.map((image, i) => (
        <Image
          key={i}
          src={image}
          alt={`Image ${i + 1}`}
          layout="fill"
          objectFit="cover"
          priority
        />
      ))}
    </div>

    {heartLayout.flat().map((index, i) =>
      index !== null ? (
        <motion.div
          key={i}
          className="w-[10vw] h-[10vw] sm:w-20 sm:h-20 relative cursor-pointer"
          whileHover={{ scale: 1.1 }}
          onClick={() => handleClick(index)}
          style={{ perspective: "1000px" }} // Add perspective for 3D effect
        >
          {/* Back of the card */}
          {!selected.includes(index) && !matched.includes(index) && (
            <motion.div
              className="w-full h-full rounded-md absolute"
              initial={{ rotateY: 0 }}
              animate={{
                rotateY:
                  selected.includes(index) || matched.includes(index)
                    ? 180
                    : 0,
              }}
              transition={{ duration: 0.5 }}
              style={{ backfaceVisibility: "hidden", backgroundColor: "#ffdee3" }}
            />
          )}

          {/* Front of the card (image) */}
          {(selected.includes(index) || matched.includes(index)) && (
            <motion.div
              className="w-full h-full absolute"
              initial={{ rotateY: -180 }}
              animate={{ rotateY: 0 }}
              transition={{ duration: 0.5 }}
              style={{ backfaceVisibility: "hidden" }}
            >
              <Image
                src={images[index]}
                alt={`Imagen ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </motion.div>
          )}

          {/* Incorrect animation */}
          {incorrect.includes(index) && (
            <motion.div
              className="absolute inset-0"
              animate={{ scale: [1, 1.1, 1], opacity: [1, 0, 1] }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-full h-full bg-[#FF8896] rounded-md"></div>
            </motion.div>
          )}
        </motion.div>
      ) : (
        <div key={i} className="w-[10vw] h-[10vw] sm:w-20 sm:h-20"></div>
      )
    )}
  </div>
  );
}
