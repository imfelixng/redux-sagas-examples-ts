import * as React from 'react';

type Props = {
  myNumberCollection: number[];
}

export const MyNumberBrowserComponent = (props: Props) =>    
    <>
      <h5>Generated numbers collection:</h5>
      <ul>
        {props.myNumberCollection.map((currentNumber) => <li key={currentNumber}>{currentNumber}</li>)}
      </ul>
    </>
