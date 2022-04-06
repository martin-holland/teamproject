import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
import BookCover from "./assets/empty_cover.jpg";
import DeleteIcon from "@mui/icons-material/Delete";
import RequestBook from "@mui/icons-material/Chat";
import Tooltip from "@mui/material/Tooltip";
// import { ClassNames } from "@emotion/react";
import { db } from "./firebase-config";
import {
  doc,
  deleteDoc,
  //   collection,
  //   collectionGroup,
  //   query,
  //   where,
} from "firebase/firestore";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function BookCard({ book, bookId }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleDelete = async () => {
    deleteBook();
  };

  const deleteBook = async () => {
    const userDoc = doc(db, "languages", book.bookLanguage, "books", bookId);
    await deleteDoc(userDoc);
  };

  return (
    <Card sx={{ minWidth: 275, maxWidth: 300, margin: 1 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: book.ageRange === "Adult" ? "#985C5C" : "#5C985C" }}
            aria-label="recipe"
          >
            {book.ageRange === "Adult" ? "A" : "C"}
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={book.bookTitle}
        subheader={book.author}
      />
      <CardMedia
        component="img"
        height="194"
        image={book.image ? book.image : BookCover}
        alt="empty book cover"
      />
      <CardContent sx={{ maxWidth: 300 }}>
        <Typography variant="body2" color="text.secondary">
          {book.comment}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Tooltip title="Mark as favorite">
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Request book">
          <IconButton aria-label="share">
            <RequestBook />
          </IconButton>
        </Tooltip>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{book.comment}</Typography>
          <Typography paragraph>{book.location}</Typography>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Tooltip title="Delete Book">
              <IconButton onClick={handleDelete}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </div>
        </CardContent>
      </Collapse>
    </Card>
  );
}
