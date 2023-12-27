import Actions from "../logic/Actions";
function PrintNextState(game) {
  const action = new Actions();
  const nextState = action.nextState(game);
  return (
    <div className="fixed top-0 right-0 text-right p-6">
      <h2>الخطوة التالية المتوفرة</h2>
      <h2>
        الى الاعلى:
        {nextState.up[0] ? (nextState.up[1] ? "فتح القفل" : "نعم") : "لا"}
      </h2>
      <h2>
        الى الاسفل:{" "}
        {nextState.down[0] ? (nextState.down[1] ? "فتح القفل" : "نعم") : "لا"}
      </h2>
      <h2>
        الى اليسار:{" "}
        {nextState.left[0] ? (nextState.left[1] ? "فتح القفل" : "نعم") : "لا"}
      </h2>
      <h2>
        الى اليمين:
        {nextState.right[0] ? (nextState.right[1] ? "فتح القفل" : "نعم") : "لا"}
      </h2>
    </div>
  );
}

export default PrintNextState;
