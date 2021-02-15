import React from 'react';
import Option from './Option';
import DeleteIcon from "@material-ui/icons/Delete";

const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Possíveis Destinos</h3>
      <button
        className="button button--link"
        onClick={props.handleDeleteOptions}
      >
        <DeleteIcon fontSize='large'/>
    </button>
    </div>

    {props.options.length === 0 && <p className="widget__message">Adicione algumas opções e deixe que o acaso escolha por nós! :)</p>}
    {
      props.options.map((option, index) => (
        <Option
          key={option}
          optionText={option}
          count={index + 1}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))
    }
  </div>
);

export default Options;
