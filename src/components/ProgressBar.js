import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";

export default function ProgressBar({ file, setFile }) {
  const { progress, url } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);
  return <div className="progress-bar" style={{ width: progress + "%" }} />;
}
