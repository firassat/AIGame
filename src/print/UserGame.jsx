import Actions from "../logic/Actions";

import MoveAction from "../logic/MoveAction";
import { useEffect, useState } from "react";
import State from "../logic/State";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function UserGame() {
  const [oldgame, setoldgame] = useState(null);
  const navigate = useNavigate();
  const game1 = useSelector((state) => state.game.value);
  const [game, setgame] = useState(game1);
  const [keyM, setkeyM] = useState([0, 0, 0, 0]);
  const [win, setwin] = useState(0);
  const [showallstate, setshowallstate] = useState(0);
  const action = new Actions();
  const print = action.print(game);
  const [allstate, setallstate] = useState([new State(game, null)]);
  const [alllpeint, setalllpeint] = useState();

  const printNextState = action.printNextState(game);
  let movekey = MoveAction();
  const checkmove = action.nextState(game);
  const [curentprint, setcurentprint] = useState();
  const [curentprintindex, setcurentprintindex] = useState(0);
  useEffect(() => {
    setwin(action.checkWin(game));
    setkeyM([movekey.up, movekey.down, movekey.left, movekey.rgiht]);
  }, [movekey]);

  useEffect(() => {
    if (
      (keyM[0] === 1 && checkmove.up[0]) ||
      (keyM[1] === 1 && checkmove.down[0]) ||
      (keyM[2] === 1 && checkmove.left[0]) ||
      (keyM[3] === 1 && checkmove.right[0])
    ) {
      setoldgame(game);
      setgame(action.move(game, keyM));
      setallstate([...allstate, new State(game, oldgame)]);
    }
  }, [keyM]);

  useEffect(() => {
    setalllpeint(action.printAll(allstate));
  }, [win]);

  if (showallstate && curentprintindex <= alllpeint.length) {
    setTimeout(() => {
      setcurentprintindex((p) => p + 1);
      setcurentprint(alllpeint[curentprintindex]);
    }, 100);
  }

  return (
    <div>
      {win && !showallstate ? (
        <div className="m-24 text-center">
          <h1 className="m-24 text-center">{win ? "لقد فزت" : ""}</h1>
          <button className="m-4" onClick={() => navigate("/chooseLogic")}>
            اعادة اللعب
          </button>
          <button className="m-4" onClick={() => setshowallstate(1)}>
            عرض الطريقة
          </button>
        </div>
      ) : (
        <div>
          {print}
          {printNextState}
        </div>
      )}
      {showallstate ? (
        <div>
          <h1 className="text-center">{alllpeint.length} State</h1>
          <div className="flex flex-wrap all">{curentprint}</div>
          <button
            className="m-4 my-auto"
            onClick={() => {
              setcurentprintindex(alllpeint.length);
            }}
          >
            اعادة العرض
          </button>
          <button className="m-4" onClick={() => navigate("/chooseLogic")}>
            اعادة اللعب
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default UserGame;
