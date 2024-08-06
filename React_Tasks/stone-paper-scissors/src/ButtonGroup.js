import React from "react";
import { Button } from "@mui/material";

const ButtonGroup = ({ onChoice }) => {
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => onChoice("Stone")}
        style={{ margin: "10px" }}
      >
        Stone
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => onChoice("Paper")}
        style={{ margin: "10px" }}
      >
        Paper
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => onChoice("Scissors")}
        style={{ margin: "10px" }}
      >
        Scissors
      </Button>
    </div>
  );
};

export default ButtonGroup;
