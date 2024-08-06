import React from "react";
import { Container, Typography } from "@mui/material";
import Game from "./Game";

function App() {
  return (
    <Container maxWidth="sm" style={{ textAlign: "center", marginTop: "50px" }}>
      <Typography variant="h4" gutterBottom>
        Stone Paper Scissors
      </Typography>
      <Game />
    </Container>
  );
}

export default App;
