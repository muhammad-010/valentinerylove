"use client";

import "./globals.css";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.5;
        audioRef.current.play().catch((err) => {
          console.log("Autoplay blocked:", err);
        });
      }
    };

    // Tambahkan event listener hanya jika audioRef sudah ada
    if (audioRef.current) {
      console.log("Audio initialized:", audioRef.current);
    }

    document.addEventListener("click", playAudio);
    document.addEventListener("touchstart", playAudio);

    return () => {
      document.removeEventListener("click", playAudio);
      document.removeEventListener("touchstart", playAudio);
    };
  }, []); // Tidak perlu menambahkan dependency pada audioRef.current karena hanya diinisialisasi sekali

  return (
    <html lang="en">
      <body>
        {/* Elemen audio dengan ref */}
        <audio ref={audioRef} loop>
          <source src="/bg-music.mp3" type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>

        {/* Render halaman sesuai dengan routing */}
        <main key={pathname}>{children}</main>
      </body>
    </html>
  );
}
