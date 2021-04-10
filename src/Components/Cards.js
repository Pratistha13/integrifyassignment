import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardActions, Avatar, Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';


const Cards = (props) => {  
const {name, username,website, id} = props;
  
const classes = useStyles();  
  
  return (
    <Card className={classes.root} >
      <CardContent>
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
      </CardContent>
      <Link to={`/user/${id}`}>
      <CardActions className={classes.root}>
          <Link to={`/users/${id}`}>
            <Button variant="contained" color="primary">
              More Details
            </Button>
          </Link>
        </CardActions>
      </Link>
    </Card>
  );
}

export default Cards;

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    avatar: {
        height: '7rem',
        width: '7rem',
      },
  });