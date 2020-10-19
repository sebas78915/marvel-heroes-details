import { Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import Theme from '../../utils/theme';


export default function Character(props) {
  const { character } = props;

  const useStyles = makeStyles((theme) => ({
    root: {
      width: 500,
      margin: theme.spacing(5)
    },
    shadow: {
      position: 'absolute',
      filter: 'blur(8px)',
      width: 500,
      margin: '12px 35px',
      zIndex: -1
    },
    background: {
      backgroundColor: '#3A3A3A',
      color: 'white',
    }
  }));

  const classes = useStyles();
  const category = localStorage.getItem('category').slice(0, -1);

  return (
    <>
      <Theme>
        <div className={classes.root}> 
          <Card className={classes.shadow}>
            <Link to={`/${category}/${props.character.id}`}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="600"
                  image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                />
                <CardContent className={classes.background}>  
                  <Typography gutterBottom variant="h5" component="h2">
                    {character.name || character.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>        
          <Card>
            <Link to={`/${category}/${props.character.id}`}>
              <CardActionArea className={classes.background}>
                <CardMedia
                  component="img"
                  alt={character.name || character.title}
                  height="600"
                  image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  title={character.name || character.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {character.name || character.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>     
        </div>
      </Theme>
    </>
  );
}