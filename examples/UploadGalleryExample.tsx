import React, { Component, useState } from "react";
import { render } from "react-dom";
import UploadGallery from '../components/UploadGallery';

const delay = (duration) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration)
  })
}

const UploadGalleryExample = () => {

  const [images, setImages] = useState([
    'https://image.makewebeasy.net/makeweb/0/zTQjaPokP/DefaultData/5.png'
  ]);
  const [uploadProgress, setUploadProgress] = useState(0);

  const fakeUpload = async (file) => {
    const iv = setInterval(() => {setUploadProgress(p => p + 10)}, 200);
    await delay(100);
    clearInterval(iv);
    setUploadProgress(0);
    return URL.createObjectURL(file);
  }

  return (
      <UploadGallery
        value={images}
        onChange={v => setImages(v)}
        onUpload={fakeUpload}
        uploadProgress={uploadProgress}
      />
  )
};

export default UploadGalleryExample;
