import React from 'react';
import classes from './ChoresList.module.css';

class ChoresList extends React.Component {
   render() {
      const items = ['Grocery shop', 'Laundry', 'Build a better robot'];
      return (
         <div>
            <h3 className={classes.choresHeading}>Todays Chores</h3>
            <ol>
               <li className={classes.choresText}>{items[0]}</li>
               <li className={classes.choresText}>{items[1]}</li>
               <li className={classes.choresText}>{items[2]}</li>
            </ol>
         </div >
      );
   }
}
export default ChoresList;