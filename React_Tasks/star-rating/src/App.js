import React from "react";
import { Container, Typography } from "@mui/material";
import StarRating from "./StarRating";

function App() {
  const handleRating = (rating) => {
    console.log(`Rated with ${rating} stars`);
  };

  return (
    <Container maxWidth="sm" style={{ textAlign: "center", marginTop: "50px" }}>
      <Typography variant="h4" gutterBottom>
        Rate this Product
      </Typography>
      <StarRating totalStars={5} onRate={handleRating} />
    </Container>
  );
}

export default App;
