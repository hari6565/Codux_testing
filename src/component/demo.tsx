import React from "react";

const Demo = ({ route }) => {
  return (
    <div className="bg-gray-300 rounded-lg p-2">
      <button onClick={() => route("/")}>Back</button>
    </div>
  );
};

export default Demo;
