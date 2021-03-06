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
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BookCover from "./assets/empty_cover.jpg";



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

export default function BookCard({ book }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  return (
    <Card sx={{ minWidth: 275, maxWidth: 300, margin: 1}}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: book.ageRange === "Adult" ? "#985C5C" : "#5C985C" }}
            aria-label="recipe"
          >
            {book.ageRange === "Adult" ? "A" : "C"}
          </Avatar>
        }
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
      <CardContent>
        <Typography paragraph>{book.location}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
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
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
          </div>
        </CardContent>
      </Collapse>
    </Card>
  );
}
