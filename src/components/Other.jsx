import React from "react";

export const Other = (props) => {

  const [todo, setTodo] = React.useState(null)

  React.useEffect(()=> {
    fetch ('https://jsonplaceholder.typicode.com/todos/1')
    .then((res)=> res.json ())
    .then((todo)=> {
        setTodo(todo)
    })
  }, [])

const todoJSX = todo ? <h1>{todo.title}</h1> : <h1>Error</h1>

  return (<>
  {todoJSX}
    </>
  );
};