import React from 'react';

const Loader = () => {
  const loaderStyle = {
    width: "100%",
    height: "100vh",
    backgroundColor: "#000",
    display: "grid",
    placeItems: "center",
  };

  const centerStyle = {
    width: "15rem",
    height: "15rem",
    position: "relative",
  };

  const rotStyle = {
    width: "15rem",
    height: "15rem",
    position: "absolute",
    borderRight: "0.3rem solid red",
    borderRadius: "50%",
    animation: "rot 1s linear infinite",
  };

  return (
    <div style={loaderStyle}>
      <div style={centerStyle}>
        <div style={rotStyle}></div>
        <h1 style={{
          color: "#fff",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        }}>loading...</h1>
      </div>
      <style>
        {`
          @keyframes rot {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Loader;
