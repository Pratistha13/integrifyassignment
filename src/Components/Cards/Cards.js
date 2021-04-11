import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardActions, Avatar, Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';


const Cards = (props) => {  
const {name, username,website, id} = props;
  
const classes = useStyles();  
  
  // template for user details
  return (
    <Card className={classes.root} >
      <CardContent className={classes.content}>
        {/* first character of the name inside the Avatar */}
        <div>
            <Avatar className={classes.avatar}>{name.charAt(0)}</Avatar>
        </div>
        <Typography style={{ fontWeight: 600 }}>
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
        {/* links the button to user details according to their id */}
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
      width: '15.68rem',
      padding: '3%',
      margin: '1rem',
      height: 'auto',
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