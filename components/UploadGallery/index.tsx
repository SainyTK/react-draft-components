import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ImageItem from "./ImageItem";
import ImageUpload from "./ImageUpload";
import GalleryShow from '../GalleryShow';
import useVisibility from '../../hooks/useVisibility';

type PropsType = {
  value?: string[],
  onChange?: (value: string[]) => void,
  onUpload?: (file) => Promise<string>,
  uploadProgress?: number,
  limit?: number
};

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  .img-item {
    margin: 0 4px 4px 0;
  }
`;

const UploadGallery: React.FC<PropsType> = ({ value, onChange, onUpload, limit, uploadProgress }) => {

  const [images, setImages] = useState(value || []);
  const [progress, setProgress] = useState(uploadProgress);

  const galleryShow = useVisibility(true);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (value) {
      setImages(value);
    }
  }, [value]);

  useEffect(() => {
    if (progress >= 0) {
      setProgress(uploadProgress)
    }
  }, [uploadProgress]);

  const handleUpload = async ({ file, url }) => {
    let imgUrl = onUpload ? await onUpload(file) : url;
    const newState = [...images, imgUrl];
    if (onChange) onChange(newState);
    else setImages(newState);
  };

  const handleDelete = (index) => {
    const newState = images.filter((_, i) => i !== index);
    if (onChange) onChange(newState);
    else setImages(newState)
  }

  const handleView = (index) => {
    setCurrent(index);
    galleryShow.show();
  }

  return (
    <StyledWrapper>
      {images.map((img, index) => (
        <div className="img-item" key={index}>
          <ImageItem 
            value={img} 
            onDelete={() => handleDelete(index)}
            onView={() => handleView(index)}
            />
        </div>
      ))}
      { (!limit || limit > images.length) && (
        <ImageUpload onChange={handleUpload} progress={progress}/>
      )}
      <GalleryShow 
        images={images} 
        visible={galleryShow.visible}
        current={current}
        onClose={galleryShow.hide}
      />
    </StyledWrapper>
  );
};

export default UploadGallery;
