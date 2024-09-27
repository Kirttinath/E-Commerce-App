
import { useDispatch, useSelector } from "react-redux";
import { Add, Dec, Mul } from "../redux/action";

export const ReduxCount = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  return (
    <div className="count">
      <h1>
        Here we will show Count{" "}
        {count >= 0 ? (
          count
        ) : (
          <h6 style={{ color: "red" }}>
            <i>It should not less than 0</i>
          </h6>
        )}
      </h1>
      <button
        onClick={() => {
          dispatch(Add(1));
        }}
      >
        Add
      </button>
      <br></br>
      <button
        onClick={() => {
          dispatch(Dec(1));
        }}
      >
        Subtract
      </button>

      <button
        onClick={() => {
          dispatch(Mul(2));
        }}
      >
        Multiply
      </button>
    </div>
  );
};
