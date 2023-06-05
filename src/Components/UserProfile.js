import React from "react";
import {useState , useEffect} from "react"
import Nav from "react-bootstrap/Nav";

const UserProfile = () => {
const [activeTab , setActiveTab ] = useState(1)

const handleClickTabs = (index) => {
    setActiveTab(index)
}


  return (
    <div className="account">
      <h1>Account</h1>
      <div className="account_tabs">
      <button className= {activeTab === 1 ? "active" : "notactive"} onClick={() => handleClickTabs(1)}>Profile</button>
      <button className= {activeTab === 2 ? "active" : ""}   onClick={() => handleClickTabs(2)}>Address</button>
      {activeTab === 1 ? <p> Animesh </p> : <p>Pinky</p>}
      </div>
      <div>
       
      </div>
    </div>
  );
};

export default UserProfile;
