import { useState, useEffect } from "react";

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
};

export const useWindowDimension = () => {
  const [windowDimensions, setWindowDimension] = useState(
    getWindowDimensions()
  );
  const handleResize = () => {
    setWindowDimension(getWindowDimensions());
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resized", handleResize);
  }, []);
  return windowDimensions;
};
