import { useState, useEffect } from "react";
import { projectStorage } from "../firebase/config";

export default function useStorage(file) {
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const storageRef = projectStorage.ref(file.name);

    storageRef.put(file).on(
      "state_changed",
      (snapshot) => {
        let percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
}
