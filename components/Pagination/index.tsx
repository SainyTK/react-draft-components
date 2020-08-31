import React from 'react';
import styled from 'styled-components';
import PageItem from './PageItem';

type PropsType = {
  current?: number,
  pageSize: number,
  total: number,
  onChange?: (current: number, pageSize: number) => void
}

const StyledWrapper = styled.div`
  display: flex;
  .item {
    margin-right: 4px;
  }
`;

const Pagination: React.FC<PropsType> = ({current, total, pageSize, onChange}) => {

  return (
    <StyledWrapper>
    <div className='item'>
      <PageItem onClick={() => onChange(current - 1, pageSize)} disabled={current === 0}>
        &lt;
      </PageItem>
    </div>
      {
        Array.from(new Array(Math.ceil(total/pageSize))).map((_, i) => (
          <div key={i} className='item'>
            <PageItem 
              active={current === i}
              onClick={() => onChange(i, pageSize)}
            >
              {i+1}
            </PageItem>
          </div>
        ))
      }
      <div className='item'>
        <PageItem 
          onClick={() => onChange(current + 1, pageSize)}
          disabled={current === Math.floor(total/pageSize) - 1}
        >
        &gt;
        </PageItem>
      </div>
    </StyledWrapper>
  )
}

export default Pagination;