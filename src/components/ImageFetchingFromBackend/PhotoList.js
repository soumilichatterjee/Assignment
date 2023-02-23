import { useState, useEffect } from "react";
import { db } from "./firebaseConfig";
import classes from  './PhotoList.module.css'

const PhotoList = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const unsubscribe = db
      .collection("photos")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        const updatedPhotos = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPhotos(updatedPhotos);
      });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div >
      {photos.map((photo) => (
        <img className={classes.img} key={photo.id} src={photo.downloadURL} alt={photo.id} />
      ))}
    </div>
  );
};

export default PhotoList;
