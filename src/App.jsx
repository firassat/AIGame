import { createContext } from "react";

import GameLevel from "./GameLevel.js";
import "./print/UserGame.jsx";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setGame } from "./gameSlice.js";

export const GameContext = createContext(null);

function App() {
  const navigate = useNavigate();
  const gamemodel = new GameLevel();
  const dispatch = useDispatch();

  const choseHandle = (e) => {
    if (e.target.value == 1) dispatch(setGame(gamemodel.level1()));
    if (e.target.value == 2) dispatch(setGame(gamemodel.level2()));
    if (e.target.value == 3) dispatch(setGame(gamemodel.level3()));
    if (e.target.value == 4) dispatch(setGame(gamemodel.level4()));
    console.log(e.target.value == 1);
    navigate("/chooseLogic");
  };

  return (
    <>
      <div className="text-center p-40 flex flex-col gap-10 justify-center items-center">
        <h1 className="p-5">اختر مرحلة</h1>
        <button className="w-1/2" onClick={choseHandle} value={1}>
          الاولى
        </button>
        <button className="w-1/2" onClick={choseHandle} value={2}>
          الثانية
        </button>
        <button className="w-1/2" onClick={choseHandle} value={3}>
          الثالثة
        </button>
        <button className="w-1/2" onClick={choseHandle} value={4}>
          الرابعة
        </button>
        <Link to={"dis"} className="w-1/2 button">
          تصميم مرحلة
        </Link>
      </div>
    </>
  );
}

export default App;
