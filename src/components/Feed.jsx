import { Box } from "@mui/material";
import React from "react";
import PostCard from "./PostCard";

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </Box>
  );
};

export default Feed;
