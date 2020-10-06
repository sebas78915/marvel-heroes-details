import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 345,
    margin: theme.spacing(2)
  },
}));

export default function Character(props) {
  const classes = useStyles();

  const { character } = props;

  return (
    <Card className={classes.root}>
      <Link to={`/character/${props.character.id}`}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="300"
            image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            title="Contemplative Reptile"
          />
          <CardContent>
            
            <Typography gutterBottom variant="h5" component="h2">
              {character.name}
            </Typography>
            {/* <Typography variant="body2" color="textSecondary" component="p">
              {character.description ? character.description : 'No description'}
            </Typography> */}
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}