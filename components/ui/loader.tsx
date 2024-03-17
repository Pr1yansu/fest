"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { X } from "lucide-react";

const LoadingAnimation = () => {
  const [showLoading, setShowLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
      toast(
        (t) => (
          <span className="flex items-center description">
            Website is under development
            <button aria-label="dismiss" onClick={() => toast.dismiss(t.id)}>
              <X
                size={20}
                className="ms-2 bg-red-500 text-white rounded-full"
              />
            </button>
          </span>
        ),
        {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        }
      );
    }, 3000);

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
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
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
