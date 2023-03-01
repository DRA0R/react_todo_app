import React from "react";
import "./CreateTodoButton.css"

function CreateTodoButton() {

  const onClickButton = () => {
    alert('jeje')
  };
    
    return (        
      <button className="CreateTodoButton"
      onClick={onClickButton}
      >
        +
      </button>
    );
}

export {CreateTodoButton};