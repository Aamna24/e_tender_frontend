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

function AdminHome(props) {
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
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div  style={{flexDirection: 'row',display:'flex' ,justifyContent:"space-around"}} className='container'>

          <button onClick={()=>{
            window.location.href='https://etender-backend.herokuapp.com/admin/'
          }} >
            View Dashbord
          </button>
        <Card className={classes.root}>
      <CardContent>
        {/*<Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
          </Typography>*/}
        <Typography variant="h5" component="h2" style={{fontSize:"3rem"}} className='text-center'>
            {activeTendersCount}
        </Typography>
        <Typography className={classes.pos} color="textSecondary" className='text-center'>
           Total Users
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    <Card className={classes.root} >
      <CardContent>
        {/*<Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
          </Typography>*/}
        <Typography variant="h5" component="h2" style={{fontSize:"3rem"}} className='text-center'>
            {usersCount}
        </Typography>
        <Typography className={classes.pos} color="textSecondary" className='text-center'>
           Total Users
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>


    <Card className={classes.root} style={{marginTop:"80px", }}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
         hello
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>


      </div>
      </main>
    
    </div>
  );
}



export default AdminHome;