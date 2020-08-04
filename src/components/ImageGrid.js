import React from "react";
import { motion } from "framer-motion";
import useFirestore from "../hooks/useFirestore";

export default function ImageGrid({ setSelectedImg }) {
  const { docs } = useFirestore("images");
  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            className="img-wrap"
            layout
            whileHover={{ opacity: 1 }}
            key={doc.id}
            onClick={() => setSelectedImg(doc.url)}
          >
            <motion.img
              src={doc.url}
              alt="uploaded"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
}
