import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edite ? props.edit.value : "");

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });
  // ============fetch POST============================
  const endpoint = "https://todoappm8.herokuapp.com/";

  const body = JSON.stringify(input);
  const fetchPost = async () => {
    await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: body,
    });
  };
  //  ================================================================
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    fetchPost();
    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Update Your Item"
            value={input}
            name="text"
            className="todo-input edit"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-button edit">Update</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Add a todo"
            value={input}
            name="text"
            className="todo-input"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-button">Add todo</button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
