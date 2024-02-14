import React from "react";
import { useNavigate } from "react-router-dom";
import Demo from "./demo.tsx";
function About({ state = { username: "" } }) {
  const route = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="shadow-lg w-[20%] h-[20%] bg-slate-100 flex flex-col justify-center items-center text-lg">
        <h1>Welcome : {state.username}</h1>
        <Demo route={route} />
      </div>
    </div>
  );
}

export default About;
