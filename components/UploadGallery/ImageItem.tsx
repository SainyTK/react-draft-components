import React from 'react';
import styled from 'styled-components';

type PropsType = {
    value?: string,
    onView?: () => void,
    onDelete?: () => void
}

const StyledWrapper = styled.div`
    position: relative;
    display: inline-block;
    border: 1px dashed #cecece;
    width: 100px;
    height: 100px;
    cursor: pointer;
    transition: all .4s ease-in-out;
    padding: 10px;

    img {
      width: 100%;
      height: 100%;
    }

    .actions {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      
      display: flex;
      align-items:center;
      justify-content: center;
      background-color: rgba(0,0,0,.5);
      padding: 10px;
      margin: 10px;
      opacity: 0;
      transition: .2s ease-in-out;
      
      * {
        color: white;
      }
    }

    &:hover {
        border: 1px dashed gold;

        .actions {
          opacity: 1;
        }
    }
    
    .seperator {
      margin: 0 4px;
    }

    .action {
      transition: .4s ease-in-out;
    }

    .action:hover {
      color: gold;
    }
`

const ImageItem: React.FC<PropsType> = ({ value, onView, onDelete }) => {
    return (
        <StyledWrapper>
          <img src={value}/>
          <div className={`actions`}>
            <div className='action' onClick={onView}>View</div>
            <div className='seperator'> | </div>
            <div className='action' onClick={onDelete}>Delete</div>
          </div>
        </StyledWrapper>
    )
}

export default ImageItem;
