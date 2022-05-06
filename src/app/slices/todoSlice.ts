import { createSlice } from "@reduxjs/toolkit";
import { Dispatch } from "redux";

export const todoSlices = createSlice({
  name: "todos",
  initialState: {
    allTodos: [],
    todo: {},
    editedTodos: [],
  },
  reducers: {
    todosFetch: (state, { payload }) => {
      state.allTodos = payload;
    },
    editedTodosFetch: (state, { payload }) => {
        state.editedTodos = payload;
      },
    todoFetch: (state, { payload }) => {
      state.todo = payload;
    },
    addNewTodo: (state, { payload }) => {
      state.allTodos = payload;
    },
  },
});

export default todoSlices.reducer;

export const { todosFetch, todoFetch, addNewTodo } = todoSlices.actions;

export const getAllTodos = () => (dispatch: Dispatch, getState: any) => {
  const todos = getState().todos.allTodos;
  const allTodos = localStorage.getItem("todos");

  if (allTodos) {
    dispatch(todosFetch(JSON.parse(allTodos)));
  } else {
    dispatch(todosFetch(todos));
  }
};

export const getTodo = (id: number) => (dispatch: Dispatch, getState: any) => {
  const allTodos: any = localStorage.getItem("todos");
  const todos: any = JSON.parse(allTodos);

  if (id) {
    const todo = todos?.find((todo: any) => +todo?.id === id);
    dispatch(todoFetch(todo));
  }
};


export const editTodo = (id: number, editedTodo:any) => (dispatch: Dispatch, getState: any) => {
    const allTodos: any = localStorage.getItem("todos");
  
    if (id) {
    let todos: any = [...JSON.parse(allTodos)]
      let todoIndex:any = todos?.findIndex((todo: any) => +todo?.id === id);
      todos[todoIndex] = editedTodo
      localStorage.setItem("todos", JSON.stringify(todos));
    //   dispatch(todosFetch(todos));
    }
  };

export const addTodo =
  (title: any, description: any) => (dispatch: any, getState: any) => {
    const todos = [...getState().todos.allTodos];

    if (title && description) {
      const todo = {
        id: Math.floor(Math.random() * 10000),
        title,
        description,
        status: "Todo",
      };
      todos.push(todo);
      localStorage.setItem("todos", JSON.stringify(todos));
      dispatch(addNewTodo(todo));
    }
  };
