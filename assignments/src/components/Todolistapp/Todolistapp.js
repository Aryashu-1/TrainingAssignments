import React, { useState } from "react";
import { useContext } from "react";
import { Context } from "../Context/Context";
import TaskCounter from "./TaskCounter/TaskCounter";
import Taskview from "./Taskview/Taskview";
import CompletedT from "./CompletedT/CompletedT";
function Todolistapp() {
  let [context, setContext] = useContext(Context);
  
  let [task, setTasK] = useState();
  function contextEdit() {
   
    setContext([...context,task]);
  }

  function change(event) {
    setTasK(event.target.value);
  }

  return (
    <div>
      <div className="text-center flex">
        <button className="bg-blue-700 rounded-lg m-4 text-white w-20">
          HOME
        </button>
        <h1 className="text-3xl font-semibold mx-80 p-6">TO-DO-LIST APP!!</h1>
      </div>
      <div className="flex my-4 text-center border-x-cyan-40">
        <div className="mx-40 rounded-xl border-cyan-400 border-2 my-auto">
          <input
            placeholder="Enter Task"
            className=" block w-80  shadow-sky-600 shadow-md border-gray-500 border-2 m-7  text-black p-4 rounded-sm"
            type=""
            onChange={change}
          ></input>
          <button
            className="bg-gray-800 m-6 rounded-full p-4 text-2xl text-white"
            onClick={contextEdit}
          >
            ADD TASK
          </button>
        </div>
        <TaskCounter />
      </div>
      <div className="flex w-full  bg-slate-400 ">
        <div className="m-10 w-full">
          {" "}
          <Taskview />
        </div>
        <div className="m-10 w-full">
          <CompletedT />
        </div>
      </div>
    </div>
  );
}

export default Todolistapp;
