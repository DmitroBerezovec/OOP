// import { useState } from "react";
import "./App.css";
import "./index.css";
import { useState } from "react";
// import PropTypes from "prop-types";
// import StartingScreen from "./components/StartingScreen/StartingScreen";
import WorkSpace from "./components/WorkSpace/WorkSpace";

function App() {
  const [switchArea, setswitchArea] = useState(true);
  const switchButtonClick = () => {
    setswitchArea(true);
  };
  return (
    <div className="flex flex-col justify-between h-screen text-center m-0 p-0">
      {switchArea ? (
        <div className="flex flex-col justify-between h-screen text-center m-0 p-0">
          <div className="flex h-[200px] justify-center items-center">
            <h1>tralallelo</h1>
          </div>

          <button onClick={() => setswitchArea(false)}>
            create new project
          </button>
          <div></div>
        </div>
      ) : (
        <WorkSpace switchButtonClick={switchButtonClick} />
      )}
    </div>
  );
}

export default App;
