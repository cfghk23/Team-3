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
  const profilePictureStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "gray",
    top: "-20px",
    right: "0",
  };

  return (
    <div className="dashboard">
      {/* Create the button group */}
      <div style={profilePictureStyle} />
      <div style={buttonGroupStyle}>
        <button style={buttonStyle}>Courses Analytics</button>
        <button style={buttonStyle}>Students Performance</button>
        <button style={buttonStyle}>Add modules</button>
      </div>

      {/* Create the profile picture */}
    </div>
  );
}

export default Dashboard;
