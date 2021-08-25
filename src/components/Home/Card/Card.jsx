import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { IconButton } from "@material-ui/core";
import { clientContext } from "../../../contexts/ClientContext";
import { ShoppingCart } from "@material-ui/icons";
import "./card.css";
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import { chosenContext } from "../../../contexts/ChosenContext";
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "50px",
  },
});

export default function ImgMediaCard({ item, history }) {
  const classes = useStyles();
  const { addAndDeleteProductInCart, checkProductInCart } =
    useContext(clientContext);

  const { addProductInChosen, checkProductInChosen } = useContext(chosenContext)

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          image={item.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="shoping_box">
        <Typography size="small" color="textSecondary">
          {item.price}{" "}
        </Typography>
        <IconButton
          onClick={() => addAndDeleteProductInCart(item)}
          variant="contained"
          color={checkProductInCart(item.id) ? "secondary" : "primary"}
        >
          <ShoppingCart />
        </IconButton>
        <IconButton aria-label="share"
          onClick={() => addProductInChosen(item)}
          color={checkProductInChosen(item.id) ? "secondary" : "inherit"}
        >
          <StarOutlineIcon />
        </IconButton>
        <IconButton aria-label="share"

        >
          <ChatBubbleOutlineIcon />
        </IconButton>


      </CardActions>
    </Card>
  );
}
