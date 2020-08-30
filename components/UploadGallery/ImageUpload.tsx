import React, { useState } from "react";
import styled from "styled-components";

type PropsType = {
  value?: string,
  onChange: ({ file, url }) => void,
  progress?: number
};

const StyledWrapper = styled.div`
  position: relative;
  display: inline-block;
  border: 1px dashed #cecece;
  width: 100px;
  height: 100px;
  padding: 10px;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  background-color: #aaa;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  .action {
    text-align: center;
    cursor: pointer;


    * {
      color: white;
    }
  }

`;

const ImageUpload: React.FC<PropsType> = ({ onChange, progress }) => {
  const [loading, setLoading] = useState(false);

  const handleChange = async e => {
    setLoading(true);
    const file = e.target.files[0];

    try {
      if (file) {
        onChange && (await onChange({ file, url: URL.createObjectURL(file) }));
      }
    } catch (e) {
      console.error(e);
    }

    setLoading(false);
  };

  const renderAction = () => {
    if (loading) {
      return (
        <div>
          <div>Loading...</div>
          <div>{progress}%</div>
        </div>
      )
    }
    return (
      <React.Fragment>
        <div style={{ marginBottom: 4 }}>+</div>
        <div>Upload</div>
      </React.Fragment>
    );
  };

  return (
    <StyledWrapper>
      <label>
        <div className="action">{renderAction()}</div>
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleChange}
        />
      </label>
    </StyledWrapper>
  );
};

export default ImageUpload;
