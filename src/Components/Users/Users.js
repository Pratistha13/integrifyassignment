import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardActions, Button } from '@material-ui/core';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom'
import EmailIcon from '@material-ui/icons/Email';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import PhoneIcon from '@material-ui/icons/Phone';
import LanguageIcon from '@material-ui/icons/Language';
import BusinessIcon from '@material-ui/icons/Business';

import './Users.css';

const Users = () => {
  // Inside the Users function, we invoked a useParams() hook that returns an object with key/value pairs where the key is id
  const { id } = useParams();
  const [user, setUser] = useState({}); 

  const history = useHistory();
  
  const classes = useStyles();

  // fetches user details according to their id 
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
      setUser(result.data);
    };

    fetchData();
  }, [id]);


  return (
    <div className = {classes.spacing}>
      <Card className = {classes.root}  >
        <CardContent className= 'CardContent'>
        <ul className = 'dashed'>
          <li><b>Name: {user.name}</b></li>
          <li><AccountCircleIcon/>username: {user.username}</li>
          <li><EmailIcon/>email: {user.email} </li>
          <li><PhoneIcon/>phone: {user.phone} </li>
          <li><LanguageIcon/>website: {user.website}</li>

          {user.company && <li><BusinessIcon />company: {user.company.name} </li>}
          <li><HomeIcon/>address:  </li>
        </ul>
        {user.address && (
          <ul>
            <li>street: {user.address.street}</li>
            <li>suite: {user.address.suite}</li>
            <li>city: {user.address.city}</li>
            <li>zipcode: {user.address.zipcode}</li>
          </ul>
        )}
        <CardActions className={classes.button}>
        <Button className={classes.button}
          onClick={() => {
            history.push('/');
          }}
          variant="contained"
        >
          CLOSE
        </Button>
        </CardActions>
        </CardContent>
        </Card>
        </div>
  ) 
};

export default Users;

const useStyles = makeStyles({
  root: {
    width: 300,
    backgroundColor: '#9A9DB7',
  },
  spacing: {
    padding: '8% 6%',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  button: {
    backgroundColor: 'black',
    color: 'white',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',  
  },
  
 
});