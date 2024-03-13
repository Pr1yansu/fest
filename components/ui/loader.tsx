"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const LoadingAnimation = () => {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showLoading && (
        <motion.div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#000",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9999,
          }}
          initial={{ x: 0 }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.5 }}
        >
          {[...Array(10)].map((_, index) => (
            <motion.div
              key={index}
              style={{
                width: "5px",
                height: "100px",
                background: "linear-gradient(45deg, cyan, #fff)",
                margin: "10px",
                borderRadius: "20px",
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingAnimation;
