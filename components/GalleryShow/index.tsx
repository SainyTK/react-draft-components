import React from 'react';
import styled from 'styled-components';

type PropsType = {
  images: string[],
  visible?: boolean
}

const StyledWrapper = styled.div<PropsType>`
    display: none;
    opacity: 0;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.75);

    transition: opacity .4s ease-in-out;
    
    ${props => props.visible && `
      display: flex;
      opacity: 1;
    `}
    
`

const GalleryShow:React.FC<PropsType> = ({images, visible}) => {


  return (
    <StyledWrapper visible>
      Test
    </StyledWrapper>
  )

}

export default GalleryShow;