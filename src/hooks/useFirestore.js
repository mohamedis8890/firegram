import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

export default function useFirestore(collection) {
  const [docs, setDocs] = useState(null);

  useEffect(() => {
    const unsubscribe = projectFirestore
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        let documents = [];
        snapshot.forEach((document) => {
          documents.push({ ...document.data(), id: document.id });
        });
        setDocs(documents);
      });

    return () => unsubscribe();
  }, [collection]);

  return { docs };
}
