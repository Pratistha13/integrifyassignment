import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardActions, Avatar, Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Cards.css';


const Cards = (props) => {  
const {name, username,website, id} = props;
  
const classes = useStyles();  
  
  return (
    <Card className={classes.root} >
      <CardContent className={classes.content}>
        <div>
            <Avatar className={classes.avatar}>{name.charAt(0)}</Avatar>
        </div>
        <Typography gutterBottom variant="h5" component="h2">
        {name}
          </Typography>
        <div>
          <Typography className={classes.pos} color='textSecondary'>
            {`@${username}`}
          </Typography>
        </div>
        <div >
          <Typography className={classes.pos1} color='textSecondary'>
            <a href={`http://${website}`}>{`http://${website}`}</a>
          </Typography>
        </div>
      <CardActions>
          <Link to={`/users/${id}`}>
            <Button className={classes.button} variant="contained">
              More Details
            </Button>
          </Link>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default Cards;

const useStyles = makeStyles({
    root: {
      minWidth: 270,
    },
    pos: {
      marginBottom: 12,
    },
    avatar: {
        height: '7rem',
        width: '7rem',
        backgroundColor : '#61C1D1',
      },
      button: {
        backgroundColor: '#619CD1',
        color: 'black',
      },
      content: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }
  });