import { createContext, useState } from "react";
import { ITodo } from "../DTOs/interfaces/ITodo";

export const TodoContext = createContext<any>(null);

type TodoContextProps = {
  children: React.ReactNode;
};

const TodoContextProvider = ({ children }: TodoContextProps) => {
  // States
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [todo, setTodo] = useState<ITodo>();

  // Methods
  const getAllTodos = () => {
    const allTodos = [...todos];
    const getTodos = localStorage.getItem("todos");

    if (getTodos) {
        setTodos(JSON.parse(getTodos));
    } else {
        setTodos(allTodos);
    }
  };

  const getTodo = (id: number) => {
    const allTodos: any = localStorage.getItem("todos");
    const todos: any = JSON.parse(allTodos);

    if (id) {
      const todo = todos?.find((todo: any) => +todo?.id === id);
      setTodo(todo);
    }
  };

  const editTodo = (id: number, editedTodo: any) => {
    const allTodos: any = localStorage.getItem("todos");

    if (id) {
      let todos: any = [...JSON.parse(allTodos)];
      let todoIndex: any = todos?.findIndex((todo: any) => +todo?.id === id);
      todos[todoIndex] = editedTodo;
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  };

  const addTodo = (title: any, description: any) => {
    const allAodos = [...todos];

    if (title && description) {
      const todo = {
        id: Math.floor(Math.random() * 10000),
        title,
        description,
        status: "Todo",
      };
      allAodos.push(todo);
      localStorage.setItem("todos", JSON.stringify(allAodos));
      setTodos(allAodos);
    }
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        todo,
        getAllTodos,
        getTodo,
        editTodo,
        addTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
