import React from 'react';
import styled from 'styled-components';

type PropsType = {
  active?: boolean,
  disabled?: boolean,
  onClick?: () => void
}

const StyledWrapper = styled.div<PropsType>`
  border: 1px solid #cecece;
  border-radius: 4px;
  padding: 8px;
  width: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: .4s;

  &:hover {
    border: 1px solid blue;
    color: blue;
  }

  ${props => props.active && `
    border: 1px solid blue;
    color: blue;
  `}

  ${props => props.disabled && `
    cursor: not-allowed;
    border: 1px solid #cecece;
    color: #cecece;
    &:hover {
      border: 1px solid #cecece;
      color: #cecece;
    }
  `}
`;

const PageItem: React.FC<PropsType> = ({active, disabled, onClick, ...props}) => {

  const handleClick = () => {
    if (!disabled && onClick) onClick();
  }

  return (
    <StyledWrapper active={active} disabled={disabled} onClick={handleClick}>
      {props.children}
    </StyledWrapper>
  )
}

export default PageItem;