import React from 'react';
import { useDispatch } from 'react-redux';
import "./widget.css"
import crossIcon from "./assets/crossIcon.png"


const Widget = ({ widget, categoryId }) => {
  const dispatch = useDispatch();

  const removeWidget = () => {
    dispatch({
      type: 'REMOVE_WIDGET',
      payload: { categoryId, widgetId: widget.id }
    });
  };

  return (
    
    <div className='widget'>
    
      <h3>{widget.name}</h3>
      <p>{widget.text}</p>
          <img  src={crossIcon} alt="My Widget" className="widget-image" onClick={removeWidget}/>
    </div>
  ); 
}

export default Widget;
