import React, { useState } from "react";

function App() {
  const [task, settask] = useState("");
  const [work, setwork] = useState([]);

  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log(task);
    settask("");
    setwork([...work, { task }]);
    console.log(work);
  };

  const DeleteHandler = (i) => {
    let copytask = [...work];
    copytask.splice(i, 1);
    setwork(copytask);
  };

  let renderTask = <h2 className="font-medium p-2"> No Task Available</h2>;
  if (work.length > 0) {
    renderTask = work.map((val, i) => {
      return (
        <li>
          <div>
            <h3>{val.task}</h3>
          </div>
          <button
            onClick={() => {
              DeleteHandler(i);
            }}
          >
            DELETE
          </button>
        </li>
      );
    });
  }
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-slate-400 ">
        <div className="bg-white rounded-lg shadow-xl m-10 p-10">
          <h1 className="flex items-center justify-center p-2 text-lg font-bold italic underline">
            TODO LISTS
          </h1>
          <form onSubmit={SubmitHandler} className=" flex flex-col space-y-2">
            <input
              type="text"
              placeholder="Enter task here"
              value={task}
              onChange={(e) => {
                settask(e.target.value);
              }}
              className="p-2 border border-slate-200"
            />
            <button className="border-none bg-green-400 font-medium rounded-md py-2 hover:bg-blue-700 transition duration-200">
              ADD TASK
            </button>
          </form>

          <hr />

          <div>
            <ul className="space-y-2">{renderTask}</ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
