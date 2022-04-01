import React from 'react';
import { Spinner, SpinnerProps } from 'react-bootstrap';
import { BsPrefixRefForwardingComponent } from 'react-bootstrap/esm/helpers';

const Loader: BsPrefixRefForwardingComponent<'div', SpinnerProps> = () => {
  return (
    <Spinner
      animation="border"
      role="status"
      style={{
        width: '100px',
        height: '100px',
        margin: 'auto',
        display: 'block'
      }}
    >
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
};

export default Loader;
