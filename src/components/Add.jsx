import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import {
  Add as AddIcon,
  Close,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";

const Add = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Tooltip
        title="Add Post"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", sm: 30 },
        }}
        onClick={(e) => {
          setOpen(true);
        }}
        bgColor={"background.default"}
        color={"text.primary"}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          width={450}
          height="fit-content"
          sx={{
            padding: "20px",
            borderRadius: "10px",
            backgroundColor: "background.default",
            color: "text.primary",
          }}
        >
          <Box sx={{display:'flex' , justifyContent:'space-between' , alignItems:'center'}}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            textAlign="center"
            color='gray'
          >
            Create New Post
          </Typography>
          <Close sx={{cursor:'pointer'}} onClick={()=>{
            setOpen(false)
          }}/>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              margin: "20px 0",
            }}
          >
            <Avatar
              alt="John Doe"
              src="https://mui.com/static/images/avatar/2.jpg"
              sx={{ width: "25px", height: "25px", margin: 0 }}
            />
            <Typography sx={{ fontWeight: 500 }}>John Doe</Typography>
          </Box>
          <TextField
            multiline
            rows={4}
            placeholder="What's in your mind..."
            variant="standard"
            sx={{ width: "100%" }}
          />

          <Stack
            direction="row"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              margin: "10px 0",
            }}
          >
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="warning" />
          </Stack>

          <ButtonGroup sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button variant="contained">Post</Button>
            <Button>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  );
};

export default Add;
