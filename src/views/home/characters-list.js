import { Pagination } from '@material-ui/lab';
import React from 'react';
import Character from './character'
import { Fab, makeStyles, Slide, useScrollTrigger, Zoom } from '@material-ui/core';
import Theme from '../../utils/theme';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Loader from '../../utils/loader';

const useStyles = makeStyles((theme) => ({
  title: {
    position: "fixed",
    backgroundColor: 'red',
    color: 'white',
    width: 'fit-content',
    margin: '20px 0',
    zIndex: 1,
    borderRadius: '0 5px 5px 0',
    padding: '0 100px',
    fontStyle: 'italic',
  },
  display: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: theme.spacing(4),
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: theme.spacing(5),
  },
  goToTop: {
    position: 'fixed',
    bottom: theme.spacing(4),
    right: theme.spacing(4),
  }
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.goToTop}>
        {children}
      </div>
    </Zoom>
  );
}

const CharactersList= (props) => {
  const classes = useStyles();

  const { characters, pagination, page, handleChange } = props;

  if (!characters.length) {
    return <Loader />
  }

  return (
    <>
      <Slide timeout={800} direction="right" in mountOnEnter unmountOnExit>
        <div className={classes.title}>
          <h1>{localStorage.getItem('category').toUpperCase()}</h1>
        </div>
      </Slide>
      <div className={classes.display}>
        {characters.map(character => <Character key={character.id} character={character} />)}
      </div>
      <ScrollTop {...props}>
        <Theme>
          <Fab color="secondary" size="medium" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </Theme>
      </ScrollTop>
      <Theme>
        <Pagination
          className={classes.pagination}
          variant="outlined"
          count={pagination}
          page={page} 
          onChange={handleChange}
          size="large"
          boundaryCount={2}>
        </Pagination>
      </Theme>
    </>
  );
}

export default CharactersList;