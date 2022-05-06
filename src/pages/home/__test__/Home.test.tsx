import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Home from "../Home";
import {
  TodoContext,
} from "../../../contexts/TodoContext";
import { BrowserRouter as Router} from "react-router-dom";

describe("Home page testing", () => {
  it("Home page inputs", () => {
    const val = {
      todos: [
        { id: 3140, title: "saeed", description: "saeed agha", status: "Todo" },
      ],
      getAllTodos: () => {},
      addTodo: () => {},
    };
    render(
      <Router>
        <TodoContext.Provider value={val}>
          <Home />
        </TodoContext.Provider>
      </Router>
    );

    const homeTitle = screen.getByText("Add a new Task");
    const titleInput = screen.getByLabelText(/Title/i);
    const descriptionInput = screen.getByLabelText(/Description/i);

    fireEvent.change(titleInput, { target: { value: "saeed" } });
    fireEvent.change(descriptionInput, { target: { value: "safari" } });

    expect(homeTitle).toBeInTheDocument();
  });

  it("Home page click button", () => {
    const val = {
      todos: [
        { id: 3140, title: "saeed", description: "saeed agha", status: "Todo" },
      ],
      getAllTodos: () => {},
      addTodo: () => {},
    };
    render(
      <Router>
        <TodoContext.Provider value={val}>
          <Home />
        </TodoContext.Provider>
      </Router>
    );

    const addButton = screen.getByText("Add");

    fireEvent.click(addButton);
  });
});
