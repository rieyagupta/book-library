// src/components/Filter.
import React, { useState }  from "react";
import "./Filter.css"

const Filter = ({ setFilter }) =>{
  const [activeTab, setActiveTab] = useState("all")

  const handleTabClick = (filter) =>{
    setFilter(filter);
    setActiveTab(filter);
  }

  return (
    <ul className="lib__tabs">
      <li className={`lib__tab ${activeTab === "all"? 'active': ''}`} onClick={() => handleTabClick("all")}>All</li>
      <li className={`lib__tab ${activeTab === "read"? 'active' : ''}`} onClick={() => handleTabClick("read")}>Read</li>
      <li className={`lib__tab ${activeTab === "unread"? 'active': ''}`} onClick={() => handleTabClick("unread")}>Unread</li>
      <li className={`lib__tab ${activeTab === "bookmarked"? 'active': ''}`} onClick={() => handleTabClick("bookmarked")}>Bookmarked</li>
    </ul>
  );

} 
  
  export default Filter;
  