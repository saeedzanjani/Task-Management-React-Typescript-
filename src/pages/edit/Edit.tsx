import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate, useParams } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { TodoContext } from "../../contexts/TodoContext";
import { handleChange } from "./../../utils/helpers/changeInput";
import { IStatus } from "../../DTOs/interfaces/ITodo";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    overflow: "hidden",
    padding: "10px 40px 20px",
  },
  editTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold'
  }
})

const Edit = () => {
  const classes = useStyles();
  const { id } = useParams();
  const navigate = useNavigate();

  const { todo, getTodo, editTodo } = useContext(TodoContext);

  const [status, setStatus] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [statuses, setStatuses] = useState<IStatus[]>([
    { label: "inQA", value: "InProgress", disabled: false },
    { label: "Done", value: "Done", disabled: false },
    { label: "Todo", value: "Todo", disabled: false },
  ]);

  useEffect(() => {
    if (id) {
      getTodo(+id);
    }
  }, [id]);

  useEffect(() => {
    setStatus(todo?.status);
    setTitle(todo?.title);
    setDescription(todo?.description);
    handleDisabledOptions();
  }, [todo]);

  const handleSelectedChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value);
  };

  const editedTodo = () => {
    if (id) {
      const newTodo = {
        id: todo?.id,
        title,
        description,
        status,
      };
      editTodo(+id, newTodo);
      navigate("/");
    }
  };

  const handleDisabledOptions = () => {
    const allStatuses = [...statuses];
    let doneIndex = allStatuses?.findIndex(
      (status) => status?.label === "Done"
    );
    let done = allStatuses[doneIndex];

    if (todo?.status === "Todo") {
      done.disabled = true;
      allStatuses[doneIndex] = done;
      setStatuses(allStatuses);
    } else {
      done.disabled = false;
      allStatuses[doneIndex] = done;
      setStatuses(allStatuses);
    }
    
  };

  return (
    <div className={classes.root}>
      <div>
        <p className={classes.editTitle} data-testid="edit">Edit Task</p>
        <TextField
          fullWidth
          id="filled-basic"
          label="Title"
          variant="filled"
          value={title || ""}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleChange(event, setTitle)
          }
        />
        <br />
        <br />
        <TextField
          label="Description"
          multiline
          fullWidth
          rows={20}
          value={description || ""}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleChange(event, setDescription)
          }
          variant="filled"
        />
        <br />
        <br />
        <FormControl fullWidth variant="filled" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-filled-label">Status</InputLabel>
          <Select value={status || ""} onChange={handleSelectedChange}>
            {statuses?.map((item: any) => (
              <MenuItem
                key={item?.label}
                value={item?.value || ""}
                disabled={item?.disabled}
              >
                {item?.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <br />
        <br />
        <Grid container spacing={1} xs={12} item>
          <Grid xs={6} md={6} item>
            <Button
              fullWidth
              onClick={editedTodo}
              variant="contained"
              startIcon={<EditIcon />}
            >
              Edit
            </Button>
          </Grid>
          <Grid xs={6} md={6} item>
            <Button fullWidth variant="outlined" onClick={editedTodo}>
              <span>Cancel</span>
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Edit;
