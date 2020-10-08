import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';


export default function Character(props) {
  const { character, shadow } = props;

  const useStyles = makeStyles((theme) => ({
    root: {
      width: 500,
      margin: theme.spacing(5)
    },
    shadow: {
      position: 'absolute',
      filter: 'blur(6px)',
      width: 500,
      margin: theme.spacing(5),
      // top: handleTop(),
      zIndex: -1
    }
  }));

  const classes = useStyles();
  const category = localStorage.getItem('category').slice(0, -1);

  return (
    <>
      <Card className={shadow ? classes.shadow : classes.root }>
        <Link to={`/${category}/${props.character.id}`}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="455"
              image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              title="Contemplative Reptile"
            />
            <CardContent>
              
              <Typography gutterBottom variant="h5" component="h2">
                {category === 'character' ? character.name : character.title}
              </Typography>
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
    </>
  );
}