import React from 'react';
import Widget from './Widget.jsx';
import "./category.css";

const Category = ({ category }) => {
  return (
    <div className='div-container'>
      <h2>{category.name = []}</h2>
      {category.widgets.length === 0 ? (
        <p>No widgets available. Add a widget using the form below.</p> ) :
         (
        category.widgets.map(widget => (
          <Widget key={widget.id} widget={widget} categoryId={category.id}  />
        ))
      )}
    </div>
  );
};

export default Category;
