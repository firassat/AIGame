import Actions from "../logic/Actions";
import { useEffect, useState } from "react";
import BFS from "../algorethm/BFS";
import DFS from "../algorethm/DFS";
import UFC from "../algorethm/UFC";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Hur from "../algorethm/Hur";
import AStar from "../algorethm/AStar";

function AlgoGame() {
  const navigate = useNavigate();

  const game = useSelector((state) => state.game.value);
  let { state } = useLocation();
  const fun = state.fun;
  const [win, setwin] = useState(0);
  const [showallstate, setshowallstate] = useState(0);
  const [cost, setcost] = useState(0);
  const [allstate, setallstate] = useState(0);
  const action = new Actions();
  const [alllpeint, setalllpeint] = useState();
  const [curentprint, setcurentprint] = useState();
  const [curentprintindex, setcurentprintindex] = useState(0);

  const bb = () => {
    const bfs = new BFS();
    const solv = bfs.bfs(game);
    setalllpeint(action.printAll(solv.fullPath));
    if (solv.fullPath.length) setwin(1);
    else setwin(0);
    setallstate(solv.state);
    setcost(solv.cost);
  };
  const dd = () => {
    const dfs = new DFS();
    const solv = dfs.dfs(game);
    setalllpeint(action.printAll(solv.fullPath));
    if (solv.fullPath.length) setwin(1);
    else setwin(0);
    setallstate(solv.state);
    setcost(solv.cost);
  };
  const uu = () => {
    const ufc = new UFC();
    const solv = ufc.ufc(game);
    setalllpeint(action.printAll(solv.fullPath));
    if (solv.fullPath.length) setwin(1);
    else setwin(0);
    setcost(solv.cost);
  };
  const hh = () => {
    const hur = new Hur();
    const solv = hur.hur(game);
    setalllpeint(action.printAll(solv.fullPath));
    if (solv.fullPath.length) setwin(1);
    else setwin(0);
    setallstate(solv.state);
    setcost(solv.cost);
  };
  const Astar = () => {
    const astar = new AStar();
    const solv = astar.astar(game);
    setalllpeint(action.printAll(solv.fullPath));
    if (solv.fullPath.length) setwin(1);
    else setwin(0);
    setallstate(solv.state);
    setcost(solv.cost);
  };

  useEffect(() => {
    if (fun === "bfs") bb();
    else if (fun === "dfs") {
      dd();
    } else if (fun === "ucs") {
      uu();
    } else if (fun === "hur") {
      hh();
    } else if (fun === "AStar") {
      Astar();
    }
  }, []);

  useEffect(() => {
    if (alllpeint) setcurentprintindex(alllpeint.length);
  }, [alllpeint]);

  if (showallstate && curentprintindex >= 0) {
    setTimeout(() => {
      setcurentprintindex((p) => p - 1);
      setcurentprint(alllpeint[curentprintindex]);
    }, 100);
  }

  return (
    <div>
      {win && !showallstate ? (
        <div className="m-24 text-center">
          <h1 className="m-24 text-center">{win ? "تم الحل" : ""}</h1>
          <button className="m-4" onClick={() => navigate("/chooseLogic")}>
            اعادة اللعب
          </button>
          <button className="m-4" onClick={() => setshowallstate(1)}>
            عرض الطريقة
          </button>
        </div>
      ) : (
        ""
      )}
      {!win && !showallstate ? (
        <div className="m-24 text-center">
          <h1 className="m-24 text-center">{"لم يتم الحل"} </h1>
          <button className="m-4" onClick={() => navigate("/chooseLogic")}>
            اعادة اللعب
          </button>
        </div>
      ) : (
        ""
      )}
      {showallstate ? (
        <div>
          <h1 className="text-center">{alllpeint.length} State</h1>

          <h1 className="text-center">{allstate} All State</h1>
          <div className="flex flex-wrap all">{curentprint}</div>
          <h1 className="text-center ">{cost} Cost</h1>

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

export default AlgoGame;
