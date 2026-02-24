"use client";

import { motion } from "framer-motion";

export default function MagneticButton({ text }: { text: string }) {
  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-600 shadow-lg shadow-purple-500/20"
    >
      {text}
    </motion.button>
  );
}