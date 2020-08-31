import React, { useState } from 'react';
import styled from 'styled-components';
import Pagination from '../components/Pagination';

const StyledWrapper = styled.div`

`;

const PAGE_SIZE = 20;

const PaginationExample: React.FC = () => {

  const [current, setCurrent] = useState(0);

  const data = Array.from(new Array(100)).map((_, d) => d);

  return (
    <StyledWrapper>
      <p>Data length : {data.length}</p>
      {
        data.slice(current * PAGE_SIZE, (current + 1) * PAGE_SIZE ).map(d => (
          <p key={d}>{d}</p>
        ))
      }
      <Pagination 
        current={current} 
        pageSize={PAGE_SIZE} 
        total={data.length}
        onChange={(current, pageSize) => setCurrent(current)}
      />
    </StyledWrapper>
  )
}

export default PaginationExample;