"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import TextFooter from "@/components/TextFooter";
import PhotoPairGame from "../components/PhotoPairGame";
import ValentinesProposal from "@/components/ValentinesProposal";

const ANIM_DURATION = 2;

export default function Home() {
  const [showValentinesProposal, setShowValentinesProposal] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleShowProposal = () => {
    console.log("Transitioning to proposal...");
    setIsTransitioning(true);
    setTimeout(() => {
      setShowValentinesProposal(true);
      console.log("Proposal ditampilkan!");
    }, ANIM_DURATION * 1000);
  };

  return (
    <div
  className="flex items-center justify-center min-h-screen relative px-10"
  style={{ backgroundColor: "#e55451" }}>
      {!showValentinesProposal ? (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isTransitioning ? 0 : 1 }}
          transition={{ duration: ANIM_DURATION }}
        >
          <PhotoPairGame handleShowProposal={handleShowProposal} />
          <TextFooter />
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: ANIM_DURATION }}
        >
          <ValentinesProposal />
        </motion.div>
      )}
    </div>
  );
}
