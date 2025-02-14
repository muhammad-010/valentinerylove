"use client";

// import type { Metadata } from "next";
import "./globals.css";
import { useEffect, useRef } from "react";

// export const metadata: Metadata = {
//   title: "Valentines: A Romantic Card Game with a Surprise Proposal",
//   description:
//     "Play a unique Valentine's card game. Complete the collection to reveal a romantic proposal!",
//   keywords: [
//     "Valentine's card game",
//     "romantic proposal game",
//     "photo card challenge",
//     "Valentine's Day surprise",
//     "couples game",
//     "valentine's day game",
//     "proposal game",
//   ],
// };

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current
        .play()
        .catch((err) => console.log("Autoplay blocked:", err));
    }
  };

  useEffect(() => {
    document.addEventListener("click", playAudio);
    document.addEventListener("touchstart", playAudio);

    return () => {
      document.removeEventListener("click", playAudio);
      document.removeEventListener("touchstart", playAudio);
    };
  }, []);

  return (
    <html lang="en">
      <body>
        {/* Elemen audio */}
        <audio ref={audioRef} loop>
          <source src="/bg-music.mp3" type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>

        {/* Children tetap ada */}
        {children}
      </body>
    </html>
  );
}
