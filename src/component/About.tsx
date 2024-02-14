import React from "react";

function About({ state }) {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="shadow-lg w-[20%] h-[20%] bg-slate-100 flex justify-center items-center text-lg">
        <h1>Welcome : {state.username}</h1>
      </div>
    </div>
  );
}

export default About;
