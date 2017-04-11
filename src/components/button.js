import React, { PropTypes } from 'react';


const Button = (props) => (
  <div>
    <button onClick={props.clicked}>{props.name}</button>
  </div>
);

Button.propTypes = {
  name: PropTypes.string,
  clicked: PropTypes.func,
};

export default Button;
