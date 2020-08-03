import { useState, useEffect } from "react";
import {
  projectStorage,
  projectFirestore,
  timestamp,
} from "../firebase/config";

export default function useStorage(file) {
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection("images");

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
        let createdAt = timestamp();
        collectionRef.add({ url, createdAt });
      }
    );
  }, [file]);

  return { progress, url, error };
}
