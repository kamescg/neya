import React from 'react';
import Context from './Context';

const withContextInjected = ({ children }) => (
  <Context.Consumer>
    {fortmatic =>
      children && Array.isArray(children)
        ? children.map(child => React.cloneElement(child, { fortmatic }))
        : React.cloneElement(children, { fortmatic })
    }
  </Context.Consumer>
);

export default withContextInjected;
