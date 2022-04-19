import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskForm from "./components/TaskForm";
import Tasks from "./components/Tasks";
import Navbar from "./components/Navbar";
import { Container } from "@mui/material";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Tasks />} />
          <Route path="/task/new" element={<TaskForm />} />
          <Route path='/tasks/:id/edit' element={<TaskForm />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}
