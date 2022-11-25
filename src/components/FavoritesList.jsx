import React, { useEffect } from 'react'; 
import { useDispatch, useSelector } from "react-redux"; 

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';

import { getOneUserFavorites } from '../store/favorites';
import { deleteFavoriteFromUser } from "../store/users";

const FavoritesList = () => {
  const user = useSelector((state) => state.user);
  const favorites = useSelector(state => state.favorites); 

  const dispatch = useDispatch();

  const handleClick = (productId) => {
    dispatch(deleteFavoriteFromUser(productId));
  };

  useEffect(() => {
    dispatch(getOneUserFavorites(user));
  }, []);


  return (
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
            {favorites.map((value, i) => (
              <>
                <ListItem
                  key={i}
                  disableGutters
                  secondaryAction={
                    <IconButton
                      onClick={() => handleClick(i + 1)}
                    >
                        <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemText primary={value.productName} />
                </ListItem>
              </>
            ))}
          </List>
        </Box>
      </Box>
    </CssBaseline>
  );
}

export default FavoritesList;
