import React from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Category from './Category.jsx';
import AddWidgetForm from './AddWidgetForm.jsx';
import search from "./assets/search.png"
import "./Dashboard.css"


const handleSearchChange = (event) => {
  setSearchTerm(event.target.value);
}


const Dashboard = () => {
  const categories = useSelector(state => state.categories);
    
  return (
     <> 
<div className='dashboard'>
      
      <h1>Dashboard</h1>
      <div className='searchBar'>
        <input
            type="text"
            placeholder="Search widgets..."
            // value= {searchTerm}
            onChange={GetInput}
            className="search-bar"
          />
        <span><img src={search}/></span>
      </div>
      {categories.map(category => (
        <Category key={category.id} category={category} />
      ))}
      <AddWidgetForm />
    </div>
    </> 
  );
};

export default Dashboard;















