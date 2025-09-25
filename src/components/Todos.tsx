import { useEffect, useState } from "react";

interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

interface TodosResponse {
  todos: Todo[];
  total: number;
  skip: number;
  limit: number;
}

export default function Todos() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    async function fetchTodos() {
      const response = await fetch("https://dummyjson.com/todos");
      const data: TodosResponse = await response.json();
      setTodos(data.todos);
    }

    fetchTodos();
  }, []);

  return (
    <>
      <div>
        <h1 className="text-800 font-bold text-2xl py-3">Todos</h1>
      </div>
      <div id="todoList">
        {todos.length > 0 &&
          todos.map((todo) => (
            <div className="todoItem" key={todo.id}>
              {todo.todo}
            </div>
          ))}
      </div>
    </>
  );
}
