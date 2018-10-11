import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';


const styles = {
  taskscard: {
           height:'90px',
           display:'flex',
           padding: 0,
           flexDirection:'column',
           width:'100%',
           color: 'black',
           backgroundColor:'white',
                   
          },
      };

      
      

      function Taskmanagement(props) {
        const { classes } = props;
        
      
        return (
 
           <div className="wrapper">
            
             <div className="taskrow">
                <h2>Task Tracker</h2>
                <hr></hr>
            </div>
            <div className="taskrow">
            <div className="taskwrapper">
              <div>
                <h3>Not Started</h3>
              </div>
            <div>
            <Card className={classes.taskscard}>
                   
                 <CardContent>
                     <b>Users</b>
                 </CardContent>
             </Card>
             
             </div>
             <br></br>
             <br></br>
             <div>
            <Card className={classes.taskscard}>
                   
                 <CardContent>
                     <b>Users</b>
                 </CardContent>
             </Card>
             
             </div>
             <br></br>
             <br></br>
             <div>

             <Card className={classes.taskscard}>
                   
                 <CardContent>
                     <b>Users</b>
                 </CardContent>
             </Card>
             </div>
             <br></br>
             <br></br>
             <div>
             <Card className={classes.taskscard}>
                  
                 <CardContent>
                     <b>Users</b>
                 </CardContent>
             </Card>

              </div>
              <br></br>
              <br></br>

 <div>
             <Card className={classes.taskscard}>
                  
                 <CardContent>
                     <b>Users</b>
                 </CardContent>
             </Card>

              </div>
              <br></br>
              <br></br>

 <div>
             <Card className={classes.taskscard}>
                  
                 <CardContent>
                     <b>Users</b>
                 </CardContent>
             </Card>

              </div>
              <br></br>
              <br></br>

</div>             
<div className="taskwrapper">
               <div>
               <h3>Started</h3>
              </div>
              <div>
             <Card className={classes.taskscard}>
                  
                 <CardContent>
                     <b>Users</b>
                 </CardContent>
             </Card>

              </div>
              <br></br>
              <br></br>
              <div>
             <Card className={classes.taskscard}>
                  
                 <CardContent>
                     <b>Users</b>
                 </CardContent>
             </Card>

              </div>
              <br></br>
              <br></br>
            </div>
            <div className="taskwrapper">
               <div>
               <h3>Done</h3>
              </div>
              <div>
             <Card className={classes.taskscard}>
                  
                 <CardContent>
                     <b>Users</b>
                 </CardContent>
             </Card>

              </div>
              <br></br>
              <br></br>
              <div>
             <Card className={classes.taskscard}>
                  
                 <CardContent>
                     <b>Users</b>
                 </CardContent>
             </Card>

              </div>
              <br></br>
              <br></br>
              <div>
             <Card className={classes.taskscard}>
                  
                 <CardContent>
                     <b>Users</b>
                 </CardContent>
             </Card>

              </div>
              <br></br>
              <br></br>
            </div>
            <div className="taskwrapper">
               <div>
               <h3>Overdue</h3>
              </div>
              <div>
             <Card className={classes.taskscard}>
                  
                 <CardContent>
                     <b>Users</b>
                 </CardContent>
             </Card>

              </div>
              <br></br>
              <br></br>
              <div>
            <Card className={classes.taskscard}>
                   
                 <CardContent>
                     <b>Users</b>
                 </CardContent>
             </Card>
             
             </div>
             <br></br>
             <br></br>
            </div>
            <div className="taskwrapper">
              <div>
              <h3>Discarded</h3>
              </div>
              <div>
             <Card className={classes.taskscard}>
                  
                 <CardContent>
                     <b>Users</b>
                 </CardContent>
             </Card>

              </div>
              <br></br>
              <br></br>
            </div>
            </div>
            </div>
      
    );
}


export default withStyles(styles)(Taskmanagement);