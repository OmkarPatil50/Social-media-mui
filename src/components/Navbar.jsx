import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import {
  Diversity1,
  Logout,
  Mail,
  Notifications,
  PersonAdd,
  Settings,
} from "@mui/icons-material";
import {
  Avatar,
  Badge,
  Divider,
  IconButton,
  ListItem,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "20px",
}));

export default function Navbar({ mode }) {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: mode === "light" ? "#9c27b0" : "background.default",
        flexGrow: 1,
      }}
    >
      <Toolbar>
        <Diversity1
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginRight: "10px",
          }}
        />
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          CommuniTea
        </Typography>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <Icons>
          <Badge
            badgeContent={2}
            sx={{ display: { xs: "none", sm: "block" } }}
            color="success"
          >
            <Mail />
          </Badge>
          <Badge
            badgeContent={4}
            sx={{ display: { xs: "none", sm: "block" } }}
            color="warning"
          >
            <Notifications />
          </Badge>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Tooltip title="Account settings">
              <IconButton
                onClick={(event) => {
                  setOpen(true);
                  setAnchorEl(event.currentTarget);
                }}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar
                  alt="Travis Howard"
                  src="https://mui.com/static/images/avatar/2.jpg"
                  sx={{ width: "32px", height: "32px" }}
                />
              </IconButton>
            </Tooltip>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={handleClose}>
              <Avatar /> Profile
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Avatar /> My account
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
              <ListItem>
                <PersonAdd fontSize="small" />
              </ListItem>
              Add another account
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItem>
                <Settings fontSize="small" />
              </ListItem>
              Settings
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItem>
                <Logout fontSize="small" />
              </ListItem>
              Logout
            </MenuItem>
          </Menu>
        </Icons>
      </Toolbar>
    </AppBar>
  );
}
