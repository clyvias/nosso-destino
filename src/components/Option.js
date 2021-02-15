import React from 'react';
import DeleteIcon from "@material-ui/icons/Delete";

const Option = (props) => (
  <div className="option">
    <p className="option__text">{props.count}. {props.optionText}</p>
    <button
      className="button button--link"
      onClick={(e) => {
        props.handleDeleteOption(props.optionText);
      }}
    >
      <DeleteIcon fontSize='large'/>
      </button>
  </div>
);

export default Option;
