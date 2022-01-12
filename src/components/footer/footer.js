import React from "react";
import { AppBar, Container, Toolbar, Typography, Box } from "@mui/material";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Box>
      <AppBar position="static" color="transparent">
        <Container>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "1.5rem .5rem",
            }}
          >
            <Typography
              variant="subtitle"
              style={{
                fontFamily: "Inter",
                textAlign: "center",
              }}
            >
              © 2022 Nada Yumna
            </Typography>
            <div
              style={{
                marginLeft: "auto",
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                cursor: "pointer",
                overflow: "hidden",
              }}
            >
              <a
                rel="noreferrer"
                href="https://github.com/justnada"
                target={"_blank"}
                style={{ fontSize: 24, color: "white", overflow: "inherit" }}
              >
                <FiGithub />
              </a>
              <a
                rel="noreferrer"
                href="https://www.instagram.com/nadayumnaa/"
                target={"_blank"}
                style={{
                  fontSize: 25,
                  color: "white",
                  marginLeft: 10,
                  overflow: "inherit",
                }}
              >
                <FaInstagram />
              </a>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Footer;
