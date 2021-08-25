import React, { useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core";
import Card from "../Home/Card/Card";
import { useContext } from "react";
import { clientContext } from "../../contexts/ClientContext";
import { Carousel } from "react-bootstrap";
import SliderContent from "./SliderContent";
import Info from "./Info";
const useStyles = makeStyles({
  container: {
    margin: "0 auto",
    textAlign: "center",
    alignItems: "center",
    color: "white",
  },
  divs: {
    display: "flex",
    flexWrap: "wrap",
  },
});

export default function SimpleContainer() {
  const { products, getProducts } = useContext(clientContext);
  useEffect(() => {
    getProducts();
  }, []);
  const classes = useStyles();
  return (
    <>
      <CssBaseline />

      <SliderContent />
      <Info />


    </>
  );
}
