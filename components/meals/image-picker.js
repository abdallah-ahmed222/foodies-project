"use client";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";
export default function ImagePicker({ label, name }) {
  const inpRef = useRef();
  const [pickedImage, setPickedImage] = useState();

  function handleClick() {
    inpRef.current.click();
  }
  function handleImageChange(event) {
    console.log(event);

    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
    console.log(pickedImage);
  }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage ? (
            <p>No image picked yet</p>
          ) : (
            <Image src={pickedImage} alt="picked image" fill />
          )}
        </div>
        <input
          ref={inpRef}
          className={classes.input}
          id={name}
          name={name}
          type="file"
          required
          accept="image/png , image/jpeg , image/jpg"
          onChange={handleImageChange}
        />
        <button onClick={handleClick} type="button" className={classes.button}>
          Pick an image
        </button>
      </div>
    </div>
  );
}
