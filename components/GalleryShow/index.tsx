import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

type PropsType = {
  images: string[],
  visible?: boolean,
  current?: number,
  onClose?: () => void,
  onChange?: (page: number) => void
}

const StyledWrapper = styled.div<PropsType>`
    display: none;
    opacity: 0;

    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,.75);

    transition: opacity .4s ease-in-out;
    
    ${props => props.visible && `
      display: flex;
      opacity: 1;
      align-items: center;
      justify-content: center;
    `}

    .close-btn {
      cursor: pointer;
      position: absolute;
      top: 20px;
      right: 20px;
      color: white;
    }

    .indicator {
      position: absolute;
      bottom: 10px;
      left: 0;
      right: 0;
      text-align: center;
      color: white;
    }

    .img {
      width: 100vw;
      position: relative;
      display: flex;
      align-items: center;

      img {
        width: 100%;
        max-height: 80vh;
      }

      .btn-nav {
        position: absolute;
        background-color: rgba(255,255,255,.3);
        height: 40px;
        padding: 8px;
        display: flex;
        align-items: center;
        cursor: pointer;
        transition: .4s ease-in-out;
        color: #efefef;
        opacity: .5;
      }

      .btn-nav:hover {
        opacity: 1;
      }

      .prev {
        left: 0;
      }

      .next {
        right: 0;
      }


      
    }
    
`

const GalleryShow:React.FC<PropsType> = ({images, visible, onClose, onChange, ...props}) => {

  const [showing, setShowing] = useState(visible);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (visible !== null && props.current !== undefined) {
      setShowing(visible);
    }
  }, [visible]);

  useEffect(() => {
    if (props.current !== null && props.current !== undefined) {
      setCurrent(props.current);
    }
  }, [props.current]);

  const handleClose = () => {
    if (onClose) onClose();
    else setShowing(false);
  }

  const handleChange = (page) => {
    if (onChange) onChange(page);
    else setCurrent(page);
  }


  return (
    <StyledWrapper visible={showing}>
      <div className='close-btn' onClick={handleClose}>X</div>
      <div className='img'>
      {
        current > 0 && (
          <div className='btn-nav prev' onClick={() => handleChange(current-1)}>&lt;
          </div>
        )
      }
        
        <img src={images[current]}/>

        {
        current < images.length - 1&& (
          <div className='btn-nav next' onClick={() => handleChange(current + 1)}>&gt;
          </div>
        )
      }
        
      </div>
      <div className='indicator'>{current + 1}/{images.length}</div>
    </StyledWrapper>
  )

}

export default GalleryShow;