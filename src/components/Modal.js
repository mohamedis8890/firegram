import React from "react";
import { motion } from "framer-motion";

export default function Modal({ selectedImg, setSelectedImg }) {
  return (
    <motion.div
      className="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={(e) =>
        e.target.classList.contains("backdrop") && setSelectedImg(null)
      }
    >
      <motion.img
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        src={selectedImg}
        alt="enlarged pic"
      />
    </motion.div>
  );
}
