import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Character(props) {
  const { character, index, shadow } = props;
  const [top, setTop] = useState(100);
  console.log(index)

  const handleTop = () => {
    switch(index) {
      case index < 3:
        setTop(top);;
        break;
      case index < 6:
        setTop(top + 100)
        break;
      case index < 9:
        setTop(top + 100)
        break;
      case index < 12:
        setTop(top + 100)
        break;
      case index < 15:
        setTop(top + 100)
        break;
      case index < 18:
        setTop(top + 100)
        break;
      case index < 20:
        setTop(top + 100)
        break;
      default:
        setTop(top + 100)
        break;
    }
    return top;
  }

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

  return (
    <>
      <Card className={shadow ? classes.shadow : classes.root }>
        <Link to={`/character/${props.character.id}`}>
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
      {/* <Card className={classes.shadow}>
        <Link to={`/character/${props.character.id}`}>
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
                {character.name}
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
      </Card> */}
    </>
  );
}