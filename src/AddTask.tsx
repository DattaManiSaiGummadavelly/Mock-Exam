import { Box, Button, Card, CardContent, Container, Grid, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

interface Task {
    heading: string,
    description: string
}

const AddTask = () => {
    const [newTask, setNewTask] = useState<Task>({ heading: "", description: "" });
    const [taskList, setTaskList] = useState<Task[]>([]);
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setNewTask((prevTask) => ({ ...prevTask, [name]: value }));
    }
    const handleSubmit = () => {
        setTaskList((list) => [...list, newTask]);
        setNewTask({ heading: "", description: "" });
    }
    return (
        <>
            <Box>
                <Container maxWidth="sm" >
                    <Paper sx={{ padding: "30px", display: "flex", flexDirection: "column", justifyContent: "center" }}  >
                        <TextField onChange={handleChange} name='heading' value={newTask.heading} sx={{ width: "100% " }} helperText="Here you enter your tasks" label="Task Heading">
                        </TextField>
                        <br />
                        <TextField onChange={handleChange} name='description' value={newTask.description} sx={{ width: "100% " }} multiline rows={5} label="Task Description"></TextField>
                        <Button disabled={!newTask.heading||!newTask.description} onClick={handleSubmit} sx={{ width: "100% ", mt: "10px" }} variant='contained' type='submit'>Add Task</Button>
                    </Paper>
                </Container>
                <Container sx={{mt:"20px"}}>
                {taskList.length===0?<></>: <Typography variant='h4'  textAlign={"center"}>Here are your Tasks </Typography>}
                <Grid container spacing={4}>
                    {
                        taskList.map((task,index) => 
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <Card>
                                    <CardContent>
                                        <Typography>Task{index+1}: {task.heading}</Typography>
                                        <Typography>Description: {task.description}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )
                    }

                </Grid> 
                </Container>
            </Box>
        </>
    )
}

export default AddTask
