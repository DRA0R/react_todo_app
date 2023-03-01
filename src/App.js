import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import {CreateTodoButton} from "./CreateTodoButton";
import { TodoItem } from "./TodoItem";
//import './App.css';

const todos = [
  {text: 'Cortar cebolla', completed : true},
  {text: 'Tomar curso intro a React', completed : true},
  {text: 'Llorar con la Llorona', completed : false},
  {text: 'Otro mas', completed : false},

];


function App() {

  const [searchValue, setSearchValue] = React.useState('');

  return (
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
        
            
      <TodoList>
        {todos.map(todo => (
              <TodoItem 
                key={todo.text}
                text={todo.text}
                completed={todo.completed}  
              />
          ))}
      </TodoList>
      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;
