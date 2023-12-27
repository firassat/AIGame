import { useState } from "react";
import GameLevel from "./GameLevel";
import { BsFillBoxFill, BsKey } from "react-icons/bs";
import { BsFillShieldLockFill } from "react-icons/bs";
import { toInteger } from "lodash";
import { useDispatch } from "react-redux";
import { setGame } from "./gameSlice";
import { useNavigate } from "react-router-dom";

function DisLevel() {
  const gamemodel = new GameLevel();
  const [board, setboard] = useState(0);
  const dispatch = useDispatch();
  const [key, setKey] = useState(Date.now());
  const [curentKey, setcurentKey] = useState();
  const [avalKey, setavalKey] = useState(0);
  const navigate = useNavigate();

  function disLevHandle(i, j) {
    const board2 = board;
    if (
      (avalKey || curentKey === 2 || curentKey === 0 || curentKey === 10) &&
      board2[i][j] === 1
    ) {
      board2[i][j] = curentKey;
      setboard(board2);
    } else if (board2[i][j] != 1) {
      if (board2[i][j] === 2) {
        setavalKey((a) => a - 1);
      }
      if (board2[i][j] > 2 && board2[i][j] !== 10) {
        setavalKey((a) => a + 1);
      }
      board2[i][j] = 1;
      setboard(board2);
    }
    if (board2[i][j] === 2) {
      setavalKey((a) => a + 1);
    }
    if (board2[i][j] > 2 && board2[i][j] !== 10) {
      setavalKey((a) => a - 1);
    }
    setKey(Date.now());
  }

  function listKeyHandel(e) {
    const key = toInteger(e.target.dataset.value);
    setcurentKey(key);
  }
  function boardSend() {
    dispatch(setGame(gamemodel.setlevel4(board)));
    navigate("/chooseLogic");
  }
  console.log(board);
  function rowcolHandle(e) {
    e.preventDefault();
    const newboard = [];
    for (let i = 0; i < e.target[0].value; i++) {
      const row = [];
      for (let j = 0; j < e.target[1].value; j++) {
        row.push(1);
      }
      newboard.push(row);
    }
    console.log(newboard);
    setboard(newboard);
  }
  return !board ? (
    <form action="" className="rowcolform" onSubmit={rowcolHandle}>
      <input type="text" placeholder="row" />
      <input type="text" placeholder="col" />
      <input type="submit" className="cursor-pointer" />
    </form>
  ) : (
    <div key={key}>
      <button onClick={boardSend} className="fixed top-1/2 right-20">
        موافق
      </button>
      <div className="listKey">
        <div className="board">
          <div
            className={`cell ava ${
              !avalKey ? "none" : curentKey === 6 ? "active" : ""
            } relative`}
          >
            <BsKey />
            <div
              className="absolute top-0 left-0 w-full h-full"
              onClick={listKeyHandel}
              data-value={6}
            ></div>
          </div>
          <div
            className={`cell up ${
              !avalKey ? "none" : curentKey === 3 ? "active" : ""
            } relative`}
            onClick={listKeyHandel}
          >
            <BsKey />
            <div
              className="absolute top-0 left-0 w-full h-full"
              onClick={listKeyHandel}
              data-value={3}
            ></div>
          </div>
          <div
            className={`cell down ${
              !avalKey ? "none" : curentKey === 4 ? "active" : ""
            } relative`}
            onClick={listKeyHandel}
          >
            <BsKey />
            <div
              className="absolute top-0 left-0 w-full h-full"
              onClick={listKeyHandel}
              data-value={4}
            ></div>
          </div>
          <div
            className={`cell left ${
              !avalKey ? "none" : curentKey === 5 ? "active" : ""
            } relative`}
            onClick={listKeyHandel}
          >
            <BsKey />
            <div
              className="absolute top-0 left-0 w-full h-full"
              onClick={listKeyHandel}
              data-value={5}
            ></div>
          </div>
          <div
            className={`cell dis ${curentKey === 0 ? "active" : ""}`}
            data-value={0}
            onClick={listKeyHandel}
          ></div>
          <div className={`cell  ${curentKey === 2 ? "active" : ""} relative`}>
            <BsFillShieldLockFill />
            <div
              className="absolute top-0 left-0 w-full h-full"
              onClick={listKeyHandel}
              data-value={2}
            ></div>
          </div>
          <div
            className={`cell box ${curentKey === 10 ? "active" : ""} relative`}
          >
            <BsFillBoxFill />
            <div
              className="absolute top-0 left-0 w-full h-full"
              onClick={listKeyHandel}
              data-value={10}
            ></div>
          </div>
        </div>
      </div>
      <div className="board">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, cellIndex) => (
              <div
                onClick={() => disLevHandle(rowIndex, cellIndex)}
                key={cellIndex}
                className={`cell ${
                  cell === 1
                    ? "ava"
                    : cell === 3
                    ? "up"
                    : cell === 4
                    ? "down"
                    : cell === 5
                    ? "left"
                    : cell === 6
                    ? "right"
                    : cell === 0
                    ? "dis"
                    : cell === 2
                    ? "lock"
                    : cell === 10
                    ? "box"
                    : ""
                } cursor-pointer `}
              >
                {cell > 2 && cell !== 10 ? (
                  <BsKey />
                ) : cell === 2 ? (
                  <BsFillShieldLockFill />
                ) : cell === 10 ? (
                  <BsFillBoxFill />
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisLevel;
