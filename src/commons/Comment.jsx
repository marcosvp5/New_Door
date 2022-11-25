import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {
  Box,
  CssBaseline,
  Paper,
  Divider,
  List,
  ListItemText,
  ListItemIcon,
  ListItemButton,
} from "@mui/material";

import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { getOneProduct } from "../store/products";
import CommentIcon from "@mui/icons-material/Comment";

const Comment = () => {
  const [open, setOpen] = useState();
  const [commentReview, setCommentReview] = useState("");

  const user = useSelector((state) => state.user);
  const { id } = useSelector((state) => state.oneProduct);
  const dispatch = useDispatch();
  const [review, setReview] = useState([]);

  const onChange = (e) => {
    setCommentReview(e.target.value);
  };

  const onSubmit = (data) => {
    axios
      .post(`/api/products/review/${user.id}`, {
        id: id,
        commentReview: commentReview,
      })
      .then((res) => dispatch(getOneProduct(res.data)))
      .then(() => setCommentReview(""));
  };

  const handleComments = () => {
    setOpen(!open);
    axios
      .get(`/api/products/showReviews/${id}`)
      .then((res) => setReview(res.data.reviews));
  };

  return (
    <CssBaseline>
      <Box sx={{}}>
        <Paper>
          <Box
            sx={{
              backgroundColor: "#fcfcfc",
              display: "flex",
              flexDirection: "column",
              borderRadius: 4,
              marginTop: "15px",
              marginLeft: 40,
              marginRight: 40,
              boxShadow: "10px 10px 5px 0px rgba(255,255,255, 0.45)",
            }}
          >
            <TextField
              variant="outlined"
              margin="normal"
              id="message"
              label="Contale a otras personas sobre tu producto"
              name="review"
              sx={{ color: "white" }}
              onChange={(e) => onChange(setCommentReview(e.target.value))}
            />

            <Button
              onClick={onSubmit}
              variant="contained"
              color="primary"
              xs={{
                marginTop: "100px",
              }}
            >
              Enviar
            </Button>
            <Divider />
            <List
              sx={{
                p: 5,

                position: "relative",
                margin: "0 auto",
                width: "100%",
                maxWidth: 500,
                fontSize: "150px",
                bgcolor: "background.paper",
              }}
            >
              <ListItemButton onClick={handleComments}>
                <ListItemIcon>
                  <CommentIcon fontSize="large" />
                </ListItemIcon>
                <ListItemText
                  sx={{ margin: "0 auto" }}
                  primary="Comentarios:"
                />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {review.map((e) => {
                    return (
                      <ListItemButton sx={{ pl: 6 }}>
                        <ListItemIcon>
                          <AccountCircleIcon fontSize="large" />
                        </ListItemIcon>
                        <ListItemText
                          sx={{ fontSize: 14 }}
                          primary={e.userId}
                          secondary={e.commentReview}
                        />
                      </ListItemButton>
                    );
                  })}
                </List>
              </Collapse>
            </List>
          </Box>
        </Paper>
      </Box>
    </CssBaseline>
  );
};

export default Comment;
