import React from "react";

export default function loading() {
  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
      }}
    >
      <h1>Loading</h1>
    </div>
  );
}
