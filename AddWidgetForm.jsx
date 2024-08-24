import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import "./AddWidgetForm.css"

const AddWidgetForm = () => {
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');
  const [categoryId, setCategoryId] = useState('cspm-exec'); 
  const dispatch = useDispatch();

  const addWidget = (e) => {
    e.preventDefault();
    const newWidget = {
      id: `widget-${Date.now()}`,
      name: widgetName,
      text: widgetText
    };
    dispatch({
      type: 'ADD_WIDGET',
      payload: { categoryId, widget: newWidget }
    });
    setWidgetName('');
    setWidgetText('');
  };

  return (
    <form onSubmit={addWidget} className='add-widget-form'>
      <label>Widget Name:</label>
      <input
        type="text"
        value={widgetName}
        onChange={(e) => setWidgetName(e.target.value)}
        required
      />
      <label className='widget-text'>Widget Text:</label>
      <textarea
        value={widgetText}
        onChange={(e) => setWidgetText(e.target.value)}
        required
      ></textarea>
      <button type="submit">Add Widget</button>
    </form>
  );
};

export default AddWidgetForm;
