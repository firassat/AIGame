import { Link } from "react-router-dom";

function ChooseLogic() {
  return (
    <div className="text-center p-40 flex flex-col gap-10 justify-center items-center">
      <h1 className="p-5">اختر طريقة اللعب</h1>

      <Link to={"/userGame"} className="w-1/2 button">
        يدوي
      </Link>
      <Link to={"/algoGame"} state={{ fun: "bfs" }} className="w-1/2 button">
        BFS
      </Link>
      <Link to={"/algoGame"} state={{ fun: "dfs" }} className="w-1/2 button">
        DFS
      </Link>
      <Link to={"/algoGame"} state={{ fun: "ucs" }} className="w-1/2 button">
        UCS
      </Link>
      <Link to={"/algoGame"} state={{ fun: "hur" }} className="w-1/2 button">
        Hur
      </Link>
      <Link to={"/algoGame"} state={{ fun: "AStar" }} className="w-1/2 button">
        AStar
      </Link>
      <Link to={"/"} state={{ fun: "ucs" }} className="w-1/2 button">
        اختيار مرحلة
      </Link>
    </div>
  );
}

export default ChooseLogic;
