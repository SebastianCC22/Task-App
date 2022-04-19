import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Container>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              <Link to="/" style={{textDecoration: 'none', color: "#eee"}}>  TareApp </Link>
            </Typography>
            <Button
              variant="contained"
              color="success"
              onClick={() => navigate("/task/new")}
            >
              Nueva Tarea
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
