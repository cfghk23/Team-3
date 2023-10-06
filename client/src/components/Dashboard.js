import React, { useState } from "react";
import { Link } from "react-router-dom";

const GraphA = () => <div>Graph A</div>;
const GraphB = () => <div>Graph B</div>;
const GraphC = () => <div>Graph C</div>;
const GraphD = () => <div>Graph D</div>;

function Dashboard() {
  const buttonContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
    borderRadius: "10px",
    marginTop: "20px",
  };

  const buttonStyle = {
    backgroundColor: "#F5A623",
    color: "white",
    border: "none",
    outline: "none",
    padding: "10px 20px",
    margin: "5px",
    cursor: "pointer",
    fontSize: "16px",
    borderRadius: "20px",
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
    position: "relative",
    top: "-20px",
    right: "0",
    marginBottom: "-20px",
  };

  const sidebarOptions = [
    { title: "FQ Rising Star", subSidebar: [] },
    { title: "FQ Explorer", subSidebar: [] },
    { title: "FQ Challenger", subSidebar: [] },
    { title: "FQ Leader", subSidebar: [] },
    { title: "FQ Master", subSidebar: [] },
    { title: "FQ Uni", subSidebar: [] },
    { title: "Good Life", subSidebar: [] },
  ];

  const sidebarStyle = {
    width: "200px",
    background: "#F5F5F5",
    padding: "10px",
    borderRadius: "10px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    marginLeft: "20px",
  };

  const subSidebarStyle = {
    paddingLeft: "20px",
  };

  const [activeSidebarOption, setActiveSidebarOption] = useState(null);

  const handleSidebarOptionClick = (index) => {
    setActiveSidebarOption(index);
  };

  const handleSidebarClick = () => {
    setActiveSidebarOption(null);
  };

  return (
    <div style={{ marginLeft: "50px" }}>
      <div className="dashboard">
        <div style={buttonContainerStyle}>
          <div style={profilePictureStyle}></div>
          <div style={buttonGroupStyle}>
            <button style={buttonStyle}>
              <a href="/dashboard">Courses Analytics</a>
            </button>
            <button style={buttonStyle}>
              <a href="/students">Students Performance</a>
            </button>
            <button style={buttonStyle}>
              <a href="/addmodule">Add Modules</a>
            </button>
          </div>
        </div>
        {/* Sidebar */}
        <div className="dashboard">
          <div style={{ display: "flex" }}>
            {/* Sidebar */}
            <div style={sidebarStyle}>
              <h4
                onClick={handleSidebarClick}
                style={{
                  cursor: "pointer",
                  fontWeight: activeSidebarOption === null ? "bold" : "normal",
                }}
              >
                General Analytics
              </h4>
              {sidebarOptions.map((option, index) => (
                <div key={index}>
                  <h4
                    onClick={() => handleSidebarOptionClick(index)}
                    style={{
                      cursor: "pointer",
                      fontWeight:
                        activeSidebarOption === index ? "bold" : "normal",
                    }}
                  >
                    {option.title}
                  </h4>
                  {activeSidebarOption === index && (
                    <ul style={subSidebarStyle}>
                      {option.subSidebar.map((subOption, subIndex) => (
                        <li key={subIndex}>
                          <Link to={`/sidebar/${index + 1}/${subIndex + 1}`}>
                            {subOption}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
            {/* Analytics */}
            <div style={{ marginLeft: "30px" }}>
              {activeSidebarOption !== null ? (
                <>
                  <h3 style={{ fontSize: "40px" }}>Module Analytics</h3>
                  <GraphC />
                  <GraphD />
                </>
              ) : (
                <>
                  <h3 style={{ fontSize: "40px" }}>General Analytics</h3>
                  <GraphA />
                  <GraphB />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
