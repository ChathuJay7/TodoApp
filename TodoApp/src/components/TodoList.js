import React from "react";

const TodoList = ({ todos, handleDelete, handleEdit }) => {
  return (
    <ul className="allTodos">
      {todos.map((t) => (
        <li >
          <div className="singleTodo">
            <span className="todoText" key={t.id}>
              {t.todo}
            </span>
            <button onClick={() => handleEdit(t.id)}>Edit</button>
            <button onClick={() => handleDelete(t.id)}>Delete</button>
            
          </div>
          <div className="border"></div>
        </li>
        
      ))}
      
    </ul>
    
  );
};

export default TodoList;
