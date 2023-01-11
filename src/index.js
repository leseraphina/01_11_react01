import React from "react";
import ReactDOM from "react-dom/client";

// 컴포넌트
import ReactBook from "./ReackBook";

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <React.StrictMode>
    <ReactBook 
      title="react"
      price={30000}
      room="A강의실"
    />
  </React.StrictMode>
)

