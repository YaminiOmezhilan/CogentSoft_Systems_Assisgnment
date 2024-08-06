import React, { useState } from "react";
import { Paper, Typography, Button } from "@mui/material";
import ButtonGroup from "./ButtonGroup";

const choices = ["Stone", "Paper", "Scissors"];

const getResult = (playerChoice, computerChoice) => {
  if (playerChoice === computerChoice) return "It's a tie!";
  if (
    (playerChoice === "Stone" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Stone") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
  ) {
    return "You win!";
  }
  return "You lose!";
};

const Game = () => {
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");

  const handlePlayerChoice = (choice) => {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    setPlayerChoice(choice);
    setComputerChoice(computerChoice);
    setResult(getResult(choice, computerChoice));
  };

  return (
    <Paper elevation={3} style={{ padding: "20px" }}>
      <Typography variant="h5" gutterBottom>
        Choose your move
      </Typography>
      <ButtonGroup onChoice={handlePlayerChoice} />
      {result && (
        <>
          <Typography variant="h6" gutterBottom>
            You chose: {playerChoice}
          </Typography>
          <Typography variant="h6" gutterBottom>
            Computer chose: {computerChoice}
          </Typography>
          <Typography variant="h4" gutterBottom>
            {result}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setResult("")}
          >
            Play Again
          </Button>
        </>
      )}
    </Paper>
  );
};

export default Game;
