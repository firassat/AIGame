import { BsKey } from "react-icons/bs";
import { BsFillShieldLockFill, BsFillBoxFill } from "react-icons/bs";

function Print(board) {
  return (
    <>
      <div className="board">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, cellIndex) => (
              <div
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
                }`}
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
    </>
  );
}

export default Print;
