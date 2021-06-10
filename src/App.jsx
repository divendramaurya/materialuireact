import React from "react";
import {
  AppBar,
  Button,
  CardMedia,
  Container,
  CssBaseline,
  Grid,
  Card,
  Toolbar,
  Typography,
  CardContent,
  CardActions,
} from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons/";

import useStyles from "./styles";

const cards = [1, 2, 3, 4, 5, 7, 8, 9];

const App = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Album Main
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don't simply skip over it entirely.
            </Typography>
            <div className={classes.button}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    I am Primary
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    I am secondary
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image Title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5">
                      {card} Heading
                    </Typography>
                    <Typography>
                      This is media card.This is media card.This is media
                      card.This is media card.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="textSecondary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer classes={classes.footer}>
        <Typography
          variant="h6"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          I am Footer
        </Typography>
        <Typography align="center" variant="subtitle1" color="textSecondary">
          I am footer body.I am footer body.
        </Typography>
      </footer>
    </>
  );
};

export default App;
