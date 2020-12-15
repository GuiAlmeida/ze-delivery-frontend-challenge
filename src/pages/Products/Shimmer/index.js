import React from 'react';

import { Container } from './styles';

function Shimmer() {
  return (
    <Container>
      {[...Array(3)].map((e, i) => (
        <div key={i.toString()} className="row">
          {[...Array(4)].map((x, y) => (
            <div key={y.toString()} className="column" />
          ))}
        </div>
      ))}
    </Container>
  );
}

export default Shimmer;
