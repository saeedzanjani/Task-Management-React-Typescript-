import React, { ChangeEvent, FC, useContext, useEffect, useState } from 'react';
import styles from './Home.module.css'
import {Button, Grid, TextField} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { makeStyles } from '@mui/styles';
import CustomCard from '../../components/customCard/CustomCard';
import { ITodo } from './../../DTOs/interfaces/ITodo';
import { TodoContext } from './../../contexts/TodoContext';
import { handleChange } from './../../utils/helpers/changeInput';

const useStyles = makeStyles({
    root: {
        '& .css-opxrfb-MuiGrid-root': {
            margin: 0
        },
        '& .css-1t6e9jv-MuiCardActions-root': {
            padding: '22px 12px 8px'
        }
    },
});

const Home:FC = () => {
    const classes = useStyles()
    const {todos, getAllTodos, addTodo} = useContext(TodoContext)

    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')


    useEffect(() => {
        getAllTodos()
    }, [todos?.length, getAllTodos])

    const addNewTodo = () => {
        addTodo(title, description)
        setTitle('')
        setDescription('')
    }
    

    return (
        <div className={classes.root}>
            <div className={styles.home_wrapper}>
                <p className={styles.home_title} data-testid="home">Add a new Task</p>
                <TextField 
                fullWidth 
                id="filled-basic" 
                label="Title" 
                variant="filled" 
                value={title}
                onChange={(event:ChangeEvent<HTMLInputElement>) => handleChange(event, setTitle)}
                />
                <br />
                <br />
                    <TextField
                    label="Description"
                    multiline
                    fullWidth
                    rows={4}
                    value={description}
                    onChange={(event:ChangeEvent<HTMLInputElement>) => handleChange(event, setDescription)}
                    variant="filled"
                />
                <br />
                <br />
                <Button
                    fullWidth
                    variant="contained"
                    startIcon={<AddIcon />}
                    className={styles.home_Form_button}
                    onClick={addNewTodo}
                >
                   Add
                </Button>
            </div>

            <div className={styles.home_tasks}>
                <span className={styles.home_tasks_title}>Tasks</span>
                <Grid 
                item
                container
                spacing={1}
                xs={12}
                className={styles.home_tasks_container}
                style={{
                     alignItems: !todos?.length ? 'center': '', 
                    justifyContent: !todos?.length ? 'center': ''}}
                >
                   {todos?.length ? todos?.map((todo:ITodo) => (
                    <Grid 
                    item
                    xs={12}
                    md={3}
                    lg={2}
                    sm={6}
                    key={todo?.id}
                    >
                        <CustomCard
                            id={todo?.id}
                            title={todo?.title}
                            description={todo?.description}
                            status={todo?.status}
                    />
                    </Grid>
                   )) : <p className={styles.home_tasks_nothing}>
                   You have nothing to do.
                   <br />
                   Go get some sleep
               </p>}
                </Grid>
            </div>
        </div>
    );
};

export default Home;
