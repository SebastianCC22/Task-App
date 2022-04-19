import { useState, useEffect } from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";
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
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate(`/tasks/${task.id}/edit`)}
              >
                Editar
              </Button>
              <Button
                variant="contained"
                color="error"
                style={{ marginLeft: ".5rem" }}
                onClick={() => handleDelete(task.id)}
              >
                Eliminar
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
