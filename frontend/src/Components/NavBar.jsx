import * as React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import logo from "../Assets/Nav Bar/Group 2.svg";
import LoginForm from './LoginForm';
import SignupForm from './SignUpForm';

const pages = ["Menu", "Plans", "Blog"];

function NavBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isLoginOpen, setIsLoginOpen] = React.useState(false);
  const [isSignupOpen, setIsSignupOpen] = React.useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigation = (page) => {
    navigate(`/${page.toLowerCase()}`);
    if (mobileOpen) {
      handleDrawerToggle(); // Close the drawer if a page is clicked
    }
  };

  const isCurrentPage = (page) => {
    return location.pathname.includes(page.toLowerCase());
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        width: { xs: 250, sm: 300, md: 350 },
      }}
    >
      <List>
        {pages.map((page) => (
          <ListItem button key={page} onClick={() => handleNavigation(page)}>
            <ListItemText primary={page} />
          </ListItem>
        ))}
        <ListItem button>
          <Button
            variant="outlined"
            sx={{
              borderColor: "#e4602c",
              color: "#e4602c",
              fontWeight: "bold",
              borderWidth: "2px",
              textTransform: "none",
              boxSizing: "border-box",
              padding: "8px 16px",
              minWidth: "100px",
              "&:hover": {
                backgroundColor: "#e4602c",
                color: "white",
                borderColor: "#e44c14",
              },
            }}
            onClick={() => {
              handleDrawerToggle();
              setIsLoginOpen(true);
            }}
          >
            Log In
          </Button>
        </ListItem>
        <ListItem button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#e4602c",
              fontWeight: "bold",
              color: "white",
              textTransform: "none",
              boxSizing: "border-box",
              padding: "8px 16px",
              minWidth: "100px",
              "&:hover": { backgroundColor: "#e44c14" },
            }}
            onClick={() => {
              handleDrawerToggle();
              setIsSignupOpen(true);
            }}
          >
            Sign Up
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <AppBar position="static" color="transparent">
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* Logo */}
            <Box
              sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
              onClick={() => navigate('/')}
            >
              <img
                src={logo}
                alt="Logo"
                style={{ height: "35px", marginRight: "10px" }}
              />
            </Box>

            {/* Hamburger menu icon for mobile */}
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleDrawerToggle}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="left"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                sx={{
                  "& .MuiDrawer-paper": {
                    width: { xs: 250, sm: 300, md: 350 },
                  },
                }}
              >
                {drawer}
              </Drawer>
            </Box>

            {/* Right aligned buttons for desktop */}
            <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 2 }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{
                    mx: 2,
                    color: isCurrentPage(page) ? "#e4602c" : "#665659",
                    fontWeight: isCurrentPage(page) ? "bold" : "normal",
                    textDecoration: "none",
                    textTransform: "none",
                    display: { xs: "none", md: "block" },
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      width: "100%",
                      height: "2px",
                      bottom: 0,
                      left: 0,
                      backgroundColor: "#e4602c",
                      transform: isCurrentPage(page) ? "scaleX(1)" : "scaleX(0)",
                      transformOrigin: "bottom right",
                      transition: "transform 0.3s ease-out",
                    },
                    "&:hover::after": {
                      transform: "scaleX(1)",
                      transformOrigin: "bottom left",
                    },
                  }}
                  onClick={() => handleNavigation(page)}
                >
                  {page}
                </Button>
              ))}
              <Button
                variant="outlined"
                sx={{
                  borderColor: "#e4602c",
                  color: "#e4602c",
                  fontWeight: "bold",
                  borderWidth: "2px",
                  textTransform: "none",
                  boxSizing: "border-box",
                  padding: "8px 16px",
                  minWidth: "100px",
                  "&:hover": {
                    backgroundColor: "#e4602c",
                    color: "white",
                    borderColor: "#e44c14",
                  },
                }}
                onClick={() => setIsLoginOpen(true)}
              >
                Log In
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#e4602c",
                  fontWeight: "bold",
                  color: "white",
                  textTransform: "none",
                  boxSizing: "border-box",
                  padding: "8px 16px",
                  minWidth: "100px",
                  "&:hover": { backgroundColor: "#e44c14" },
                }}
                onClick={() => setIsSignupOpen(true)}
              >
                Sign Up
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {isLoginOpen && <LoginForm onClose={() => setIsLoginOpen(false)} />}
      {isSignupOpen && <SignupForm onClose={() => setIsSignupOpen(false)} />}
    </div>
  );
}

export default NavBar;
