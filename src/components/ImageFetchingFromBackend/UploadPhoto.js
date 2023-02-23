import { useState } from "react";
import { db, storage } from "./firebaseConfig";
import classes from './UploadPhoto.module.css'

const UploadPhoto = () => {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleUpload = async () => {
    if (!image) {
      setError("Please select an image to upload.");
      return;
    }

    const storageRef = storage.ref();
    const fileRef = storageRef.child(image.name);
    const uploadTask = fileRef.put(image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        setError(error.message);
      },
      async () => {
        const downloadURL = await fileRef.getDownloadURL();
        const createdAt = new Date().toISOString();
        db.collection("photos").add({ downloadURL, createdAt });
        setImage(null);
        setProgress(0);
      }
    );
  };

  return (
    <div>
      <input className={classes.input} type="file" onChange={handleChange} />
      <button className={classes.btn} onClick={handleUpload}>Upload</button>
      {error && <div>{error}</div>}
      {progress > 0 && <div>{progress}% uploaded</div>}
    </div>
  );
};

export default UploadPhoto;
