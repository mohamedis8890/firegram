import React from "react";
import useStorage from "../hooks/useStorage";

export default function ProgressBar({ file, setFile }) {
  const { progress, url } = useStorage(file);
  console.log(progress, url);
  return <div className="progress-bar" style={{ width: progress + "%" }} />;
}
