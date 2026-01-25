import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
  useSelector((state) => state.Todos);
  const dispatch = useDispatch();

  return <div>Todos</div>;
}

export default Todos;
