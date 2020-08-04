import React, { useEffect } from "react";
import { motion } from "framer-motion";

import useStorage from "../hooks/useStorage";

export default function ProgressBar({ file, setFile }) {
  const { progress, url } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);
  return (
    <motion.div
      className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
    />
  );
}
