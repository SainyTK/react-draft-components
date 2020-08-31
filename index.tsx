import React, { Component, useState } from "react";
import { render } from "react-dom";
import "./style.css";
import PaginationExample from './examples/PaginationExample';
import UploadGalleryExample from './examples/UploadGalleryExample';

const delay = (duration) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration)
  })
}

const App = () => {

  return (
    <div>
      <h2>Upload Gallery</h2>
      <UploadGalleryExample/>
      <h2>Pagination</h2>
      <PaginationExample/>
    </div>
  )
};

render(<App />, document.getElementById("root"));
