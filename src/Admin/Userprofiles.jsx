import React, {useEffect} from 'react';

import {Card,CardContent,CardActions,Button }from '@material-ui/core';

import Typography from '@material-ui/core/Typography';
import * as auth from '../services/authServices'
import Design from './adminDesign'
import { makeStyles, useTheme } from '@material-ui/core/styles';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection:'row'
  },
  
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function UserProfiles(props) {
  const classes = useStyles();

  const [activeTendersCount , setActiveTendersCount] = React.useState(0)
  const [usersCount , setUsersCount] = React.useState(0)

 

  useEffect(() => {
    async function getActiveTendersCount(){
      const allTenders = await auth.getTenders()
      const activeTenders = allTenders.data.filter(x=>x.availibility==='Active')
      setActiveTendersCount(activeTenders.length)
    }
    getActiveTendersCount()
  }, []) 

  useEffect(() => {
    async function getUsersCount(){
      const allusers = await auth.getUsers()
      const users = allusers.data.filter(x=>x.organization_name!=='admin')
      setUsersCount(users.length)
    }
    getUsersCount()
  }, []) 


  

  return (
    <div>
      <Design/>
     {/* <main className={classes.content}>
        <div className={classes.toolbar} />
        <div  style={{flexDirection: 'row',display:'flex' ,justifyContent:"space-around"}} className='container'>
         
      


      </div>
  </main>*/}
            <div className='container'>
                <h3>List of users</h3>
            </div>

    
    </div>
  );
}



export default UserProfiles;