import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Edit from "../Edit";
import {
  TodoContext,
} from "../../../contexts/TodoContext";
import { BrowserRouter as Router} from "react-router-dom";

describe("Edit page testing", () => {
  it("Edit page inputs", () => {
    const val = {
        todo: { id: 3140, title: "saeed", description: "saeed agha", status: "Todo" },
        getTodo: () => {},
        editTodo: () => {},
      };
    render(
      <Router>
        <TodoContext.Provider value={val}>
          <Edit />
        </TodoContext.Provider>
      </Router>
    );

    const EditTitle = screen.getByText("Edit Task");
    const titleInput = screen.getByLabelText(/Title/i);
    const descriptionInput = screen.getByLabelText(/Description/i);

    fireEvent.change(titleInput, { target: { value: "saeed" } });
    fireEvent.change(descriptionInput, { target: { value: "safari" } });

    expect(EditTitle).toBeInTheDocument();
  });

  it("Edit page click button", () => {
    const val = {
      todo: { id: 3140, title: "saeed", description: "saeed agha", status: "Todo" },
      getTodo: () => {},
      editTodo: () => {},
    };
    render(
      <Router>
        <TodoContext.Provider value={val}>
          <Edit />
        </TodoContext.Provider>
      </Router>
    );

    const addButton = screen.getByText("Edit");

    fireEvent.click(addButton);
  });
});
