import React, { useState, useEffect } from 'react';
import Cards from '../Cards/Cards';
import axios from "axios";
import { Grid } from '@material-ui/core';


const HomePage = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        fetchUsers();
      }, []);

      // get users from database
      const fetchUsers = async () => {
        const result = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(result.data);
    };

    return (
        <div>    
        <Grid container
        spacing={3}
        direction="row"
        >     
    
          {users.map((item) => (
            <Grid item xs={3} sm={6} md={4} key={users.indexOf(item)}>
              <Cards key={item.id} id={item.id} name={item.name} username={item.username} website={item.website} />
              </Grid>
            ))}
            
    
        </Grid>
        </div>
      );
    };
    
    export default HomePage;
    
        





