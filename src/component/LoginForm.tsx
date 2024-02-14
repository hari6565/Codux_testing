import React from "react";
import { CheckUser } from "../lib/CheckUser";
import { useNavigate } from "react-router-dom";
interface User {
  state: {
    username: string;
    password: string;
  };
  setState: (e: any) => void;
}

const LoginForm = ({ state, setState }: User) => {
  const route = useNavigate();
  const handleChange = (e: any) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    CheckUser(state).then((res) => {
      if (res) {
        res === "admin"
          ? route("/about")
          : res === "user"
          ? alert(" you are user")
          : alert("failed");
      } else {
        alert("no user found");
      }
    });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-white ">
      <div className=" bg-slate-300 p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              name="username"
              value={state.username}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              name="password"
              value={state.password}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md w-full"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
