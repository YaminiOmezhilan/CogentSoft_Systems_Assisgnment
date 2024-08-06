import React, { useState, useEffect } from "react";
import { IconButton, Box, Typography, Button } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const StarRating = ({ totalStars = 5, onRate }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  useEffect(() => {
    const storedRating = localStorage.getItem("rating");
    if (storedRating) {
      setRating(parseFloat(storedRating));
    }
  }, []);

  const handleRating = (rate) => {
    setRating(rate);
    localStorage.setItem("rating", rate);
    if (onRate) onRate(rate);
  };

  const clearRating = () => {
    setRating(0);
    localStorage.removeItem("rating");
    if (onRate) onRate(0);
  };

  const getStarIcon = (index) => {
    if (hoverRating >= index) {
      return <StarIcon style={{ color: "gold" }} />;
    } else if (!hoverRating && rating >= index) {
      return <StarIcon style={{ color: "gold" }} />;
    } else if (!hoverRating && rating >= index - 0.5) {
      return <StarHalfIcon style={{ color: "gold" }} />;
    } else {
      return <StarBorderIcon style={{ color: "gold" }} />;
    }
  };

  return (
    <Box
      border={1}
      borderColor="grey.500"
      borderRadius={2}
      p={2}
      display="inline-block"
      textAlign="center"
    >
      {Array.from({ length: totalStars }, (v, i) => i + 1).map((star) => (
        <IconButton
          key={star}
          onClick={() => handleRating(star)}
          onMouseEnter={() => setHoverRating(star)}
          onMouseLeave={() => setHoverRating(0)}
        >
          {getStarIcon(star)}
        </IconButton>
      ))}
      <Typography variant="h6" style={{ marginTop: "10px" }}>
        Rating: {rating} / {totalStars}
      </Typography>
      <Button
        variant="contained"
        style={{ marginTop: "10px", backgroundColor: "grey", color: "white" }}
        onClick={clearRating}
      >
        Clear Rating
      </Button>
    </Box>
  );
};

export default StarRating;
