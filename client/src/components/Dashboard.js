import React from "react";

function Dashboard() {
  const buttonStyle = {
    backgroundColor: "white",
    color: "black",
    border: "none",
    outline: "none",
    padding: "10px 20px",
    margin: "5px",
    cursor: "pointer",
    fontSize: "16px",
  };

  const buttonGroupStyle = {
    display: "flex",
    justifyContent: "center",
  };

  return (
    <div className="dashboard">
      {/* Create the button group */}
      <div style={buttonGroupStyle}>
        <button style={buttonStyle}>Button 1</button>
        <button style={buttonStyle}>Button 2</button>
        <button style={buttonStyle}>Button 3</button>
      </div>

      {/* Create the profile picture */}
      <img src="path/to/profile/picture.jpg" className="profile-picture" />
    </div>
  );
}

export default Dashboard;
