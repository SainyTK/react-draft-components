import React, { Component, useState } from "react";
import { render } from "react-dom";
import UploadGallery from './components/UploadGallery';
import "./style.css";

const delay = (duration) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration)
  })
}

const App = () => {

  const [images, setImages] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);

  const fakeUpload = async (file) => {
    const iv = setInterval(() => {setUploadProgress(p => p + 10)}, 200);
    await delay(2000);
    clearInterval(iv);
    setUploadProgress(0);
    return URL.createObjectURL(file);
  }

  return (
    <div>
      <UploadGallery
        value={images}
        onChange={v => setImages(v)}
        onUpload={fakeUpload}
        uploadProgress={uploadProgress}
      />
    </div>
  )
};

render(<App />, document.getElementById("root"));
