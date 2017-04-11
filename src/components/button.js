import React, { PropTypes } from 'react';


const Button = (props) => (
  <div>
    <button>{props.name}</button>
  </div>
);

Button.propTypes = {
  name: PropTypes.string,
};
export default Button;
