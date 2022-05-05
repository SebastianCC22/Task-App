import { useState, useEffect } from "react";
import { Button, Card, CardContent, Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  const loadTasks = async () => {
    const res = await fetch("http://localhost:3001/tasks");
    const data = await res.json();
    setTasks(data);
  };

  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:3001/tasks/${id}`, {
      method: "DELETE",
    });
    // const data = await res.json()
    // console.log(data)
    setTasks(tasks.filter((task) => task.id !== id));
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <>
      <h1>Lista de Tareas</h1>

      {tasks.map((task) => (
        <Card
          style={{
            marginBottom: "1rem",
            backgroundColor: "#0e222a",
            borderRadius: "25px",
            boxShadow: "5px 5px 5px black",
          }}
          key={task.id}
        >
          <CardContent
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={{ color: "white" }}>
              <Typography>{task.title}</Typography>
              <Typography>{task.description}</Typography>
            </div>
            <div>
              <Grid container style={{
                width: "300%",
              }}>
                <Grid item xs={6} sm={12}>
                  <Button
                    border={1}
                    variant="contained"
                    color="primary"
                    style={{
                      marginLeft: ".7rem",
                    }}
                    onClick={() => navigate(`/tasks/${task.id}/edit`)}
                  >
                    Editar
                  </Button>
                  <Button
                    border={1}
                    variant="contained"
                    color="error"
                    style={{
                      marginLeft: ".2rem",
                      marginTop: "3px"
                    }}
                    onClick={() => handleDelete(task.id)}
                  >
                    Eliminar
                  </Button>
                </Grid>
              </Grid>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
