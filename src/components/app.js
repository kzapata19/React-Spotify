import React from 'react';
import Button from './button';

const App = () => (
  <div>
    <Button name={'Click'} clicked={() => console.log('clicked')}/>
    <Button name={'Submit'} />
  </div>
);

export default App;
