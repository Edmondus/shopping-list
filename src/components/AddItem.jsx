import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "../store/actions";

export default function Input() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleInputChange = event => {
    return setInput(event.target.value);
  };

  const handleSubmit = () => {
    dispatch(actionCreators.addToList(input));
    setInput("");
  };

  const handleClear = () => {
    dispatch(actionCreators.clearItems());
  };

  return (
    <div>
      <input
        className="input"
        placeholder="Add item..."
        value={input}
        onChange={handleInputChange}
      />
      <button className="add-item-btn" onClick={handleSubmit}>
        Add
      </button>
      <button className="add-item-btn clear" onClick={handleClear}>
        Clear all
      </button>
    </div>
  );
}
