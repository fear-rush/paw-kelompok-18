import { useState } from "react";
import Backdrop from "./backdrops";
import { CreateTodo } from "./createTodo";
import { FabBtn } from "./fabBtn";

export function CreateTodoFAB() {
  const [isClicked, setisClicked] = useState(false);

  function HandleClick() {
    setisClicked(true);
  }

  function HandleCancel() {
    setisClicked(false);
  }

  return (
    <div>
      <FabBtn onClick={HandleClick} />
      {isClicked && <CreateTodo onCancel={HandleCancel}/>}
      {isClicked && <Backdrop onCancel={HandleCancel}/>}
    </div>
  );
}
