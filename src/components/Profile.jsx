import React from "react";
import { useSelector } from "react-redux";

import {
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';

const Profile = () => {
  let user = useSelector((state) => state.user);

  return (
    <>
      <CssBaseline>
        <Box
          sx={{
            paddingTop: "50px",
            minHeight: "100vh",
            backgroundColor: "#212223",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#fcfcfc",
              display: "flex",
              flexDirection: "column",
              borderRadius: 4,
              m: 10,
              p: 5,
              boxShadow: "10px 10px 5px 0px rgba(255,255,255, 0.45)",
            }}
          >
            <List
              sx={{
                width: "100%",
                maxWidth: 360,
                bgcolor: "background.paper",
              }}
            >
              <ListItem>
                Usuario &gt;
                <ListItemText primary={user.userName} />
              </ListItem>
              <ListItem>
                Email &gt;
                <ListItemText primary={user.email} />
              </ListItem>
            </List>
          </Box>
        </Box>
      </CssBaseline>
    </>
  );
};

export default Profile;
