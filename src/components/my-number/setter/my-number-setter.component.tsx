import * as React from 'react';

type Props = {
  onRequestNewNumber: () => void;
  onCancelRequest: () => void;
}

export const MyNumberSetterComponent = (props : Props) =>
  <>
    <button onClick={props.onRequestNewNumber}>Request new number</button>
    <button onClick={props.onCancelRequest}>Cancel number request</button> 
  </>