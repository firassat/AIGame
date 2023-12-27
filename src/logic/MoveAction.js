import { useEffect, useState } from "react";

function MoveAction() {
  const [keyState, setKeyState] = useState({
    up: 0,
    down: 0,
    left: 0,
    rgiht: 0,
  });

  useEffect(() => {
    const keyHandler = (e) => {
      if (e.key === "ArrowDown") {
        setKeyState({ up: 0, down: 1, left: 0, rgiht: 0 });
      } else if (e.key === "ArrowUp") {
        setKeyState({ up: 1, down: 0, left: 0, rgiht: 0 });
      } else if (e.key === "ArrowLeft") {
        setKeyState({ up: 0, down: 0, left: 1, rgiht: 0 });
      } else if (e.key === "ArrowRight") {
        setKeyState({ up: 0, down: 0, left: 0, rgiht: 1 });
      }
    };
    window.addEventListener("keydown", keyHandler);
    window.addEventListener("keyup", () =>
      setKeyState({ up: 0, down: 0, left: 0, rgiht: 0 })
    );
    return () => {
      window.addEventListener("keydown", keyHandler);
      window.addEventListener("keyup", () =>
        setKeyState({ up: 0, down: 0, left: 0, rgiht: 0 })
      );
    };
  }, []);

  return keyState;
}

export default MoveAction;
