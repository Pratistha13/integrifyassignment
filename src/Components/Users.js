import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent } from '@material-ui/core';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const classes = useStyles();


  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
      setUser(result.data);
    };

    fetchData();
  }, [id]);


  return (
    <div className = {classes.spacing}>
      <Card className = {classes.root}>
        <CardContent>
        <ul >
          <li>name: {user.name}</li>
          <li>username: {user.username}</li>
          <li>email: {user.email}</li>
          <li>phone: {user.phone}</li>
          <li>website: {user.website}</li>

          {user.company && <li>company: {user.company.name}</li>}
          <li>address: </li>
        </ul>
        {user.address && (
          <ul>
            <li>street: {user.address.street}</li>
            <li>suite: {user.address.suite}</li>
            <li>city: {user.address.city}</li>
            <li>zipcode: {user.address.zipcode}</li>
          </ul>
        )}
        </CardContent>
        </Card>
        </div>
  ) 
};

export default User;

const useStyles = makeStyles({
  root: {
    width: 300,
  },
  spacing: {
    marginLeft: '40%', 
    paddingTop: '10%'

  }
});